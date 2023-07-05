import { Hero } from "@/components/Hero";
import s from "../../styles/pages/Careers.module.scss";
import Head from "next/head";
import Link from "next/link";

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers | North Springs Veterinary Referral Center</title>
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
          bgUrl="/pages/about/careers/careersBanner.webp"
          heading="Careers"
          subHeading="Join a team that is passionate about providing the highest level of veterinary care"
        />
        <div className={s.container}>
          <div className={s.careers}>
            <div className={s.careersText}>
              <h3 className={s.title}>People Make the Difference</h3>
              <p className={s.details}>
                Join a company that is passionate about veterinary medicine,
                promotes a healthy work/life balance, and provides opportunities
                for growth.
              </p>
              <p className={s.details}>
                We are looking for Emergency Veterinarians, Client Service
                Representatives, Technicians, Assistants, and Specialists!
              </p>
              <p className={s.details}>
                To learn more and apply to our open positions, email your resume
                to
                <Link
                  className={s.link}
                  href="mailto:careers@northspringsvrc.com"
                >
                  careers@northspringsvrc.com.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
