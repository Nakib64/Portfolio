"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nav = () => {
	const pathname = usePathname();
	console.log(pathname);
	const links = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "Services",
			path: "/services",
		},
		{
			name: "Resume",
			path: "/resume",
		},
		{
			name: "work",
			path: "/work",
		},
		{
			name: "Contact",
			path: "/contact",
		},
	];
	return (
		<nav className="flex gap-8">
			{links.map((link) => {
				return (
					<Link
                     href={link.path}
                    key={link.path}
                    className={`${link.path == pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}
                     >
						{link.name}
					</Link>
				);
			})}
		</nav>
	);
};

export default Nav;
