import Image from "next/image";
import s from "../styles/components/ComingSoon.module.scss";

type ComingSoonProps = {
  title: string;
  imgSrc: string;
};

export const ComingSoon = ({ title, imgSrc }: ComingSoonProps) => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>{title}</h1>
      <h2 className={s.soon}>Coming Soon!</h2>
      <div className={s.img}>
        <Image src={imgSrc} alt="coming soon" width={200} height={200} />
      </div>
    </div>
  );
};
