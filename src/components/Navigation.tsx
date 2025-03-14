"use client";

import { useState, useCallback } from "react";
import { OnNavigateContext } from "./OnNavigateContext";
import { NavigationLink } from "./NavigationLink";
import { ThemeSwitcherIcon } from "./ThemeSwitcherIcon";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  const closeMenu = useCallback(() => {
    setFadingOut(true);
    setTimeout(() => {
      setIsOpen(false);
      document.body.parentElement!.style.overflow = "auto";
    }, 300);
  }, []);

  const handleMenuButtonClick = useCallback(() => {
    if (isOpen) {
      closeMenu();
    } else {
      setFadingOut(false);
      setIsOpen(true);
      document.body.parentElement!.style.overflow = "hidden";
    }
  }, [isOpen, closeMenu]);

  const links = (
    <>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/projects">Projects</NavigationLink>
      {/* enable this when ready */}
      {/* <NavigationLink to="/blog">Blog</NavigationLink> */}
      <NavigationLink to="/about">About</NavigationLink>
      <NavigationLink to="/contact">Contact</NavigationLink>
    </>
  );

  return (
    <nav>
      {/* Desktop Navigation */}
      <div className="desktop-nav">
        {links}
        <ThemeSwitcherIcon />
      </div>

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
          aria-label="Navigation menu"
          aria-modal="true"
        >
          <OnNavigateContext.Provider value={closeMenu}>
            <div className="mobile-menu-content">
              {links}
              <ThemeSwitcherIcon />
            </div>
          </OnNavigateContext.Provider>
        </div>
      )}
    </nav>
  );
}
