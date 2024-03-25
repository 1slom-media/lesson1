import { BlogsType, CategoriesType } from "../../interface/blogs.interface";

export interface SidebarProps {
  latestBlogs: BlogsType[];
  categories: CategoriesType[];
}
