"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

// project data
const projects = [
	{
		num: "01",
		category: "Full stack",
		title: "FitLife",
		desciption:
			"FitLife AI Coach is an AI-powered fitness and wellness web application built with Next.js. It provides personalized workout and diet plans, progress tracking, and an AI fitness assistant to guide users in real time. With gamification, multi-language support, and wellness features, the platform helps users stay motivated, healthy, and consistent in their fitness journey.",
		stack: [
			{ name: "Next.js" },
			{ name: "OpenAI API" },
			{ name: "NextAuth" },
			{ name: "Express.js" },
			{ name: "MongoDB" },
		],
		image: "/fitlife.png",
		video: "/fitlife_video.mp4",
		live: "https://fitlife-lac.vercel.app/",
		github: "https://github.com/Nakib64/Fitlife",
	},
	{
		num: "02",
		title: "Blood Aid",
		category: "Full stack",
		desciption:
			"BloodAid is a modern full-stack blood donation platform built using the MERN stack and Firebase Authentication.\n \n Admin email: nafiz2282@gmail.com\n Password: Nakib1",
		stack: [{ name: "React.js" }, { name: "Express.js" }, { name: "MongoDB" }],
		image: "/bloodaid.png",
		video: "/bloodaid.mp4",
		live: "https://bloodaid-f4332.web.app/",
		github: "https://github.com/Nakib64/Blood-Aid",
	},

	{
		num: "03",
		title: "Wholesale website",
		desciption:
			"🛒 A responsive full-stack B2B wholesale platform with category-based browsing, secure authentication, and a dynamic cart system.",
		stack: [{ name: "React.js" }, { name: "Express.js" }, { name: "MongoDB" }],
		image: "/whoelsale.png",
		video: "/wholesale.mp4",
		live: "https://wholesale-11b32.web.app/",
		github: "https://github.com/Nakib64/WholeSaleMarket",
	},
	{
		num: "04",
		category: "Full stack",
		title: "Airbnb",
		desciption:
			"A modern Airbnb homepage clone with additional routes, detailed pages, smooth animations, and a beautiful responsive UI. This project is built to showcase frontend and backend integration using Next.js, TypeScript, shadcn/ui, Framer Motion, MongoDB, and Express.js.",
		stack: [{ name: "TypeScript" }, { name: "Next.js" }, { name: "MongoDB" }],
		image: "/airbnb.png",
		video: "/airbnb.mp4",
		live: "https://airbnb-five-xi.vercel.app/",
		github: "https://github.com/Nakib64/Airbnb/",
	},
];

// animation helpers
// animation helpers
const fadeUp = {
	hidden: { opacity: 0, y: 40 },
	show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ProjectCard component with video hover effect
const ProjectCard = ({ project, reverse }) => {
	const videoRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const handleMouseEnter = () => {
		if (videoRef.current) {
			videoRef.current.play();
			setIsPlaying(true);
		}
	};

	const handleMouseLeave = () => {
		if (videoRef.current) {
			videoRef.current.pause();
			videoRef.current.currentTime = 0;
			setIsPlaying(false);
		}
	};

	return (
		<motion.div
			className={`flex flex-col lg:flex-row items-center gap-8 ${reverse ? "lg:flex-row-reverse" : ""
				} text-left`}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.2 }} // Optimized viewport trigger
		>
			{/* Video / Image container */}
			<motion.div
				variants={fadeUp}
				className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg relative group"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<video
					ref={videoRef}
					src={project.video}
					poster={project.image}
					loop
					muted
					playsInline
					className={`w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[400px] object-cover transition-opacity duration-300 `}
				/>
			</motion.div>

			{/* Text content */}
			<motion.div
				variants={fadeUp}
				className="w-full lg:w-1/2 flex flex-col gap-4  lg:items-start"
			>
				<span className="text-6xl font-extrabold text-outline text-transparent">
					{project.num}
				</span>
				<h2 className="text-3xl md:text-4xl font-bold text-foreground">
					{project.title}
				</h2>
				<p className="text-muted-foreground whitespace-pre-line">{project.desciption}</p>

				<ul className="flex gap-4 flex-wrap justify-center lg:justify-start">
					{project.stack.map((s, i) => (
						<li key={i} className="text-accent font-bold text-lg">
							{s.name}
							{i !== project.stack.length - 1 && ","}
						</li>
					))}
				</ul>

				<div className="flex gap-4 mt-4">
					<Link href={project.live} target="_blank" rel="noreferrer">
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center group">
									<BsArrowUpRight className="text-foreground text-2xl group-hover:text-accent transition-colors" />
								</TooltipTrigger>
								<TooltipContent>
									<p>Live project</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</Link>

					<Link href={project.github} target="_blank" rel="noreferrer">
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center group">
									<BsGithub className="text-foreground text-2xl group-hover:text-accent transition-colors" />
								</TooltipTrigger>
								<TooltipContent>
									<p>GitHub repository</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</Link>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default function Work() {
	return (
		<section className="py-16 ">
			<div className="container mx-auto 2xl:max-w-7xl px-4 flex flex-col gap-12 md:gap-24">
				{projects.map((project, index) => (
					<ProjectCard
						key={project.num}
						project={project}
						reverse={index % 2 !== 0}
					/>
				))}
			</div>
		</section>
	);
}
