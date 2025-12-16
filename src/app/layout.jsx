import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
	title: "Nafiz's Portfolio",
	description: "",
};

import Background3D from "@/components/Background3D";
import ScrollProgress from "@/components/ScrollProgress";


export default function RootLayout({ children }) {
	return (
		<html lang="en" className="dark" suppressHydrationWarning>
			<body className={`cutive-mono-regular antialiased min-h-screen `}>
				<Background3D />
				<ScrollProgress />
				<Header />
				<StairTransition />
				<Toaster position="top-center" />
				<PageTransition>{children}</PageTransition>
			</body>
		</html>
	);
}
