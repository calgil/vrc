import Head from "next/head";
import { Inter } from "next/font/google";
import s from "../styles/pages/Home.module.scss";
import { Hero } from "@/components/Hero";
import { OurStory } from "@/components/OurStory";
import { CoreValues } from "@/components/CoreValues";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | North Springs Veterinary Referral Center</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Transforming the veterinary experience through empathy and transparency Opening Summer 2023! Stay in the Know! Subscribe to our newsletter to receive the latest information and news about our Grand Opening!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={s.main}>
        <Hero />
        <OurStory />
        <CoreValues />
      </main>
    </>
  );
}
