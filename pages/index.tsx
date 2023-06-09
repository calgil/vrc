import Head from "next/head";
import s from "../styles/pages/Home.module.scss";
import { Hero } from "@/components/Hero";
import { OurStory } from "@/components/OurStory";
import { CoreValues } from "@/components/CoreValues";
import { ImageCard } from "@/components/ImageCard/ImageCard";
import { NewsletterForm } from "@/components/NewsletterForm";

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
          heading="Opening Summer 2023!"
          subHeading="Transforming the veterinary experience through empathy and
            transparency"
          imageURL="/home-banner.jpeg"
        />
        <OurStory />
        <CoreValues />
        <h2 className={s.sectionHeader}>Join the North Springs VRC Family!</h2>
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
        />
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
