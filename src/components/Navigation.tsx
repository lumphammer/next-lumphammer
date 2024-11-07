"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  const links = (
    <>
      <Link href="/" onClick={() => setIsOpen(false)}>
        Home
      </Link>
      <Link href="/about" onClick={() => setIsOpen(false)}>
        About
      </Link>
      <Link href="/todo" onClick={() => setIsOpen(false)}>
        Todo
      </Link>
      <Link href="/portfolio" onClick={() => setIsOpen(false)}>
        Portfolio
      </Link>
      <Link href="/contact" onClick={() => setIsOpen(false)}>
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
          onClick={() => setIsOpen(!isOpen)}
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
        <div className="mobile-menu" role="dialog" aria-modal="true">
          <div className="mobile-menu-content">{links}</div>
        </div>
      )}
    </nav>
  );
}
