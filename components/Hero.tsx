import Image from "next/image";
import Link from "next/link";
import s from "../styles/components/Hero.module.scss";

type HeroProps = {
  homepage: boolean;
  heading?: string;
  subHeading?: string;
  bgUrl: string;
};

export const Hero = ({ homepage, heading, subHeading, bgUrl }: HeroProps) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(108deg, rgba(0, 105, 117, 1) 0%, rgba(0, 105, 117, 1) 55%, rgba(0, 105, 117, 0.89) 55%, rgba(0, 105, 117, 0.89) 65%, transparent 65%, transparent 100%), url(${bgUrl})`,
      }}
      className={s.heroBg}
    >
      <div className={s.container}>
        <div className={s.logoContainer}>
          {homepage && (
            <Image
              className={s.logo}
              src="/logos/home.webp"
              alt="logo"
              width={354}
              height={122}
            />
          )}
          {!homepage && (
            <div className={s.pageHeader}>
              <Image
                className={s.logo}
                src="/logos/smLogo.webp"
                alt="logo"
                width={110}
                height={122}
              />
              <h1 className={s.heading}>{heading}</h1>
            </div>
          )}
        </div>
        <div className={s.heroText}>
          <h3 className={s.subheading}>{subHeading}</h3>
        </div>
      </div>
    </div>
  );
};
