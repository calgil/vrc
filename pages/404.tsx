import Image from "next/image";
import { Hero } from "@/components/Hero";
import { NoPage } from "@/components/NoPage";

export default function Custom404() {
  return (
    <>
      <Hero
        homepage
        bgUrl="/pages/home/homeBanner.webp"
        subHeading="Transforming the veterinary experience through 
empathy and transparency"
      />
      <NoPage />
    </>
  );
}
