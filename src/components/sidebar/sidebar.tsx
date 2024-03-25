import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import { Fragment } from "react";
import Image from "next/image";
import { format } from "date-fns";
import { SidebarProps } from "./sidebar.props";
import { useRouter } from "next/router";

const Sidebar = ({ latestBlogs, categories }: SidebarProps) => {
  const router = useRouter();
  return (
    <Box width={{ xs: "100%", md: "30%" }}>
      <Box position={"sticky"} top={"100px"}>
        <Box padding={"20px"} border={"1px solid gray"} borderRadius={"8px"}>
          <Typography variant="h5">Category</Typography>
          {categories.map((item) => (
            <Fragment key={item.label}>
              <Button
                fullWidth
                onClick={() => router.push(`/category/${item.slug}`)}
                sx={{ justifyContent: "flex-start", height: "50px" }}
              >
                {item.label}
              </Button>
              <Divider />
            </Fragment>
          ))}
        </Box>
        <Box
          padding={"20px"}
          border={"1px solid gray"}
          borderRadius={"8px"}
          marginTop={"20px"}
        >
          <Typography variant="h5" marginBottom={"20px"}>
            Latest Blog
          </Typography>
          {latestBlogs.map((item) => (
            <Box marginTop={"20px"} key={item.title}>
              <Box
                onClick={() => router.push(`/blog/${item.slug}`)}
                sx={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Image
                  alt={item.title}
                  src={item.image.url}
                  width={100}
                  height={100}
                  style={{ objectFit: "cover" }}
                />
                <Box>
                  <Typography variant="body1" marginBottom={"5px"}>
                    {item.title}
                  </Typography>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <Avatar
                      alt={item.author.name}
                      src={item.author.avatar.url}
                    />
                    <Box>
                      <Typography variant="body2">
                        {item.author.name}
                      </Typography>
                      <Box color={"gray"}>
                        {format(item.createdAt, "dd MMM,yyyy")}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Divider sx={{ marginTop: "20px" }} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
