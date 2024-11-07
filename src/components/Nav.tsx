"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

type LinkProps = {
  to: string;
  children: string;
};

function NavLink({ to, children }: LinkProps) {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <li>
      <Link
        href={to}
        aria-current={to === pathName ? "page" : undefined}
        onClick={() => router.push(to)}
      >
        {children}
      </Link>
    </li>
  );
}

export default function Nav() {
  return (
    <nav>
      <label className="menu-toggle">
        Menu
        <input type="checkbox" />
      </label>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/todo">Todo</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </nav>
  );
}
