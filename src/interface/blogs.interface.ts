export interface BlogsType {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: {
    url: string;
  };
  author: {
    name: string;
    id: string;
    avatar: {
      url: string;
    };
  };
  category: {
    id: string;
    label: string;
    slug: string;
  };
  description: {
    html: string;
  };
  createdAt: string;
}

export interface CategoriesType {
  slug: string;
  label: string;
}

export interface HomePageProps {
  blogs: BlogsType[];
  latestBlogs: BlogsType[];
  categories: CategoriesType[];
}
