"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

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

  const links = (
    <>
      <Link href="/" onMouseDown={handleClick}>
        Home
      </Link>
      <Link href="/about" onMouseDown={handleClick}>
        About
      </Link>
      <Link href="/todo" onMouseDown={handleClick}>
        Todo
      </Link>
      <Link href="/portfolio" onMouseDown={handleClick}>
        Portfolio
      </Link>
      <Link href="/contact" onMouseDown={handleClick}>
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
