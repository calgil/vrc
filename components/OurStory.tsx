import s from "../styles/components/OurStory.module.scss";
import Image from "next/image";

export const OurStory = () => {
  return (
    <section id="our-story" className={s.container}>
      <div className={s.ourStory}>
        <div className={s.imgContainer}>
          <Image
            src="/pages/about/about-us.webp"
            alt="about us"
            width={580}
            height={870}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className={s.storyText}>
          <h5 className={s.storyTitle}>
            North Springs Veterinary Referral Center is a locally owned 24-hour
            emergency and specialty center located in Colorado Springs.
          </h5>
          <p className={s.story}>
            Our goal is to provide top-quality, innovative emergency and
            specialty veterinary care services to pet owners with empathy and
            transparency.
          </p>
          <p className={s.story}>
            In 2021, our founding team realized that the existing emergency
            veterinary practices in the Colorado Springs area consistently had
            wait times of 3 - 6+ hours, even turning clients away. In addition,
            these high patient loads were overwhelming the veterinary staff and
            causing high rates of burn-out. Given that most clients visit the
            emergency room on their worst days, both pets and owners experience
            high levels of stress and frustration.
          </p>
          <p className={s.story}>
            What differentiates North Springs VRC is our commitment to providing
            the highest quality client experience from start to finish. Our goal
            is to provide excellent emergency and specialty care for our
            patients, exceptional service to our clients, and unprecedented
            support of our employees.
          </p>
          <p className={s.story}>
            We look forward to supporting our community at 10520 White Diamond
            Point Colorado Springs, CO at the corner of Federal Drive and White
            Diamond Point!
          </p>
        </div>
      </div>
    </section>
  );
};
