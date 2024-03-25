import { GetServerSideProps } from "next";
import Layout from "../../layout/layout";
import { BlogsType } from "../../interface/blogs.interface";
import { BlogService } from "../../services/blog.service";
import { Content } from "../../components";
import { Box } from "@mui/material";
import Seo from "../../layout/seo/seo";

const Blogs = ({ blogs }: BlogPageProps) => {
  return (
    <Seo metaTitle="All blogs">
      <Layout>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            padding: "20px",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
          }}
        >
          <Content blogs={blogs} />
        </Box>
      </Layout>
    </Seo>
  );
};

export default Blogs;

export const getServerSideProps: GetServerSideProps<
  BlogPageProps
> = async () => {
  const blogs = await BlogService.getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
};

interface BlogPageProps {
  blogs: BlogsType[];
}
