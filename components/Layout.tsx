import { Footer } from "./Footer";
import { Hero } from "./Hero";

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      {/* Future navbar */}
      {children}
      <Footer />
    </div>
  );
};
