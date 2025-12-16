"use client";

import { motion } from "framer-motion";
import Experience from "@/components/Resume/Experience";
import Education from "@/components/Resume/Education";
import Skills from "@/components/Resume/Skills";
import About from "@/components/Resume/About";

const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[85vh] py-12 xl:py-0 relative"
		>
			<div className="container mx-auto px-4">
				{/* Introduction / Hero for Resume */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="text-center mb-8 md:mb-16 space-y-4 pt-4 md:pt-8"
				>
					<h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
						My Journey
					</h1>
					<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
						Explore my professional background, skills, and educational achievements.
					</p>
				</motion.div>

				<div className="flex flex-col gap-12 md:gap-24 pb-12 md:pb-24">
					<Experience />
					<Skills />
					<Education />
					<About />
				</div>
			</div>
		</motion.div>
	);
};

export default Resume;

