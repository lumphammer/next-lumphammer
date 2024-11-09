"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  const closeMenu = useCallback(() => {
    setFadingOut(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  }, []);

  const handleMenuButtonClick = useCallback(() => {
    if (isOpen) {
      closeMenu();
    } else {
      setFadingOut(false);
      setIsOpen(true);
    }
  }, [isOpen, closeMenu]);

  const router = useRouter();

  // we're reacting on mousedown because theo said so, which means we need some
  // extra magic to navigate (if we wait for the click to fire it never does
  // because the menu gets closed before the click event fires.)
  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      closeMenu();
      //navigate to the link
      router.push(e.currentTarget.href);
    },
    [closeMenu, router]
  );

  const links = (
    <>
      <Link href="/" onMouseDown={handleLinkClick}>
        Home
      </Link>
      <Link href="/about" onMouseDown={handleLinkClick}>
        About
      </Link>
      {/* <Link href="/todo" onMouseDown={handleLinkClick}>
        Todo
      </Link> */}
      <Link href="/projects" onMouseDown={handleLinkClick}>
        Projects
      </Link>
      <Link href="/contact" onMouseDown={handleLinkClick}>
        Contact
      </Link>
    </>
  );

  return (
    <nav>
      {/* Desktop Navigation */}
      <div className="desktop-nav">{links}</div>

      {/* Mobile Hamburger Button */}
      <button
        onMouseDown={handleMenuButtonClick}
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Popover Menu */}
      {isOpen && (
        <div
          className={`mobile-menu ${fadingOut ? "fade-out" : ""}`}
          role="dialog"
          aria-modal="true"
        >
          <div className="mobile-menu-content">{links}</div>
        </div>
      )}
    </nav>
  );
}
