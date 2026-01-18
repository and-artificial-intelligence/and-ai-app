import type { Document } from '@contentful/rich-text-types';
import type { EntryFieldTypes, EntrySkeletonType } from 'contentful';

export interface BlogPostFields {
  title: EntryFieldTypes.Text;
  slug: EntryFieldTypes.Text;
  description: EntryFieldTypes.Text;
  author?: EntryFieldTypes.Text;
  date?: EntryFieldTypes.Date;
  coverImage?: EntryFieldTypes.AssetLink;
  featureImage?: EntryFieldTypes.AssetLink;
  content: EntryFieldTypes.RichText;
}

export type BlogPostSkeleton = EntrySkeletonType<BlogPostFields, 'pageBlogPost'>;

export type BlogPostImage = {
  url: string;
  title: string;
  width?: number;
  height?: number;
};

export type BlogPost = {
  title: string;
  slug: string;
  description: string;
  author: string;
  date: string;
  coverImage: BlogPostImage | null;
  featureImage: BlogPostImage | null;
  content: Document | null;
};
