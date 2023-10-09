import { Hero } from "@/components/Hero";
import { EmergencyContact } from "@/components/EmergencyContact";
import { ContactInfo } from "@/components/ContactInfo";
import { ContactForm } from "@/components/ContactForm";
import { CustomMetadata, Meta } from "@/components/Meta";

export default function Contact() {
  const customMetadata: CustomMetadata = {
    title: "Contact A Emergency Veterinarian in Colorado Springs, CO",
    description:
      "We are a 24 hour Emergency Veterinarian Clinic serving Colorado Springs and the surrounding area. Our emergency Veterinarian are prepared for any pet emergency!",
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
