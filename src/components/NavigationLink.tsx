"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback, useContext } from "react";
import { OnNavigateContext } from "./OnNavigateContext";

type NavigationLinkProps = {
  to: string;
  children: string;
};

export function NavigationLink({ to, children }: NavigationLinkProps) {
  const router = useRouter();
  const pathName = usePathname();
  const onNavigate = useContext(OnNavigateContext);

  // we're reacting on mousedown because theo said so, which means we need some
  // extra magic to navigate (if we wait for the click to fire it never does
  // because the menu gets closed before the click event fires.)
  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onNavigate();
      router.push(e.currentTarget.href);
    },
    [onNavigate, router]
  );

  return (
    <Link
      href={to}
      aria-current={to === pathName ? "page" : undefined}
      onMouseDown={handleMouseDown}
    >
      {children}
    </Link>
  );
}
