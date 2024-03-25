import { Box } from "@mui/material";
import { Footer, Navbar } from "../components";
import { LayoutProps } from "./layout.props";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <Box minHeight={"90vh"}>{children}</Box>
      <Footer />
    </div>
  );
};

export default Layout;
