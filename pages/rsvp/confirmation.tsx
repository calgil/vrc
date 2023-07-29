import s from "../../styles/pages/RsvpConfirmation.module.scss";
import { Hero } from "@/components/Hero";
import Head from "next/head";
import Link from "next/link";

export default function Confirmation() {
  return (
    <>
      <Head>
        <title>Confirmation | North Springs Veterinary Referral Center</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Transforming the veterinary experience through empathy and transparency Opening Summer 2023! Stay in the Know! Subscribe to our newsletter to receive the latest information and news about our Grand Opening!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero
          homepage={true}
          bgUrl="/pages/home/homeBanner.webp"
          subHeading="Transforming the veterinary experience through 
          empathy and transparency"
        />
        <section className={s.confirmation}>
          <h1 className={s.title}>You’re all set!</h1>
          <p className={s.content}>
            We&apos;re looking forward to seeing you at our Open House on
            September 9th at 12-6pm
          </p>
          <Link className={s.link} href="/">
            return to homepage
          </Link>
        </section>
      </main>
    </>
  );
}
