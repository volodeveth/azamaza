"use client";

import { useState } from "react";
import Image from "next/image";
import { BurgerIcon } from "@/components/ui/Icons";
import ImageOverlay from "@/components/ui/ImageOverlay";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full" style={{ backgroundColor: "#006CE4", height: "80px" }}>
        <div className="flex h-full items-center justify-between" style={{ padding: "0 16px" }}>
          {/* Logo */}
          <div className="flex items-center" style={{ gap: "4px" }}>
            <Image
              src="/images/logo.png"
              alt="Azamaza logo"
              width={26}
              height={24}
              className="h-6 w-auto object-contain"
              priority
            />
            <span
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "120%",
                color: "#FFFFFF",
              }}
            >
              Azamaza
            </span>
          </div>

          {/* Right side */}
          <div className="flex items-center" style={{ gap: "16px" }}>
            {/* Become a member button */}
            <button
              style={{
                backgroundColor: "#F1D246",
                color: "#434447",
                padding: "5px 16px",
                borderRadius: "24px",
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "103%",
                letterSpacing: "-0.408px",
                textAlign: "center" as const,
                height: "32px",
              }}
              className="transition-colors hover:brightness-105"
            >
              Become a member
            </button>

            {/* Avatar */}
            <div className="relative shrink-0 overflow-hidden rounded-full" style={{ width: "32px", height: "32px" }}>
              <Image
                src="/images/avatar.jpg"
                alt="User avatar"
                width={32}
                height={32}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Burger menu with badge */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="relative transition-opacity hover:opacity-80"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              <BurgerIcon size={24} color="#FFFFFF" />
              {/* Red notification badge */}
              <span
                className="absolute flex items-center justify-center rounded-full font-onest text-white"
                style={{
                  backgroundColor: "#FB2C36",
                  width: "18px",
                  height: "18px",
                  fontSize: "10px",
                  lineHeight: "103%",
                  letterSpacing: "-0.408px",
                  top: "-5px",
                  right: "-7px",
                }}
              >
                3
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Menu overlay */}
      <ImageOverlay
        src="/images/menu.png"
        alt="Navigation menu"
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        position="left"
      />
    </>
  );
}
