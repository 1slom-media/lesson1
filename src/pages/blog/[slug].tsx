import { GetServerSideProps } from "next";
import Head from "next/head";
import { BlogService } from "../../services/blog.service";
import { BlogsType, CategoriesType } from "../../interface/blogs.interface";
import Layout from "../../layout/layout";
import { Sidebar } from "../../components";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";
import Seo from "../../layout/seo/seo";

const DetailedBlog = ({ blog, latestBlogs, categories }: DetailedBlogProps) => {
  return (
    <Seo metaTitle={blog.title}>
      <Layout>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            padding: "20px",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            width={{ xs: "100%", md: "70%" }}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Box
              key={blog.id}
              sx={{
                backgroundColor: "rgba(0,0,0,.5)",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 8px 16px rgba(255,255,255,.1)",
                cursor: "pointer",
              }}
            >
              <Box
                position={"relative"}
                width={"100%"}
                height={{ xs: "30vh", md: "50vh" }}
              >
                <Image
                  alt={blog.title}
                  src={blog.image.url}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Typography variant="h4" marginTop={"30px"}>
                {blog.title}
              </Typography>
              <Typography variant="body1" color={"gray"}>
                {blog.excerpt}
              </Typography>
              <Divider sx={{ marginTop: "20px" }} />
              <Box
                sx={{
                  display: "flex",
                  alignblogs: "center",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <Avatar alt={blog.author.name} src={blog.author.avatar.url} />
                <Box>
                  <Typography variant="body2">{blog.author.name}</Typography>
                  <Box color={"gray"}>
                    {format(blog.createdAt, "dd MMM,yyyy")}
                  </Box>
                  <div
                    dangerouslySetInnerHTML={{ __html: blog.description.html }}
                  ></div>
                </Box>
              </Box>
            </Box>
          </Box>
          <Sidebar latestBlogs={latestBlogs} categories={categories} />
        </Box>
      </Layout>
    </Seo>
  );
};

export default DetailedBlog;

export const getServerSideProps: GetServerSideProps<
  DetailedBlogProps
> = async ({ query }) => {
  const blog = await BlogService.getDetailBlog(query.slug as string);
  const latestBlogs = await BlogService.getLatestBlogs();
  const categories = await BlogService.getCategories();
  return {
    props: {
      blog,
      latestBlogs,
      categories,
    },
  };
};

interface DetailedBlogProps {
  blog: BlogsType;
  latestBlogs: BlogsType[];
  categories: CategoriesType[];
}
