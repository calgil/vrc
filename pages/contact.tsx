import { Hero } from "@/components/Hero";
import Head from "next/head";
import s from "../styles/pages/Contact.module.scss";
import { EmergencyContact } from "@/components/EmergencyContact";
import { ContactInfo } from "@/components/ContactInfo";
import { ContactForm } from "@/components/ContactForm";

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
        <ContactInfo />
        <EmergencyContact />
        <ContactForm />
      </main>
    </>
  );
}
