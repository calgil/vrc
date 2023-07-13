import Image from "next/image";
import s from "../../../styles/components/ServicesPages/Exotics.module.scss";

export const Exotics = () => {
  return (
    <section>
      <h3 className={s.title}>Coming Soon!</h3>
      <div className={s.exoticsImg}>
        <Image
          src="/pages/services/exotics.webp"
          alt="macaws"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};
