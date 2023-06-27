import { Hero } from "@/components/Hero";
import s from "../styles/pages/About.module.scss";
import Head from "next/head";
import { OurStory } from "@/components/OurStory";
import { CoreValues } from "@/components/CoreValues";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | North Springs Veterinary Referral Center</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Transforming the veterinary experience through empathy and transparency Opening Summer 2023! Stay in the Know! Subscribe to our newsletter to receive the latest information and news about our Grand Opening!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero homepage={false} bgUrl="" heading="About Us" />
        <OurStory />
        <CoreValues />
        <div className={s.btnContainer}>
          <Link href="/contact" className={s.contactBtn}>
            contact us
          </Link>
        </div>
      </main>
    </>
  );
}
