import Image from "next/image";
import s from "../styles/components/ComingSoon.module.scss";
import Link from "next/link";

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
        <div>
          <h4 className={s.soonTitle}>Coming Soon!</h4>
          <Link href="/" className={s.homeBtn}>
            Return to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};
