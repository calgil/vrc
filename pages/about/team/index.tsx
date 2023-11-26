import { Hero } from "@/components/Hero";
import { CustomMetadata, Meta } from "@/components/Meta";
import s from "../../../styles/pages/TeamPage.module.scss";
import { Team } from "@/components/Team/Team";

export default function TeamPage() {
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
          heading="Meet Our Team"
          subHeading="Our team is the best in the business!"
        />
        <section className={s.teamContainer}>
          <h2 className={s.title}>Our Team</h2>
          <p className={s.content}>
            Our teams consists of dedicated professionals who work hard to be
            experts in their craft. We use that expertise to bring healing and
            confidence to you and your family.
          </p>
          <Team />
        </section>
      </main>
    </>
  );
}
