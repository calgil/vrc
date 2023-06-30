import { Hero } from "@/components/Hero";
import Head from "next/head";
import s from "../styles/pages/Veterinarians.module.scss";
import Image from "next/image";
import Link from "next/link";
import { PhotoCardSection, PhotoCardType } from "@/components/PhotoCardSection";
import { LinkCardSection, LinkCardType } from "@/components/LinkCardSection";

export default function Veterinarians() {
  const photoCards: PhotoCardType[] = [
    {
      title: "About Us",
      textBlocks: [
        "North Springs VRC was founded with a passion to improve the veterinary world for both staff and clients.",
        "Read about our story, our vision, and our values to learn what drives us.",
      ],
      linkUrl: "/about",
      btnText: "about us",
    },
    {
      title: "Join Our Team",
      textBlocks: [
        `If you are passionate about animal care and are looking to work at a place where you can make a positive impact in others' lives, then check out our latest job opportunities.`,
      ],
      linkUrl: "/about/careers",
      btnText: "view careers",
    },
  ];
  const linkCards: LinkCardType[] = [
    {
      title: "Education Center",
      textBlocks: [
        "We plan to compile a library of resources, both video and print, to share our knowledge and help educate others.",
        "Check back soon as we expand this knowledge library!",
      ],
      linkUrl: "/",
      bgUrl: "/owners/educationCenter.webp",
      bgColor: "rgba(154, 48, 64, 0.85)",
    },
    {
      title: "Clinic Camera",
      textBlocks: [
        "If your pet is being treated with us, click here to view their clinic camera and check in with them",
      ],
      linkUrl: "/",
      bgUrl: "/owners/clinicCamera.webp",
      bgColor: "rgba(1, 109, 118, 0.85)",
    },
  ];
  return (
    <>
      <Head>
        <title>Veterinarians | North Springs Veterinary Referral Center</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Transforming the veterinary experience through empathy and transparency Opening Summer 2023! Stay in the Know! Subscribe to our newsletter to receive the latest information and news about our Grand Opening!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero
          homepage={false}
          bgUrl=""
          heading="Information for Veterinarians"
        />
        <section className={s.vets}>
          <h2 className={s.title}>
            Building Relationships within the Veterinary Industry
          </h2>
          <p className={s.text}>
            North Springs VRC is passionate about working closely with local
            veterinary hospitals to bring top quality care to their patients, as
            well as provide educational resources to their teams in the spirit
            of collaboration and continuous improvement.
          </p>
          <p className={s.text}>
            Below you will find more information to learn more about our Member
            Hospital Network, learning resources, and more!
          </p>
        </section>
        <section className={s.member}>
          <div className={s.content}>
            <Image
              className={s.memberImg}
              src="/veterinarians/lindsey.webp"
              alt="veterinarian cares for animal"
              width={580}
              height={583}
            />
            <div className={s.info}>
              <h4 className={s.memberTitle}>The Member Hospital Network</h4>
              <p className={s.memberText}>
                North Springs VRC is excited to be partnering with local
                veterinarians to bring top quality care to their patients, as
                well as provide educational resources to their teams.
              </p>
              <div className={s.btnContainer}>
                <Link href="member-hospital" className={s.memberBtn}>
                  Join Our Network
                </Link>
              </div>
            </div>
          </div>
        </section>
        <PhotoCardSection cards={photoCards} />
        <LinkCardSection cards={linkCards} />
      </main>
    </>
  );
}
