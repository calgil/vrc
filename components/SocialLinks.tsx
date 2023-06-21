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
    image: "/ig.webp",
    desc: "instagram",
    link: "https://www.instagram.com/northsprings.vrc/",
  },
  {
    image: "/li.webp",
    desc: "linkedIn",
    link: "https://www.linkedin.com/company/north-springs-veterinary-referral-center/",
  },
];

export const SocialLinks = () => {
  return (
    <div className={s.socialLinks}>
      {socialIcons.map((social) => (
        <Link className={s.link} key={social.desc} href={social.link}>
          <Image src={social.image} alt={social.desc} width={25} height={25} />
        </Link>
      ))}
    </div>
  );
};
