import s from "../styles/pages/Careers.module.scss";
import { Hero } from "@/components/Hero";
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
          heading="Careers"
          imageURL="/member-network-banner.jpeg"
        />
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
              Fill out our contact form to learn more and apply to our open
              positions, or email your resume to
              <Link
                className={s.link}
                href="mailto:careers@northspringsvrc.com"
              >
                careers@northspringsvrc.com.
              </Link>
            </p>
          </div>
          <div className={s.careersForm}>
            <form className={s.inputContainer}>
              <input className={s.input} name="name" type="text" />
              <input className={s.input} name="email" type="email" />
              <input className={s.input} name="phone" type="phone" />
              <select className={s.input}>
                <option value="">-Please choose an option-</option>
                <option value="ER Veterinarian">ER Veterinarian</option>
                <option value="Client Service Rep">Client Service Rep</option>
                <option value="Technician">Technician</option>
                <option value="Assistant">Assistant</option>
                <option value="Specialist">Specialist</option>
                <option value="Other">Other</option>
              </select>
              <textarea className={s.input} />
              <input className={s.input} type="file" />
              <input className={s.submitBtn} type="submit" />
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
