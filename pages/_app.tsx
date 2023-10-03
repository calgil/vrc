import { Layout } from "@/components/Layout";
import localFont from "next/font/local";
import type { AppProps } from "next/app";
import Script from "next/script";
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
  title: "North Springs Veterinary Referral Center",
  description:
    "Open Now! 24 hour Emergency Veterinarian Clinic serving Colorado Springs and the surrounding area. Our experienced team is prepared for any pet emergency and will provide the highest quality of care for your beloved family member.",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        // strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Meta data={defaultMetadata} />
      <div className={myFont.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
