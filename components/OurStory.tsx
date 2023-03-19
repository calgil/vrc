import s from "../styles/OurStory.module.scss";
import Image from "next/image";

export const OurStory = () => {
  return (
    <section className={s.ourStory}>
      <div>
        <Image src="/about-us.jpg" alt="about us" width={400} height={400} />
        <div>
          <h3>Our Story</h3>
          <h6>
            North Springs Veterinary Referral Center is a locally owned 24-hour
            emergency and specialty center located in Colorado Springs.
          </h6>
          <p>
            Our goal is to provide top-quality, innovative emergency and
            specialty veterinary care services to pet owners with empathy and
            transparency. In 2021, our founding team realized that the existing
            emergency veterinary practices in the Colorado Springs area
            consistently had wait times of 3 – 6+ hours, even turning clients
            away. In addition, these high patient loads were overwhelming the
            veterinary staff and causing high rates of burn-out. Given that most
            clients visit the emergency room on their worst days, both pets and
            owners experience high levels of stress and frustration. What
            differentiates North Springs VRC is our commitment to providing the
            highest quality client experience from start to finish. Our goal is
            to provide excellent emergency and specialty care for our patients,
            exceptional service to our clients, and unprecedented support of our
            employees. We look forward to supporting our community at 10520
            White Diamond Point Colorado Springs, CO at the corner of Federal
            Drive and White Diamond Point!
          </p>
        </div>
      </div>
    </section>
  );
};
