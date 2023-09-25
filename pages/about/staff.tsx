import { ComingSoon } from "@/components/ComingSoon";
import { Hero } from "@/components/Hero";
import { CustomMetadata, Meta } from "@/components/Meta";
import Head from "next/head";

export default function Staff() {
  const customMetadata: CustomMetadata = {
    title: "Our Staff",
  };
  return (
    <>
      <Meta data={customMetadata} />
      <main>
        <Hero
          homepage={false}
          bgUrl="/pages/about/staff/teamBanner.webp"
          heading="Meet Our Staff"
        />
        <ComingSoon />
      </main>
    </>
  );
}
