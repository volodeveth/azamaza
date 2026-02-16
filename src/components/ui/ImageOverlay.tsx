"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { useClickOutside } from "@/hooks/useClickOutside";
import { CloseIcon } from "./Icons";

interface ImageOverlayProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
  position?: "left" | "center" | "right";
}

export default function ImageOverlay({
  src,
  alt,
  isOpen,
  onClose,
  position = "center",
}: ImageOverlayProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  useClickOutside(contentRef, onClose, isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const positionClasses = {
    left: "items-start",
    center: "items-center justify-center",
    right: "items-end",
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex ${positionClasses[position]} bg-black/50 backdrop-blur-sm transition-opacity`}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <div
        ref={contentRef}
        className={`relative overflow-auto overlay-scroll ${
          position === "left"
            ? "animate-slide-in-left h-full w-[85vw] max-w-[390px]"
            : "animate-fade-in max-h-[90vh]"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 rounded-full bg-white/90 p-1.5 shadow-lg hover:bg-white transition-colors"
          aria-label="Close"
        >
          <CloseIcon size={20} color="#364153" />
        </button>
        <Image
          src={src}
          alt={alt}
          width={390}
          height={800}
          className={position === "left" ? "w-full h-auto object-contain" : "max-w-[90vw] h-auto object-contain rounded-lg"}
          priority
        />
      </div>
    </div>
  );
}
