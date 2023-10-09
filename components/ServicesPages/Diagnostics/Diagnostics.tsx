import { ServiceDropdown } from "@/components/ServiceDropdown";
import s from "../../../styles/components/ServicesPages/Diagnostics.module.scss";
import { diagnosticServices } from "./diagnosticServices";
import { sortServices } from "@/utilities/sortServices";
import { ServicesFooter } from "../ServicesFooter";
import { cardiologyCommunicationText } from "../Cardiology/reliableCommunication";
import { CustomMetadata, Meta } from "@/components/Meta";

export const Diagnostics = () => {
  const customMetadata: CustomMetadata = {
    title: "Pet Diagnostics | North Springs Veterinary Referral Center",
    description:
      "North Springs Veterinary offers 24 hour pet diagnostics, serving Colorado Springs & the surrounding area. Our experienced team is here to provide quality care!",
  };
  return (
    <>
      <Meta data={customMetadata} />
      <section>
        <div className={s.text}>
          <h2 className={s.title}>
            Diagnostic Imaging and In-House Laboratory
          </h2>
          <p className={s.content}>
            Diagnostic testing is the foundation of practicing medicine. Through
            diagnostic imaging, labwork evaluation, and tissue sampling, our
            veterinarians are able to accurately diagnose, treat, and monitor
            your pet&apos;s illness.
          </p>
          <p className={s.content}>
            During your appointment, the Diagnostic team will start by obtaining
            a complete medical history and performing a thorough physical
            examination on your pet. This will allow for comprehensive
            diagnostic test recommendations and personalized treatment plans to
            help your pet feel their best.
          </p>
          <p className={s.content}>
            The Diagnostic Imaging and Laboratory teams at North Springs
            Veterinary Referral Center are working hard behind the scenes every
            day to assist the veterinarians in performing and interpreting
            important diagnostic tests.
          </p>
          <h5 className={`${s.title} ${s.subheader}`}>Diagnostic Services</h5>
        </div>
        {sortServices(diagnosticServices).map((service, i) => (
          <ServiceDropdown key={service.title} service={service} index={i} />
        ))}
        <ServicesFooter textBlocks={cardiologyCommunicationText} />
      </section>
    </>
  );
};
