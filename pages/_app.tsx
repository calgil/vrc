import { Layout } from "@/components/Layout";
import "@/styles/globals.css";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";

const theme = createTheme({
  type: "dark",
  theme: {
    colors: {
      primaryLight: "$green200",
      primaryLightHover: "$green300",
      primaryLightActive: "$green400",
      primaryLightContrast: "$green600",
      primary: "#4ADE7B",
      primaryBorder: "$green500",
      primaryBorderHover: "$green600",
      primarySolidHover: "$green700",
      primarySolidContrast: "$white",
      primaryShadow: "$green500",

      heroGradient:
        "linear-gradient(108deg, rgba(36, 123, 130, 0.89) 64.91%, transparent 65%)",
      link: "#5E1DAD",
      // you can also create your own color
      myColor: "#247b82",
    },
    space: {},
    fonts: {},
    fontSizes: {
      xs: "0.75rem" /* 12px */,
      sm: "0.875rem" /* 14px */,
      base: "1rem" /* 16px */,
      md: "1rem" /* 16px */,
      lg: "1.125rem" /* 18px */,
      xl: "1.25rem" /* 20px */,
      "2xl": "1.5rem" /* 24px */,
      "3xl": "1.892rem" /* 30px */,
      "4xl": "2.4rem",
      "5xl": "3rem" /* 48px */,
      "6xl": "3.75rem" /* 60px */,
      "7xl": "4.5rem" /* 72px */,
      "8xl": "6rem" /* 96px */,
      "9xl": "8rem" /* 128px */,
    },
    // fontWeights: {
    //   hairline: 100,
    //   thin: 200,
    //   light: 300,
    //   normal: 400,
    //   medium: 500,
    //   semibold: 600,
    //   bold: 700,
    //   extrabold: 800,
    //   black: 900,
    // },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}
