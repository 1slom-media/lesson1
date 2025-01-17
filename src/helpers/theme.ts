import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Acial", "sans-serif"],
});

const theme = createTheme({
  palette:{
    mode:"dark"
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});
export default theme;
