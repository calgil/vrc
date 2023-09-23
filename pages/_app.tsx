import { Layout } from "@/components/Layout";
import localFont from "next/font/local";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import { CustomMetadata, Meta } from "@/components/Meta";

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

const defaultMetadata: CustomMetadata = {
  title: "Default Title",
  description:
    "Open Now! 24 hour Emergency Veterinarian Clinic serving Colorado Springs and the surrounding area. Our experienced team is prepared for any pet emergency and will provide the highest quality of care for your beloved family member.",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta data={defaultMetadata} />
      <div className={myFont.className}>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </div>
    </>
  );
}
