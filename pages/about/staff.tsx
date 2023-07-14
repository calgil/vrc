import { Hero } from "@/components/Hero";
import Head from "next/head";

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers | North Springs Veterinary Referral Center</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Transforming the veterinary experience through empathy and transparency Opening Summer 2023! Stay in the Know! Subscribe to our newsletter to receive the latest information and news about our Grand Opening!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero homepage={false} bgUrl="/" heading="Meet Our Staff" />
        <section> Coming Soon!</section>
      </main>
    </>
  );
}
