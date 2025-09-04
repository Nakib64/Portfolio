"use client";

import {
	FaCss3,
	FaFigma,
	FaHtml5,
	FaJs,
	FaNodeJs,
	FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion, px } from "framer-motion";
import { BiLogoMongodb } from "react-icons/bi";
import { SiFirebase } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
const about = {
	title: "About Me",
	description:
		"Hi there! I'm Nakib, a full-stack web developer with a strong focus on building modern, scalable, and high-performance web applications. I specialize in the MERN stack (MongoDB, ExpressJs, React, NodeJs), along with clean, responsive UI design using Tailwind CSS, HTML, and CSS.",
	info: [
		{
			fieldName: "Name",
			fieldvalue: "Nafiz Uddowla Nakib",
		},

		{
			fieldName: "Phone",
			fieldvalue: "880 1315168075",
		},
		{
			fieldName: "Experience",
			fieldvalue: "1 Years",
		},
		{
			fieldName: "Nationality",
			fieldvalue: "Bangladeshi",
		},
		{
			fieldName: "Email",
			fieldvalue: "nafiz2282@gmail.com",
		},
		{
			fieldName: "Freelance",
			fieldvalue: "Available",
		},
	],
};

const education = {
	icon: "/education.png",
	title: "My Education",
	description: "",
	items: [
		{
			institution: "Pabna University of Science And Technology",
			degree: "Computer Science and Engineering",
			duration: "November-2025 - November-2029",
		},
		{
			institution: "Programming Hero",
			degree: "Web Development",
			duration: "January-2025 - July-2025",
		},
		{
			institution: "Apna College",
			degree: "Web Development",
			duration: "July-2024 - January-2025",
		},
	],
};

const skills = {
	title: "My Skills",
	description: "",
	skillList: [
		{
			icon: <SiNextdotjs />,
			name: "Next.js",
		},
		{
			icon: <FaReact />,
			name: "React.js",
		},
		{
			icon: <FaNodeJs />,
			name: "node.js",
		},
		{
			icon: <BiLogoMongodb />,
			name: "MongoDB",
		},
		{
			icon: <SiFirebase />,
			name: "Firebase Auth",
		},
		{
			icon: <SiTailwindcss />,
			name: "Tailwind.css",
		},

		{
			icon: <FaJs />,
			name: "Javascript",
		},

		{
			icon: <FaFigma />,
			name: "figma",
		},
	],
};

