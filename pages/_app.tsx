import { Layout } from "@/components/Layout";
import localFont from "next/font/local";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.scss";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const myFont = localFont({
  src: [
    { path: "../public/fonts/rockford-sans-heavy.otf", weight: "900" },
    { path: "../public/fonts/rockford-sans-extrabold.otf", weight: "800" },
    { path: "../public/fonts/rockford-sans-bold.otf", weight: "700" },
    { path: "../public/fonts/rockford-sans-medium.otf", weight: "500" },
    { path: "../public/fonts/rockford-sans-regular.otf", weight: "400" },
    { path: "../public/fonts/rockford-sans-light.otf", weight: "300" },
    { path: "../public/fonts/rockford-sans-extralight.otf", weight: "100" },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={myFont.className}>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </div>

  );
}
