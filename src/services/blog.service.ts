import request, { gql } from "graphql-request";
import { BlogsType, CategoriesType } from "../interface/blogs.interface";

const graphqlApi = process.env.NEXT_PUBLIC_API as string;

export const BlogService = {
  async getAllBlogs() {
    const query = gql`
      query GetBlogs {
        blogs {
          id
          title
          slug
          excerpt
          image {
            url
          }
          author {
            name
            id
            avatar {
              url
            }
          }
          category {
            id
            label
            slug
          }
          createdAt
        }
      }
    `;
    const result = await request<{ blogs: BlogsType[] }>(graphqlApi, query);
    return result.blogs;
  },

  async getLatestBlogs() {
    const query = gql`
      query GetLatestBlogs {
        blogs(last: 2) {
          id
          title
          slug
          image {
            url
          }
          author {
            name
            id
            avatar {
              url
            }
          }
          createdAt
        }
      }
    `;
    const result = await request<{ blogs: BlogsType[] }>(graphqlApi, query);
    return result.blogs;
  },

  async getDetailBlog(slug: string) {
    const query = gql`
      query GetDetailBlog($slug: String!) {
        blog(where: { slug: $slug }) {
          id
          image {
            url
          }
          title
          slug
          excerpt
          createdAt
          author {
            name
            id
            avatar {
              url
            }
          }
          category {
            id
            label
            slug
          }
          description {
            html
          }
        }
      }
    `;
    const result = await request<{ blog: BlogsType }>(graphqlApi, query, {
      slug,
    });
    return result.blog;
  },

  async getCategoryDetail(slug: string) {
    const query = gql`
      query CategoryDetail($slug: String!) {
        blogs(where: { category: { slug: $slug } }) {
          id
          title
          slug
          image {
            url
          }
          author {
            name
            id
            avatar {
              url
            }
          }
          description {
            html
          }
          createdAt
        }
      }
    `;

    const result = await request<{ blogs: BlogsType[] }>(graphqlApi, query, {
      slug,
    });
    return result.blogs;
  },

  async getCategories() {
    const query = gql`
      query Categories {
        categories {
          label
          slug
        }
      }
    `;
    const result = await request<{ categories: CategoriesType[] }>(
      graphqlApi,
      query
    );
    return result.categories;
  },
};
