import Image from "next/image";
import Link from "next/link";
import s from "../styles/components/Hero.module.scss";
import { NewsletterForm } from "./NewsletterForm";

type HeroProps = {
  addNewsletter: boolean;
};

export const Hero = ({ addNewsletter }: HeroProps) => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(108deg, rgb(0, 105, 117, 0.89) 64.91%, transparent 65%), url(/home-header.jpg)",
      }}
      className={s.heroBg}
    >
      <div className={s.container}>
        <div className={s.logoContainer}>
          <Image
            className={s.logo}
            src="/vrc-logo.png"
            alt="logo"
            width={350}
            height={117}
          />
        </div>
        <div className={s.heroText}>
          <h3>Transforming the veterinary experience</h3>
          <h3>through empathy and transparency</h3>
          <h1>Opening Summer 2023!</h1>
          {addNewsletter && (
            <NewsletterForm
              inHero={true}
              heading="Stay in the Know!"
              description="Subscribe to our newsletter to receive the latest information and news
        about our Grand Opening!"
            />
          )}
          <div className={s.social}>
            <h6 className={s.connect}>
              <strong>Connect with us</strong>
            </h6>
            <Image
              className={s.socialIcon}
              height={30}
              width={30}
              src="/fb.png"
              alt="facebook"
            />
            <Image
              className={s.socialIcon}
              height={30}
              width={30}
              src="/li.png"
              alt="linkedIn"
            />
            <Image
              className={s.socialIcon}
              height={30}
              width={30}
              src="/twitter.png"
              alt="twitter"
            />
            <Image
              className={s.socialIcon}
              height={30}
              width={30}
              src="/ig.png"
              alt="instagram"
            />
          </div>
        </div>
        <div className={s.down}>
          <Link href="#">
            <Image
              width={130}
              height={120}
              src="/downArrow.png"
              alt="down arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
