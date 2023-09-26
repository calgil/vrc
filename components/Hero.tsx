import Image from "next/image";
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
      className={s.heroBg}
      style={{
        backgroundImage: `url(${bgUrl})`,
      }}
    >
      <div className={s.container}>
        <div>
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
            {homepage && (
              <h1 className={s.heading}>
                24 Hour Emergency and Specialty Care
              </h1>
            )}
            {subHeading && <h3 className={s.subheading}>{subHeading}</h3>}
          </div>
        </div>
      </div>
    </div>
  );
};
