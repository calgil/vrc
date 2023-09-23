import s from "../styles/pages/Home.module.scss";
import { Hero } from "@/components/Hero";
import { EmergencyContact } from "@/components/EmergencyContact";
import { LinkCards } from "@/components/LinkCards";
import Image from "next/image";
import Link from "next/link";
import { homeLinkCards } from "@/data/home/linkCards";
import { CustomMetadata, Meta } from "@/components/Meta";

export default function Home() {
  const customMetadata: CustomMetadata = {
    title: "24 Hour Vet Clinic",
    keywords: ["vet clinic open at night", "cat doctor near me 24 hours"],
  };
  return (
    <>
      <Meta data={customMetadata} />
      <main className={s.main}>
        <Hero
          homepage={true}
          subHeading="Transforming the veterinary experience through 
          empathy and transparency"
          bgUrl="/pages/home/homeBanner.webp"
        />
        <EmergencyContact />
        <LinkCards cards={homeLinkCards} />
        <section className={s.homeInfo}>
          <Image
            className={s.infoImg}
            src="/pages/home/doggoCuddles.webp"
            alt="dog"
            width={477.498}
            height={765}
          />
          <div className={s.homeText}>
            <div className={s.textBlock}>
              <h3 className={s.title}>Transparency. Empathy. Integrity.</h3>
              <p className={s.text}>
                At North Springs Veterinary Referral Center, our goal is to
                provide top-quality, innovative emergency veterinary care
                services to pet owners. We will be the voice that our patients
                do not have—translating their needs as well as the needs of our
                clients into the best care and medical recommendations.
              </p>
              <Link className={s.btn} href="/about/staff">
                meet our staff
              </Link>
            </div>
            <div className={s.textBlock}>
              <h3 className={s.title}>Family. Community. Positivity. Unity.</h3>
              <p className={s.text}>
                We nurture a positive company culture that treats each and every
                employee with respect and gratitude, valuing the contributions
                of each team member.
              </p>
              <p className={s.text}>
                You can trust our staff to embody our vision and values, in each
                and every interaction with you from the very beginning.We
                believe that a healthy workplace leads to improved care.
              </p>
              <Link className={s.btn} href="/about">
                about us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