const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[85vh] flex items-center justify-center py-12 md:py-4 "
		>
			<div className="container mx-auto 2xl:max-w-7xl px-2">
				<Tabs
					defaultValue="skills"
					className="flex flex-col lg:flex-row gap-[60px] items-center"
				>
					<TabsList
						className={"flex flex-col justify-center w-full max-w-[380px] mx-auto md:mx-0 gap-6"}
					>
						<TabsTrigger value="skills">Skills</TabsTrigger>
						<TabsTrigger value="experience">Experience</TabsTrigger>
						<TabsTrigger value="education">Education</TabsTrigger>
						<TabsTrigger value="about me">About me</TabsTrigger>
					</TabsList>

					{/* contents */}
					<div className=" w-full">
						{/* skills */}
						<TabsContent value="skills" className={"w-full h-full container mx-auto"}>
							<div className="flex flex-col gap-[30px]">
								<div className="flex flex-col gap-[0px] text-center md:text-left">
									<h3 className="text-4xl font-bold">{skills.title}</h3>
									<p className="max-w-[600px] text-white/60 mx-auto md:mx-0">
										{skills.description}
									</p>
								</div>
								<ul className="grid grid-cols-2 md:grid-cols-3 gap-7.5 ">
									{skills.skillList.map((skill, index) => {
										return (
											<li key={index} className="flex justify-center">
												<TooltipProvider delayDuration={100}>
													<Tooltip>
														<TooltipTrigger className="w-full h-37.5 bg-[#232329] rounded-xl flex justify-center items-center group">
															<div className="text-6xl group-hover:text-accent transition-all duration-300">
																{skill.icon}
															</div>
														</TooltipTrigger>
														<TooltipContent>
															<p>{skill.name}</p>
														</TooltipContent>
													</Tooltip>
												</TooltipProvider>
											</li>
										);
									})}
								</ul>
							</div>
						</TabsContent>
						{/* experience */}
						<TabsContent value="experience">
							<div className="w-full h-full flex flex-col items-center text-center gap-8">
								{/* Title */}
								<motion.h1
									className="text-4xl font-extrabold hover:text-accent"
									initial={{ opacity: 0, y: 40 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6 }}
								>
									My Experience
								</motion.h1>

								{/* Description */}
								<motion.p
									className="text-lg font-medium text-white/70 max-w-[600px]"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.2 }}
								>
									I am a fresher and do not have formal industry experience yet. However,
									I have built several{" "}
									<span className="text-accent font-semibold">real-world projects</span>,
									collaborated in team environments, and developed strong expertise in{" "}
									<span className="text-accent font-semibold">
										MERN Stack development
									</span>
									.
								</motion.p>

								{/* Projects / Skills Highlight */}
								<motion.div
									className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4"
									initial="hidden"
									whileInView="show"
									variants={{
										hidden: {},
										show: { transition: { staggerChildren: 0.15 } },
									}}
								>
									{[
										{
											title: "Blood Aid Platform",
											desc:
												"Full-stack donation system with dashboards for donors, volunteers, and admin.",
											stack: [
												{ name: "React.js" },
												{ name: "Express.js" },
												{ name: "MongoDB" },
											],
											image: "/bloodaid.png",
											live: "https://bloodaid-f4332.web.app/",
											github: "https://github.com/Nakib64/Blood-Aid",
										},
										{
											title: "Wholesale E-Commerce",
											desc:
												"B2B e-commerce platform with secure auth, cart, filters, and Stripe payments.",
											stack: [
												{ name: "React.js" },
												{ name: "Express.js" },
												{ name: "MongoDB" },
											],
											live: "https://wholesale-11b32.web.app/",
											github: "https://github.com/Nakib64/WholeSaleMarket",
										},
									].map((exp, index) => (
										<motion.div
											key={index}
											className="p-5 rounded-xl bg-[#232329] hover:bg-[#2e2e36] border border-transparent hover:border-accent shadow-md transition-all duration-300 cursor-pointer space-y-4"
											variants={{
												hidden: { opacity: 0, y: 30 },
												show: { opacity: 1, y: 0 },
											}}
										>
											<h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
											<p className="text-sm text-white/60">{exp.desc}</p>
											<ul className="flex gap-4 text-center">
												{exp.stack.map((item, index) => {
													return (
														<li key={index} className="text-md text-accent font-extrabold">
															{item.name}
															{index !== exp.stack.length - 1 && ","}
														</li>
													);
												})}
											</ul>
											<div className="flex items-center gap-4">
												{/* live link */}
												<Link href={exp.live}>
													<TooltipProvider delayDuration={100}>
														<Tooltip>
															<TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
																<BsArrowUpRight className="text-white text-3xl group-hover:text-accent"></BsArrowUpRight>
															</TooltipTrigger>
															<TooltipContent>
																<p>live project</p>
															</TooltipContent>
														</Tooltip>
													</TooltipProvider>
												</Link>
												{/* github link */}
												<Link href={exp.github}>
													<TooltipProvider delayDuration={100}>
														<Tooltip>
															<TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
																<BsGithub className="text-white text-3xl group-hover:text-accent"></BsGithub>
															</TooltipTrigger>
															<TooltipContent>
																<p>Github repository</p>
															</TooltipContent>
														</Tooltip>
													</TooltipProvider>
												</Link>
											</div>
										</motion.div>
									))}
								</motion.div>
							</div>
						</TabsContent>
						{/* education */}
						<TabsContent value="education">
							<div className="flex flex-col gap-[30px] text-center md:text-left">
								<h3 className="text-4xl font-bold">{education.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto md:mx-0">
									{education.description}
								</p>
								<ScrollArea className={"h-[400px]"}>
									<ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
										{education.items.map((item, index) => {
											return (
												<li
													key={index}
													className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center md:items-start gap-1"
												>
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center md:text-left">
														{item.degree}
													</h3>
													<div className="flex items-center gap-3">
														{/* dot */}
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>

														<p className="text-white/60">{item.institution}</p>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						{/* about me */}
						<TabsContent
							value="about me"
							className="md:flex md:items-start gap-10 text-center md:text-leftf"
						>
							{/* Left side - Title & Description */}
							<div className="flex-1 space-y-6 text-center md:text-left">
								<h3 className="text-4xl font-bold">{about.title}</h3>
								<p className="text-white/60 max-w-[600px] mx-auto md:mx-0">
									{about.description}
								</p>
							</div>

							{/* Right side - Info List */}
							<div className="flex-1">
								<ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
									{about.info.map((item, index) => (
										<li key={index} className="flex flex-col">
											<span className="text-sm text-white/50">{item.fieldName}</span>
											<span className="text-lg font-medium">{item.fieldvalue}</span>
										</li>
									))}
								</ul>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default Resume;
