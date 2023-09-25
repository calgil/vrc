import { ComingSoon } from "@/components/ComingSoon";
import { Hero } from "@/components/Hero";
import { CustomMetadata, Meta } from "@/components/Meta";

export default function Education() {
  const customMetadata: CustomMetadata = {
    title: "Education Center",
  };
  return (
    <>
      <Meta data={customMetadata} />
      <main>
        <Hero
          homepage={false}
          bgUrl="/pages/education/educationBanner.webp"
          heading="Coming Soon!"
        />
        <ComingSoon />
      </main>
    </>
  );
}
