import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
	return (
		<header className=" px-2  text-white">
			<div className="container mx-auto flex justify-between items-center 2xl:max-w-7xl">
				<Link href={"/"}>
					<h1 className="font-semibold text-4xl text-accent-foreground">
						Nakib<span className="text-accent">.</span>
					</h1>
				</Link>
				<div className="hidden md:flex gap-8 items-center">
					<Nav></Nav>
					<Link href="/contact">
                        <Button className={'hover:bg-accent hover:text-white font-semibold'}>Contact</Button>
                    </Link>
				</div>
				{/* mobile nav */}
				<div className="md:hidden">
					<MobileNav />
				</div>
			</div>
		</header>
	);
};

export default Header;
