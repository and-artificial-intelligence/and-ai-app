import { createClient } from 'contentful';
import type { Asset, Entry } from 'contentful';

import type { BlogPost, BlogPostImage, BlogPostSkeleton } from './contentful.types';

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!space || !accessToken) {
  throw new Error(
    'Missing Contentful configuration. Set CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN.',
  );
}

const client = createClient({
  space,
  accessToken,
});

const blogPostContentType = 'pageBlogPost';
const blogPostDateField = process.env.CONTENTFUL_BLOG_POST_DATE_FIELD;
const blogPostFeatureImageField =
  process.env.CONTENTFUL_BLOG_POST_FEATURE_IMAGE_FIELD;

const asAsset = (value: unknown): Asset | null => {
  if (!value || typeof value !== 'object') return null;
  if (!('fields' in value)) return null;
  return value as Asset;
};

const getAssetImage = (asset: Asset | null): BlogPostImage | null => {
  if (!asset) return null;
  const title = typeof asset.fields.title === 'string' ? asset.fields.title : '';
  const file = asset.fields.file;
  if (!file || typeof file !== 'object' || !('url' in file)) return null;

  const url = typeof file.url === 'string' ? file.url : '';
  if (!url) return null;

  const details =
    file &&
    typeof file === 'object' &&
    'details' in file &&
    typeof file.details === 'object'
      ? (file.details as { image?: { width?: number; height?: number } })
      : undefined;
  const width =
    typeof details?.image?.width === 'number' ? details.image.width : undefined;
  const height =
    typeof details?.image?.height === 'number'
      ? details.image.height
      : undefined;

  return {
    url: url.startsWith('//') ? `https:${url}` : url,
    title,
    width,
    height,
  };
};

const getDateFieldValue = (
  fields: Record<string, unknown>,
): string | undefined => {
  const candidates = [
    blogPostDateField,
    'date',
    'publishDate',
    'publishedDate',
    'datePublished',
  ].filter(Boolean) as string[];

  for (const key of candidates) {
    const value = fields[key];
    if (typeof value === 'string') return value;
  }
  return undefined;
};

const normalizeAuthorName = (value: string): string => {
  if (value === 'Claeb Harris') return 'Caleb';
  if (value === 'AndAI') return '&AI Team';
  if (value === 'Caleb' || value === 'Caleb Harris') return 'Caleb, Founder';
  if (value === 'Herbie' || value === 'Herbie Turner')
    return 'Herbie, Founder';
  return value;
};

const getAuthorFieldValue = (
  fields: Record<string, unknown>,
): string | undefined => {
  const candidates = ['author', 'authorName', 'byline', 'writer'].filter(
    Boolean,
  ) as string[];

  for (const key of candidates) {
    const value = fields[key];
    if (typeof value === 'string') return normalizeAuthorName(value);
  }
  return undefined;
};

const normalizeBlogPost = (entry: Entry<BlogPostSkeleton>): BlogPost => {
  const fields = entry.fields as Record<string, unknown>;
  const featureImageFieldCandidates = [
    blogPostFeatureImageField,
    'featureImage',
    'feature_image',
    'featureimage',
    'featuredImage',
  ].filter(Boolean) as string[];
  const featureImageField = featureImageFieldCandidates.find(
    (key) => fields[key],
  );

  return {
    title: typeof fields.title === 'string' ? fields.title : '',
    slug: typeof fields.slug === 'string' ? fields.slug : '',
    description: typeof fields.description === 'string' ? fields.description : '',
    author: getAuthorFieldValue(fields) ?? '&AI Team',
    date:
      getDateFieldValue(fields) ??
      entry.sys.updatedAt ??
      entry.sys.createdAt,
    coverImage: getAssetImage(asAsset(fields.coverImage)),
    featureImage: getAssetImage(
      asAsset(featureImageField ? fields[featureImageField] : null),
    ),
    content: (fields.content as BlogPost['content']) ?? null,
  };
};

const isUnknownFieldError = (error: unknown, fieldId: string): boolean => {
  if (!error || typeof error !== 'object') return false;
  const details = (error as { details?: { errors?: unknown[] } }).details;
  if (!details?.errors) return false;
  return details.errors.some((detail) => {
    if (!detail || typeof detail !== 'object') return false;
    const path = (detail as { path?: string[] }).path;
    return Array.isArray(path) && path[0] === 'fields' && path[1] === fieldId;
  });
};

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const orderByDate = (blogPostDateField
    ? [`-fields.${blogPostDateField}`]
    : ['-sys.updatedAt']) as string[];
  let entries;

  try {
    entries = await client.getEntries<BlogPostSkeleton>({
      content_type: blogPostContentType,
      order: orderByDate as unknown as never[],
      include: 2,
    });
  } catch (error) {
    if (!blogPostDateField || !isUnknownFieldError(error, blogPostDateField)) {
      throw error;
    }
    entries = await client.getEntries<BlogPostSkeleton>({
      content_type: blogPostContentType,
      order: ['-sys.updatedAt'],
      include: 2,
    });
  }

  return entries.items
    .map(normalizeBlogPost)
    .filter((post) => post.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getBlogPostBySlug = async (
  slug: string,
): Promise<BlogPost | null> => {
  const entries = await client.getEntries<BlogPostSkeleton>({
    content_type: blogPostContentType,
    'fields.slug': slug,
    limit: 1,
    include: 2,
  });

  const entry = entries.items[0];
  return entry ? normalizeBlogPost(entry) : null;
};

export const getBlogPostSlugs = async (): Promise<string[]> => {
  let entries;
  try {
    entries = await client.getEntries<BlogPostSkeleton>({
      content_type: blogPostContentType,
      order: (blogPostDateField
        ? [`-fields.${blogPostDateField}`]
        : ['-sys.updatedAt']) as unknown as never[],
    });
  } catch (error) {
    if (!blogPostDateField || !isUnknownFieldError(error, blogPostDateField)) {
      throw error;
    }
    entries = await client.getEntries<BlogPostSkeleton>({
      content_type: blogPostContentType,
      order: ['-sys.updatedAt'],
    });
  }

  return entries.items
    .map((entry) => entry.fields.slug)
    .filter((slug): slug is string => Boolean(slug));
};
