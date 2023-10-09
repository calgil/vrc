import { Hero } from "@/components/Hero";
import s from "../../styles/pages/About.module.scss";
import { OurStory } from "@/components/OurStory";
import { CoreValues } from "@/components/CoreValues";
import Link from "next/link";
import { CustomMetadata, Meta } from "@/components/Meta";

export default function About() {
  const customMetadata: CustomMetadata = {
    title: "About Our Animal ER Care in Colorado Springs, Colorado",
    description:
      "North Springs Veterinary Referral Service is a 24 hour animal ER care center. We are prepared to provide the highest quality care for any pet emergency!",
  };

  return (
    <>
      <Meta data={customMetadata} />
      <main>
        <Hero
          homepage={false}
          bgUrl="/pages/about/aboutHeader.webp"
          heading="About Our 24 Hour Animal ER Care in Colorado Springs"
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
