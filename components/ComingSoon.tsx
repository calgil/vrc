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
        <Link href="/" className={s.homeBtn}>
          Return to Homepage
        </Link>
      </div>
    </section>
  );
};
