"use client";
import { CustomMetadata, Meta } from "@/components/Meta";
import s from "../styles/pages/Services.module.scss";
import { Hero } from "@/components/Hero";
import { ServicesContent } from "@/components/ServicesContent";
import { ServicesSidebar } from "@/components/ServicesSidebar";
import { useRouter } from "next/router";

export default function Services() {
  const customMetadata: CustomMetadata = {
    title: "Specialty Animal Services",
    keywords: [
      "animal anesthesiology",
      "animal cardiology",
      "animal internal medicine",
      "animal surgery",
      "animal rehabilitation",
    ],
  };
  const router = useRouter();
  const path = router.asPath;
  const page = path.slice(path.lastIndexOf("#") + 1);

  return (
    <>
      <Meta data={customMetadata} />
      <main>
        <Hero
          homepage={false}
          bgUrl="/pages/services/servicesBanner.webp"
          heading="Specialty Services"
          subHeading="Our specialty teams are available for appointments  to diagnose and treat a variety of conditions."
        />
        <div className={s.services}>
          <ServicesSidebar />
          <ServicesContent activePage={page} />
        </div>
      </main>
    </>
  );
}
