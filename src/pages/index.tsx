import Head from "next/head";
import Layout from "../layout/layout";
import { Content, Hero, Sidebar } from "../components";
import { Box } from "@mui/material";
import { HomePageProps } from "../interface/blogs.interface";
import { GetServerSideProps } from "next";
import { BlogService } from "../services/blog.service";
import Seo from "../layout/seo/seo";

const Index = ({ blogs, latestBlogs, categories }: HomePageProps) => {
  return (
    <Seo
      metaTitle="Islom Blogs"
      metaDescription="Next js project blog site"
      metaKeywords="blogs,next"
      author="Islombek Tagayev"
    >
      <Layout>
        <Hero blogs={blogs.slice(0, 3)} />
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

export default Index;

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  const blogs = await BlogService.getAllBlogs();
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
