import s from "../../../styles/components/ServicesPages/Diagnostics.module.scss";

export const Diagnostics = () => {
  return (
    <section>
      <div className={s.text}>
        <h4 className={s.title}>Diagnostic Imaging and In-House Laboratory</h4>
        <p className={s.content}>
          Diagnostic testing is the foundation of practicing medicine. Through
          diagnostic imaging, labwork evaluation, and tissue sampling, our
          veterinarians are able to accurately diagnose, treat, and monitor your
          pet&apos;s illness.
        </p>
        <p className={s.content}>
          During your appointment, the Diagnostic team will start by obtaining a
          complete medical history and performing a thorough physical
          examination on your pet. This will allow for comprehensive diagnostic
          test recommendations and personalized treatment plans to help your pet
          feel their best.
        </p>
        <p className={s.content}>
          The Diagnostic Imaging and Laboratory teams at North Springs
          Veterinary Referral Center are working hard behind the scenes every
          day to assist the veterinarians in performing and interpreting
          important diagnostic tests.
        </p>
        <h4 className={s.title}>Diagnostic Services</h4>
      </div>
    </section>
  );
};
