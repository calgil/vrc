import Image from "next/image";
import Link from "next/link";
import s from "../styles/components/SocialLinks.module.scss";

type SocialIcon = {
  image: string;
  desc: string;
  link: string;
};

const socialIcons: SocialIcon[] = [
  {
    image: "/fb.png",
    desc: "facebook",
    link: "https://www.facebook.com/North-Springs-Veterinary-Referral-Center-105037382132822",
  },
  {
    image: "/li.png",
    desc: "linkedIn",
    link: "https://www.linkedin.com/company/north-springs-veterinary-referral-center/",
  },
  {
    image: "/twitter.png",
    desc: "twitter",
    link: "https://twitter.com/NorthSpringsVRC",
  },
  {
    image: "/ig.png",
    desc: "instagram",
    link: "https://www.instagram.com/northsprings.vrc/",
  },
];

export const SocialLinks = () => {
  return (
    <div className={s.socialLinks}>
      {socialIcons.map((social) => (
        <Link className={s.link} key={social.desc} href={social.link}>
          <Image src={social.image} alt={social.desc} width={30} height={30} />
        </Link>
      ))}
    </div>
  );
};
