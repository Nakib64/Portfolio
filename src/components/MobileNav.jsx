"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // control Sheet open state

  const handleLinkClick = () => {
    setOpen(false); // close drawer on link click
  };

  return (
    <Sheet open={open} onOpenChange={setOpen} className="p-2">
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent>
        <div className="mt-32 mb-40 text-center text-2xl flex flex-col gap-10">
          <Link href="/" onClick={handleLinkClick}>
            <h1 className="font-semibold text-4xl text-accent-foreground">
              Nakib<span className="text-accent">.</span>
            </h1>
          </Link>

          <nav className="flex flex-col gap-10">
            {links.map((link) => (
              <Link
                href={link.path}
                key={link.path}
                onClick={handleLinkClick} // close drawer
                className={`${
                  link.path === pathname ? "text-accent border-b-2" : ""
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
