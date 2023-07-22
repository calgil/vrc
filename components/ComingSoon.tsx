import Image from "next/image";
import s from "../styles/components/ComingSoon.module.scss";

export const ComingSoon = () => {
  return (
    <section className={s.comingSoon}>
      <div className={s.soon}>
        <Image
          src="/pages/comingSoon/comingSoon.webp"
          alt="coming soon"
          width={327}
          height={547}
        />
        <h2 className={s.title}>Coming Soon!</h2>
      </div>
    </section>
  );
};
