"use client";

import { useEffect, useState } from "react";
import styles from "./ImagePopup.module.scss";
import Image from "next/image";
interface ImagePopupProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function ImagePopup({ src, alt, width, height }: ImagePopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onClick={() => setIsOpen(true)}
        className={styles.thumbnail}
      />

      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}>
          <div className={styles.popup}>
            <button
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <Image src={src} alt={alt} className={styles.fullImage} />
          </div>
        </div>
      )}
    </>
  );
}
