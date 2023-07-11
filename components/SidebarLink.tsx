import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren, useState, useEffect } from "react";

type SidebarLinkProps = LinkProps & {
  className?: string;
  activeClassName: string;
};

export const SidebarLink = ({
  children,
  activeClassName,
  className,
  ...props
}: PropsWithChildren<SidebarLinkProps>) => {
  const { asPath, isReady } = useRouter();
  const [computedClassName, setComputedClassName] = useState(className);

  useEffect(() => {
    if (isReady) {
      const linkPathname = new URL(
        (props.as || props.href) as string,
        location.href
      ).hash.slice(1);

      const activePathname = new URL(asPath, location.href).hash.slice(1);

      console.log({ activePathname });

      const newClassName =
        linkPathname === activePathname
          ? `${className} ${activeClassName}`.trim()
          : className;

      if (newClassName !== computedClassName) {
        setComputedClassName(newClassName);
      }
    }
  }, [
    asPath,
    isReady,
    props.as,
    props.href,
    activeClassName,
    className,
    computedClassName,
  ]);

  return (
    <Link className={computedClassName} {...props}>
      {children}
    </Link>
  );
};
