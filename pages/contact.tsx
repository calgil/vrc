import { Hero } from "@/components/Hero";
import Head from "next/head";
import s from "../styles/pages/Contact.module.scss";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
  faFax,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EmergencyContact } from "@/components/EmergencyContact";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | North Springs Veterinary Referral Center</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Transforming the veterinary experience through empathy and transparency Opening Summer 2023! Stay in the Know! Subscribe to our newsletter to receive the latest information and news about our Grand Opening!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero homepage={false} bgUrl="" heading="Contact Us" />
        <section className={s.contactInfo}>
          <div className={s.map}></div>
          <div className={s.info}>
            <h2 className={s.title}>General Information</h2>
            <div className={s.links}>
              <a
                className={s.contactLink}
                href="https://www.google.com/maps/place/North+Springs+Veterinary+Referral+Center/@38.9838331,-104.7985129,17z/data=!3m1!4b1!4m6!3m5!1s0x87134d111065c23d:0xaab025eb0119a0ea!8m2!3d38.983829!4d-104.795938!16s%2Fg%2F11kq2mdkk8?entry=ttu"
                target="_blank"
                rel="noopener"
              >
                <FontAwesomeIcon className={s.icon} icon={faLocationDot} />
                <span className={s.text}>
                  10520 White Diamond Point, <br /> Colorado Springs, CO 80908
                </span>
              </a>
              <a className={s.contactLink} href="tel:+1(719)920-4430">
                <FontAwesomeIcon className={s.icon} icon={faPhone} />
                <span className={s.text}>(719)920-4430</span>
              </a>
              <a
                className={s.contactLink}
                href="mailto:info@northspringsvrc.com"
              >
                <FontAwesomeIcon className={s.icon} icon={faEnvelope} />
                <div className={s.text}>info@northspringsvrc.com</div>
              </a>
              <a className={s.contactLink}>
                <FontAwesomeIcon className={s.icon} icon={faFax} />
                <div className={s.text}>(719)920-4431</div>
              </a>
            </div>
            <h2 className={s.title}>Join our Member Hospital Network</h2>
            <a
              className={`${s.contactLink} ${s.email}`}
              href="mailto:memberhospital@northspringsvrc.com"
            >
              <FontAwesomeIcon className={s.icon} icon={faEnvelope} />
              <div className={s.text}>memberhospital@northspringsvrc.com</div>
            </a>
          </div>
        </section>
        <EmergencyContact />
        <section>
          <h3 className={s.formTitle}></h3>
        </section>
      </main>
    </>
  );
}
