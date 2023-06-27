import Head from "next/head";
import s from "../styles/pages/Home.module.scss";
import { Hero } from "@/components/Hero";
import { OurStory } from "@/components/OurStory";
import { CoreValues } from "@/components/CoreValues";
import { ImageCard } from "@/components/ImageCard/ImageCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EmergencyContact } from "@/components/EmergencyContact";
import Link from "next/link";
import { LinkCards } from "@/components/LinkCards";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | North Springs Veterinary Referral Center</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Transforming the veterinary experience through empathy and transparency Opening Summer 2023! Stay in the Know! Subscribe to our newsletter to receive the latest information and news about our Grand Opening!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={s.main}>
        <Hero
          homepage={true}
          subHeading="Transforming the veterinary experience through 
          empathy and transparency"
          bgUrl="/home/homeHero.webp"
        />
        <EmergencyContact />
        <LinkCards />
        <section className={s.homeInfo}>
          <Image
            className={s.infoImg}
            src="/home/doggoCuddles.webp"
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
              <div className={s.btnContainer}>
                <button className={s.btn}>meet our staff</button>
              </div>
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
              <div className={s.btnContainer}>
                <button className={s.btn}>about us</button>
              </div>
            </div>
          </div>
        </section>
        {/* <OurStory /> */}
        {/* <CoreValues /> */}
        {/* <h2 className={s.sectionHeader}>Join the North Springs VRC Family!</h2>
        <ImageCard
          imgPosition="right"
          image="/join-us-2.jpg"
          cardText={{
            header: "Member Hospital Network",
            description:
              "North Springs VRC is excited to be partnering with local veterinarians to bring top quality care to their patients, as well as provide educational resources to their teams.",
            button: {
              text: "join our network today",
              link: "/member-hospital",
            },
          }}
        />
        <ImageCard
          imgPosition="left"
          image="/join-us-1.jpg"
          cardText={{
            header: "People Make the Difference",
            description:
              "Join a company that prioritizes your work/life balance and supports opportunities for growth. We are looking to hire ER Vets, Client Service Reps, Technicians, Assistants, and Specialists!",
            button: { text: "click for job opportunities", link: "/careers" },
          }}
        /> */}
        <NewsletterForm
          heading="Sign up for the North Springs VRC Newsletter!"
          description="Stay up to date and receive the the latest information and news about our
          Grand Opening, added services, specialties, new hires, events and more!"
        />
      </main>
    </>
  );
}
