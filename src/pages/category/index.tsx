import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import Layout from "../../layout/layout";
import { GetServerSideProps } from "next";
import { CategoriesType } from "../../interface/blogs.interface";
import { BlogService } from "../../services/blog.service";
import { useRouter } from "next/router";
import Seo from "../../layout/seo/seo";

const Category = ({ categories }: CategoryPageProps) => {
  const router = useRouter();
  return (
    <Seo metaTitle="All categories">
      <Layout>
        <Box
          width={{ xs: "100%", md: "80%" }}
          marginX={"auto"}
          marginTop={"5vh"}
          borderRadius={"8px"}
          height={{ xs: "30vh", md: "50vh" }}
          sx={{
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            rowGap: "10px",
          }}
        >
          <Typography variant="h3" fontFamily={"cursive"}>
            All Categories
          </Typography>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            {categories.map((item) => (
              <Button
                onClick={() => router.push(`/category/${item.slug}`)}
                key={item.slug}
              >
                #{item.label}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      </Layout>
    </Seo>
  );
};

export default Category;

export const getServerSideProps: GetServerSideProps<
  CategoryPageProps
> = async () => {
  const categories = await BlogService.getCategories();
  return {
    props: {
      categories,
    },
  };
};

interface CategoryPageProps {
  categories: CategoriesType[];
}
