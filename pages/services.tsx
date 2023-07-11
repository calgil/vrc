"use client";
import s from "../styles/pages/Services.module.scss";
import { Hero } from "@/components/Hero";
import { ServicesContent } from "@/components/ServicesContent";
import { ServicesSidebar } from "@/components/ServicesSidebar";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

export default function Services() {
  const router = useRouter();
  const path = router.asPath;
  const page = path.slice(path.lastIndexOf("#") + 1);

  return (
    <>
      <Head>
        <title>Services | North Springs Veterinary Referral Center</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Transforming the veterinary experience through empathy and transparency Opening Summer 2023! Stay in the Know! Subscribe to our newsletter to receive the latest information and news about our Grand Opening!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero
          homepage={false}
          bgUrl="/pages/services/servicesBanner.webp"
          heading="Specialty Services"
          subHeading="Our specialty teams are available for appointments  to diagnose and treat a variety of conditions."
        />
        <div className={s.services}>
          <ServicesSidebar activeLink={page} />
          <ServicesContent activePage={page} />
        </div>
      </main>
    </>
  );
}
