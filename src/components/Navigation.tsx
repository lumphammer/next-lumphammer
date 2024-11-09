"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  // Handle window resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    // Initial check
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleClick = useCallback(() => {
    if (isOpen) {
      setFadingOut(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 300);
    } else {
      setFadingOut(false);
      setIsOpen(true);
    }
  }, [isOpen]);

  const router = useRouter();

  // we're reacting on mousedown because theo said so, which means we need some
  // extra magic to navigate (if we wait for the click to fire it never does
  // because the menu gets closed before the click event fires.)
  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      handleClick();
      //navigate to the link
      router.push(e.currentTarget.href);
    },
    [handleClick, router]
  );

  const links = (
    <>
      <Link href="/" onMouseDown={handleLinkClick}>
        Home
      </Link>
      <Link href="/about" onMouseDown={handleLinkClick}>
        About
      </Link>
      <Link href="/todo" onMouseDown={handleLinkClick}>
        Todo
      </Link>
      <Link href="/portfolio" onMouseDown={handleLinkClick}>
        Portfolio
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
      {isMobile && (
        <button
          onMouseDown={handleClick}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}

      {/* Mobile Popover Menu */}
      {isMobile && isOpen && (
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
