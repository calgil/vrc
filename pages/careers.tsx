import s from "../styles/pages/Careers.module.scss";
import { Hero } from "@/components/Hero";
import Head from "next/head";
import Link from "next/link";
import { Input, SubmitBtn, TextArea } from "@/types/input.type";

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
              <form className={s.form}>
                <div className={s.inputContainer}>
                  <label htmlFor="name" className={s.label}>
                    Full Name: *
                    <input
                      className={s.input}
                      id="name"
                      name="name"
                      type="text"
                      required
                    />
                  </label>
                  <label htmlFor="email" className={s.label}>
                    Email: *
                    <input
                      className={s.input}
                      id="email"
                      name="email"
                      type="email"
                      required
                    />
                  </label>
                  <label htmlFor="phone" className={s.label}>
                    Phone: *
                    <input
                      className={s.input}
                      id="phone"
                      name="phone"
                      type="phone"
                      required
                    />
                  </label>
                  <label htmlFor="position" className={s.label}>
                    Position: *
                    <select className={s.input} id="position" required>
                      <option value="">-Please choose an option-</option>
                      <option value="ER Veterinarian">ER Veterinarian</option>
                      <option value="Client Service Rep">
                        Client Service Rep
                      </option>
                      <option value="Technician">Technician</option>
                      <option value="Assistant">Assistant</option>
                      <option value="Specialist">Specialist</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>
                  <label
                    htmlFor="message"
                    className={`${s.label} ${s.messageLabel}`}
                  >
                    Message:
                    <textarea
                      className={`${s.input} ${s.message}`}
                      id="message"
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="resume" className={s.label}>
                    Attach your resume:
                  </label>
                  <input
                    className={`${s.input} ${s.resume}`}
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    size={4194304}
                  />
                  <p className={s.note}>
                    Note: Acceptable files type are PDF, .doc, or .docx only and
                    file size must be under 4MB.
                  </p>
                </div>
                <input className={s.submitBtn} type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
