import { Hero } from "@/components/Hero";
import Head from "next/head";
import s from "../styles/pages/Veterinarians.module.scss";
import Image from "next/image";
import Link from "next/link";
import { PhotoCardSection, PhotoCardType } from "@/components/PhotoCardSection";
import { LinkCardSection, LinkCardType } from "@/components/LinkCardSection";
import { vetLinkCards } from "@/data/veterinarians/linkCards";
import { vetPhotoCards } from "@/data/veterinarians/photoCards";

export default function Veterinarians() {
  return (
    <>
      <Head>
        {/* TODO: Refactor this */}
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
          bgUrl="/pages/veterinarians/vetsBanner.webp"
          heading="Information for Veterinarians"
          subHeading="We value communication and being transparent, because we understand that our patients are your patients."
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
              src="/pages/veterinarians/lindsey.webp"
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
              <Link href="member-hospital" className={s.memberBtn}>
                Join Our Network
              </Link>
            </div>
          </div>
        </section>
        <PhotoCardSection cards={vetPhotoCards} />
        <h3 className={s.comingSoon}>Coming Soon!</h3>
        <LinkCardSection cards={vetLinkCards} />
      </main>
    </>
  );
}
