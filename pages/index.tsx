import Head from "next/head";
import s from "../styles/pages/Home.module.scss";
import { Hero } from "@/components/Hero";
import { OurStory } from "@/components/OurStory";
import { CoreValues } from "@/components/CoreValues";
import { ImageCard } from "@/components/ImageCard/ImageCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          logoUrl="/logos/home.webp"
          subHeading="Transforming the veterinary experience through 
          empathy and transparency"
          bgUrl="/heroBg/homeBg.webp"
        />
        <div className={s.container}>
          <section className={s.emergencyInfo}>
            <h3 className={s.header}>
              If you are experiencing an emergency, please call or come directly
              to our hospital.
            </h3>
            <div className={s.emergencyContact}>
              <a className={s.contactInfo} href="tel:+1(719)920-4430">
                <FontAwesomeIcon className={s.icon} icon={faPhone} />
                <span className={s.info}>(719)920-4430</span>
              </a>
              <a
                className={s.contactInfo}
                href="https://www.google.com/maps/place/10520+White+Diamond+Pt,+Colorado+Springs,+CO+80908/@38.9838331,-104.7985129,17z/data=!3m1!4b1!4m6!3m5!1s0x87134c52f7f498d5:0xadc8e3a53ba07389!8m2!3d38.983829!4d-104.795938!16s%2Fg%2F11ssq6ysqz?entry=ttu"
                target="_blank"
                rel="noopener"
              >
                <FontAwesomeIcon className={s.icon} icon={faLocationDot} />
                <span className={s.info}>
                  10520 White Diamond Point, Colorado Springs, CO 80908
                </span>
              </a>
            </div>
            <p className={s.prepared}>
              Our experienced team is prepared for any pet emergency and will
              provide the highest quality of care for your beloved family
              member.
            </p>
          </section>
        </div>
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
          inHero={false}
          heading="Stay in the Know!"
          description="Stay up to date and receive the the latest information and news about our
                Grand Opening, added services, specialties, new hires, events and more!"
        />
      </main>
    </>
  );
}
