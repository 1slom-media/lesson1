import { Avatar, Box, Divider, Typography } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";
import { ContentProps } from "./content.props";
import { useRouter } from "next/router";

const Content = ({ blogs }: ContentProps) => {
  const router = useRouter();
  return (
    <Box
      width={{ xs: "100%", md: "70%" }}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {blogs.map((item) => (
        <Box
          onClick={() => router.push(`/blog/${item.slug}`)}
          key={item.id}
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
              alt={item.title}
              src={item.image.url}
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Typography variant="h4" marginTop={"30px"}>
            {item.title}
          </Typography>
          <Typography variant="body1" color={"gray"}>
            {item.excerpt}
          </Typography>
          <Divider sx={{ marginTop: "20px" }} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <Avatar alt={item.author.name} src={item.author.avatar.url} />
            <Box>
              <Typography variant="body2">{item.author.name}</Typography>
              <Box color={"gray"}>{format(item.createdAt, "dd MMM,yyyy")}</Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Content;
