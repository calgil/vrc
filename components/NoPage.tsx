import Image from "next/image";
import s from "../styles/components/NoPage.module.scss";
export const NoPage = () => {
  return (
    <section className={s.error}>
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
    </section>
  );
};
