export interface TBlogBlock {
  slug: string;
  image: string;
  title: string;
  description: string;
}

export interface TBlogPost {
  thumbnail: string;
  blog_content: string;
  blog_id: string;
  blog_title: string;
  blog_slug: string;
  blog_short_desc: string;
}

export interface TBlogDetail {
  slug: string;
}
