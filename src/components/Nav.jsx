"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nav = () => {
  const pathname = usePathname();
  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Resume", path: "/resume" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="flex gap-8">
      {links.map((link) => {
        const isActive = link.path === pathname;
        return (
          <Link
            href={link.path}
            key={link.path}
            className={`relative group capitalize font-medium transition-all hover:text-accent ${
              isActive ? "text-accent" : "text-white"
            }`}
          >
            {link.name}

            {/* animated underline */}
            <span
              className={`
                absolute left-0 bottom-0 w-full h-[2px] bg-accent
                transform scale-x-0 origin-left transition-transform duration-300
                ${isActive ? "scale-x-100" : ""}
                group-hover:scale-x-100
              `}
            ></span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
