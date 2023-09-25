import { Hero } from "@/components/Hero";
import { EmergencyContact } from "@/components/EmergencyContact";
import { ContactInfo } from "@/components/ContactInfo";
import { ContactForm } from "@/components/ContactForm";
import { CustomMetadata, Meta } from "@/components/Meta";

export default function Contact() {
  const customMetadata: CustomMetadata = {
    title: "Contact Us",
  };
  return (
    <>
      <Meta data={customMetadata} />
      <main>
        <Hero
          homepage={false}
          bgUrl="/pages/about/contact/contactBanner.webp"
          heading="Contact Us"
        />
        <ContactInfo />
        <EmergencyContact />
        <ContactForm />
      </main>
    </>
  );
}
