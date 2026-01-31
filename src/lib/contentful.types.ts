import type { Document } from '@contentful/rich-text-types';
import type { EntryFieldTypes, EntrySkeletonType } from 'contentful';

export interface SeoFields {
  internalName: EntryFieldTypes.Text;
  pageTitle: EntryFieldTypes.Text;
  pageDescription?: EntryFieldTypes.Text;
  canonicalUrl?: EntryFieldTypes.Text;
  nofollow: EntryFieldTypes.Boolean;
  noindex: EntryFieldTypes.Boolean;
  shareImages?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type SeoSkeleton = EntrySkeletonType<SeoFields, 'componentSeo'>;

export interface BlogPostFields {
  title: EntryFieldTypes.Text;
  slug: EntryFieldTypes.Text;
  subtitle?: EntryFieldTypes.Text;
  description: EntryFieldTypes.Text;
  author?: EntryFieldTypes.Text;
  date?: EntryFieldTypes.Date;
  coverImage?: EntryFieldTypes.AssetLink;
  featureImage?: EntryFieldTypes.AssetLink;
  content: EntryFieldTypes.RichText;
  seo?: EntryFieldTypes.EntryLink<SeoSkeleton>;
}

export type BlogPostSkeleton = EntrySkeletonType<BlogPostFields, 'pageBlogPost'>;

export type BlogPostImage = {
  url: string;
  title: string;
  width?: number;
  height?: number;
};

export type BlogPostSeo = {
  pageTitle: string;
  pageDescription: string | null;
  canonicalUrl: string | null;
  nofollow: boolean;
  noindex: boolean;
  shareImages: BlogPostImage[];
};

export type BlogPost = {
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  author: string;
  date: string;
  updatedAt: string;
  coverImage: BlogPostImage | null;
  featureImage: BlogPostImage | null;
  content: Document | null;
  seo: BlogPostSeo | null;
};
