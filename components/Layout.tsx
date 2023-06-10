import { Footer } from "./layout/Footer";
import { Navbar } from "./layout/Navbar";

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
