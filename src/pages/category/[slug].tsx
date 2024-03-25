import Head from "next/head";
import { BlogsType, CategoriesType } from "../../interface/blogs.interface";
import { BlogService } from "../../services/blog.service";
import { GetServerSideProps } from "next";
import Layout from "../../layout/layout";
import { Box } from "@mui/material";
import { Content, Sidebar } from "../../components";
import Seo from "../../layout/seo/seo";
import { useRouter } from "next/router";

const CategoryDetail = ({
  blogs,
  latestBlogs,
  categories,
}: DetailedCategoryProps) => {
  const router = useRouter();
  return (
    <Seo metaTitle={`${router.query.slug}-category`}>
      <Layout>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            padding: "20px",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Sidebar latestBlogs={latestBlogs} categories={categories} />
          <Content blogs={blogs} />
        </Box>
      </Layout>
    </Seo>
  );
};

export default CategoryDetail;

export const getServerSideProps: GetServerSideProps<
  DetailedCategoryProps
> = async ({ query }) => {
  const blogs = await BlogService.getCategoryDetail(query.slug as string);
  const latestBlogs = await BlogService.getLatestBlogs();
  const categories = await BlogService.getCategories();
  return {
    props: {
      blogs,
      latestBlogs,
      categories,
    },
  };
};

interface DetailedCategoryProps {
  blogs: BlogsType[];
  latestBlogs: BlogsType[];
  categories: CategoriesType[];
}
