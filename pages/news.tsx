import { ComingSoon } from "@/components/ComingSoon";
import { Hero } from "@/components/Hero";
import { CustomMetadata, Meta } from "@/components/Meta";

export default function News() {
  const customMetadata: CustomMetadata = {
    title: "News",
  };
  return (
    <>
      <Meta data={customMetadata} />
      <main>
        <Hero
          homepage={false}
          bgUrl="/pages/news/newsBanner.webp"
          heading="News & Events"
        />
        <ComingSoon />
      </main>
    </>
  );
}
