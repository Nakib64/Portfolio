"use client";

import { motion } from "framer-motion";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
const projects = [
  {
    num: "01",
    title: "Blood Aid",
    desciption:
      "BloodAid is a modern full-stack blood donation platform built using the MERN stack and Firebase Authentication.\n \n Admin email: nafiz2282@gmail.com\n Password: Nakib1",
    stack: [{ name: "React.js" }, { name: "Express.js" }, { name: "MongoDB" }],
    image: "/bloodaid.png",
    video: "/bloodaid.mp4",
    live: "https://bloodaid-f4332.web.app/",
    github: "https://github.com/Nakib64/Blood-Aid",
  },
  {
		num: "02",
		category: "fullstack",
		title: "FitLife",
		desciption:
			"FitLife AI Coach is an AI-powered fitness and wellness web application built with Next.js. It provides personalized workout and diet plans, progress tracking, and an AI fitness assistant to guide users in real time. With gamification, multi-language support, and wellness features, the platform helps users stay motivated, healthy, and consistent in their fitness journey.",
		stack: [{ name: "Next.js" },{ name: "NextAuth" },{ name: "React.js" }, { name: "Express.js" }, { name: "MongoDB" }],
		image: "/fitlife.png",
    video: "/fitlife.mp4",
		live: "https://fitlife-lac.vercel.app/",
		github: "https://github.com/Nakib64/Fitlife",
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
		category: "fullstack",
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

const Work = () => {
	const [project, setProject] = useState(projects[0]);


	
	const swiper = useSwiper();
	const handleslideChange = (swiper) => {
		// geet current slide index
		const currentIndex = swiper.activeIndex;

		// update project state based on current slide
		setProject(projects[currentIndex]);
	};
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[80vh] flex flex-col justify-center py-12  lg:px-0"
		>
			<div className="container mx-auto 2xl:max-w-7xl px-4">
				<div className="flex flex-col lg:flex-row lg:gap-7.5">
					<div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
						<div className="flex flex-col gap-7.5 h-1/2">
							{/* outline num */}
							<div className="text-8xl leading-none font-extrabold text-transparent text-outline">
								{project.num}
							</div>
							{/* project category */}
							<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
								{project.title}
							</h2>
							{/* project description */}
							<p className="text-white/60 whitespace-pre-line">{project.desciption}</p>
							{/* stack */}
							<ul className="flex gap-4">
								{project.stack.map((item, index) => {
									return (
										<li key={index} className="text-xl text-accent font-extrabold">
											{item.name}
											{index !== project.stack.length - 1 && ","}
										</li>
									);
								})}
							</ul>
							{/* border */}
							<div className="border border-white/20"></div>
							{/* button */}
							<div className="flex items-center gap-4">
								{/* live link */}
								<Link href={project.live}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
												<BsArrowUpRight className="text-white text-3xl group-hover:text-accent"></BsArrowUpRight>
											</TooltipTrigger>
											<TooltipContent>
												<p>live project</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>
								{/* github link */}
								<Link href={project.github}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
												<BsGithub className="text-white text-3xl group-hover:text-accent"></BsGithub>
											</TooltipTrigger>
											<TooltipContent>
												<p>Github repository</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>
							</div>
						</div>
					</div>
					<div className="w-full lg:w-[50%] ">
						<Swiper
							modules={[Navigation, Pagination]}
							spaceBetween={30}
							navigation
							pagination={{ clickable: true }}
							slidesPerView={1}
							className="lg:h-[520px] mb-12"
							onSlideChange={handleslideChange}
						>
							{projects.map((project, index) => {
								return (
									<SwiperSlide key={index} className="w-full">
										<div className="h-115 relative group flex justify-center items-center bg-pink-50/20">
											{/* overlay */}
											<div className="absolute top-0 bottom-0 w-full hover: bg-black/10 z-10"></div>
											{/* image */}
											<div className="w-full h-full relative">
												<Image
													src={project.image}
													fill
													className="object-cover"
													alt=""
												></Image>
											</div>
										</div>
										<p className="text-gray-400 italic text-center">
											[Swipe the image to view more]
										</p>
									</SwiperSlide>
								);
							})}
							{/* slider buttions */}
						</Swiper>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Work;
