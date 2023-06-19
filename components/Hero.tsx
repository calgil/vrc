import Image from "next/image";
import Link from "next/link";
import s from "../styles/components/Hero.module.scss";
import classNames from "classnames/bind";
import { NewsletterForm } from "./NewsletterForm";
import { SocialLinks } from "./SocialLinks";

let cx = classNames.bind(s);

type HeroProps = {
  homepage: boolean;
  heading?: string;
  subHeading?: string;
  imageURL: string;
};

export const Hero = ({
  homepage,
  heading,
  subHeading,
  imageURL,
}: HeroProps) => {
  let bgClass = cx({
    heroBg: true,
    homepage,
  });

  return (
    <div
      style={{
        backgroundImage: `url(${imageURL})`,
        // "linear-gradient(108deg, rgb(0, 105, 117, 0.89) 64.95%, transparent 65%), url(/home-header.jpg)",
      }}
      className={bgClass}
    >
      <div className={s.container}>
        <Link href="/">
          <div className={s.logoContainer}>
            <Image
              className={s.logo}
              src="/vrc-logo.png"
              alt="logo"
              width={350}
              height={117}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </Link>
        <div className={s.heroText}>
          <h3>{subHeading}</h3>
          <h1> {heading}</h1>
          {homepage && (
            <>
              <NewsletterForm
                inHero={true}
                heading="Stay in the Know!"
                description="Subscribe to our newsletter to receive the latest information and news
        about our Grand Opening!"
              />
              <div className={s.social}>
                <h6 className={s.connect}>
                  <strong>Connect with us</strong>
                </h6>
                <SocialLinks />
              </div>
            </>
          )}
        </div>
        {homepage && (
          <div className={s.down}>
            <Link href="#our-story" passHref>
              <Image
                width={130}
                height={120}
                src="/downArrow.png"
                alt="down arrow"
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
