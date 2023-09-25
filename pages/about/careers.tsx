import { Hero } from "@/components/Hero";
import s from "../../styles/pages/Careers.module.scss";
import { CustomMetadata, Meta } from "@/components/Meta";

export default function Careers() {
  const customMetadata: CustomMetadata = {
    title: "Careers",
  };
  return (
    <>
      <Meta data={customMetadata} />
      <main>
        <Hero
          homepage={false}
          bgUrl="/pages/about/careers/careersBanner.webp"
          heading="Careers"
          subHeading="Join a team that is passionate about providing the highest level of veterinary care"
        />
        <div className={s.container}>
          <h3 className={s.title}>A Step In the Right Direction</h3>
          <p className={s.content}>
            Join a company that is passionate about veterinary medicine,
            promotes a healthy work/life balance, and provides opportunities for
            growth.
          </p>
          <p className={s.content}>
            We treat our staff as if they are our family. Regardless of how long
            an individual is with our family, we will leave them better than
            when we found them, training them in communication in various
            difficult situations, and how to understand and utilize their own
            personality traits for personal growth and teamwork.
          </p>
          <div className={s.join}>
            <h4 className={s.joinTitle}>
              Join the North Springs Veterinary Referral Center Team!
            </h4>
            <p className={s.joinText}>
              To learn more and apply to our open positions, email your resume
              to{" "}
              <a className={s.link} href="mailto:careers@northspringsvrc.com">
                careers@northspringsvrc.com.
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
