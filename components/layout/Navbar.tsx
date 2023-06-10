import Image from "next/image";
import s from "../../styles/components/layout/Navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={s.navbar}>
      <Image src="/navbarLogo.webp" alt="logo" width={118} height={41} />

      <a href="tel:+1(719)920-4430">Call!</a>
    </div>
  );
};
