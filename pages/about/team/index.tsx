import { Hero } from "@/components/Hero";
import { CustomMetadata, Meta } from "@/components/Meta";
import s from "../../../styles/pages/Staff.module.scss";

export default function Team() {
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
          <ul className={s.teamSelection}>
            <li className={s.team}>Anesthesiology</li>
            <li className={s.team}>Cardiology</li>
            <li className={s.team}>Diagnostics</li>
            <li className={s.team}>Emergency</li>
            <li className={s.team}>Exotics</li>
            <li className={s.team}>Internal Medicine</li>
            <li className={s.team}>Rehabilitation</li>
            <li className={s.team}>Surgery</li>
          </ul>
        </section>
      </main>
    </>
  );
}
