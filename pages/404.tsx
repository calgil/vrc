import Image from "next/image";
import s from "../styles/pages/404.module.scss";
import { Hero } from "@/components/Hero";

export default function Custom404() {
  return (
    <>
      <Hero
        homepage
        bgUrl="/pages/home/homeBanner.webp"
        subHeading="Transforming the veterinary experience through 
empathy and transparency"
      />
      <main className={s.error}>
        <h2 className={s.title}>Page not found</h2>
        <p className={s.sorry}>
          Sorry, we couldn&apos;t find the page you were looking for.
        </p>
        <Image
          src="/pages/404/pawPrint.webp"
          alt="paw print"
          width={200}
          height={200}
        />
      </main>
    </>
  );
}
