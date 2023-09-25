import { Hero } from "@/components/Hero";
import s from "../../styles/pages/About.module.scss";
import { OurStory } from "@/components/OurStory";
import { CoreValues } from "@/components/CoreValues";
import Link from "next/link";
import { CustomMetadata, Meta } from "@/components/Meta";

export default function About() {
  const customMetadata: CustomMetadata = {
    title: "About Us",
  };

  return (
    <>
      <Meta data={customMetadata} />
      <main>
        <Hero
          homepage={false}
          bgUrl="/pages/about/aboutHeader.webp"
          heading="About Us"
        />
        <OurStory />
        <CoreValues />
        <div className={s.btnContainer}>
          <Link href="/about/contact" className={s.contactBtn}>
            contact us
          </Link>
        </div>
      </main>
    </>
  );
}
