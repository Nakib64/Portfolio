"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

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

const MobileNav = () => {
	const pathname = usePathname();

	return (
		<Sheet className="p-2">
			<SheetTrigger className="flex justify-center items-center">
				<CiMenuFries className="text-[32px] text-accent"></CiMenuFries>
			</SheetTrigger>
			<SheetContent>
				<div className="mt-32 mb-40 text-center text-2xl flex flex-col gap-10">
					<Link href={"/"}>
						<h1 className="font-semibold text-4xl text-accent-foreground">
							Nakib<span className="text-accent">.</span>
						</h1>
					</Link>
                    <nav className="flex flex-col gap-10">
                        {
                            links.map(link=>{
                                return (
                                    <Link href={link.path}
                                    key={link.path}
                                    className={`${link.path == pathname && " text-accent border-b-2"} text-xl capitalize hover:text-accent transition-all`}>{link.name}</Link>
                                )
                            })
                        }
                    </nav>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
