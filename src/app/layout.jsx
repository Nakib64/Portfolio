import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

export const metadata = {
	title: "Nafiz's Portfolio",
	description: "",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="dark">
			
			<body className={`cutive-mono-regular antialiased min-h-screen `}>
				<Header></Header>
				<StairTransition />
				<PageTransition>{children}</PageTransition>
			</body>
		</html>
	);
}
