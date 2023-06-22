import Image from "next/image";
import Link from "next/link";
import s from "../styles/components/Hero.module.scss";

type HeroProps = {
  homepage: boolean;
  logoUrl: string;
  heading?: string;
  subHeading?: string;
  bgUrl: string;
};

export const Hero = ({ logoUrl, heading, subHeading, bgUrl }: HeroProps) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(108deg, rgba(0, 105, 117, 1) 0%, rgba(0, 105, 117, 1) 55%, rgba(0, 105, 117, 0.89) 55%, rgba(0, 105, 117, 0.89) 65%, transparent 65%, transparent 100%), url(${bgUrl})`,
      }}
      className={s.heroBg}
    >
      <div className={s.container}>
        <Link href="/">
          <div className={s.logoContainer}>
            <Image
              className={s.logo}
              src={logoUrl}
              alt="logo"
              width={354}
              height={122}
            />
          </div>
        </Link>
        <div className={s.heroText}>
          <h3 className={s.subheading}>{subHeading}</h3>
          <h1> {heading}</h1>
        </div>
      </div>
    </div>
  );
};
