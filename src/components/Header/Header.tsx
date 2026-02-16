"use client";

import { useState } from "react";
import Image from "next/image";
import { BurgerIcon } from "@/components/ui/Icons";
import ImageOverlay from "@/components/ui/ImageOverlay";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-primary-blue">
        <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <Image
              src="/images/logo.png"
              alt="Azamaza logo"
              width={26}
              height={24}
              className="h-6 w-auto"
            />
            <span className="text-lg font-medium text-white" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
              Azamaza
            </span>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Become a member button */}
            <button className="rounded-3xl bg-yellow-header px-4 py-1.5 text-xs tracking-tight text-gray-500 transition-colors hover:bg-yellow-400">
              Become a member
            </button>

            {/* Avatar */}
            <div className="relative h-8 w-8 overflow-hidden rounded-full">
              <Image
                src="/images/avatar.png"
                alt="User avatar"
                width={32}
                height={32}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Burger menu with badge */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="relative p-1 transition-opacity hover:opacity-80"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              <BurgerIcon size={24} color="#FFFFFF" />
              {/* Red notification badge */}
              <span className="absolute -top-1 -right-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-red-badge text-[10px] text-white">
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
