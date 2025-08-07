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

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
const about = {
	title: "About Me",
	description: "Hi there! I'm Nakib, a full-stack web developer with a strong focus on building modern, scalable, and high-performance web applications. I specialize in the MERN stack (MongoDB, ExpressJs, React, NodeJs), along with clean, responsive UI design using Tailwind CSS, HTML, and CSS.",
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
			duration: "July-2024 - January-2024",
		},
	],
};

const skills = {
	title: "My Skills",
	description: "",
	skillList: [
		{
			icon: <FaHtml5 />,
			name: "HTML 5",
		},
		{
			icon: <FaCss3 />,
			name: "CSS 3",
		},
		{
			icon: <FaJs />,
			name: "Javascript",
		},
		{
			icon: <FaReact />,
			name: "React.js",
		},
		{
			icon: <SiNextdotjs />,
			name: "Next.js",
		},
		{
			icon: <SiTailwindcss />,
			name: "Tailwind.css",
		},
		{
			icon: <FaNodeJs />,
			name: "node.js",
		},
		{
			icon: <FaFigma />,
			name: "figma",
		},
	],
};

const page = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[80vh] flex items-center justify-center py-12 md:py-4 "
		>
			<div className="container mx-auto 2xl:max-w-7xl px-2">
				<Tabs
					defaultValue="skills"
					className="flex flex-col lg:flex-row gap-[60px] items-center"
				>
					<TabsList
						className={"flex flex-col w-full max-w-[380px] mx-auto md:mx-0 gap-6"}
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
                                <div className="flex flex-col gap-[30px] text-center md:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto md:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 md:grid-cols-3 gap-7.5 ">
                                    {skills.skillList.map((skill, index)=>{
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
                                                            <p >{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                                
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
						{/* experience */}
						<TabsContent value="experience">
							<div className="w-full h-full flex justify-center text-center flex-col gap-10">
								<h1 className="text-4xl font-extrabold hover:text-accent">
									My Experience
								</h1>
								<p className="text-lg font-medium">
									I am a fresher, I don't have any industrial experience.
								</p>
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
						<TabsContent value="about me" className={" text-center md:text-left"}>
                            <div className="flex flex-col gap-7.5  mx-auto ">
                                <h3 className="text-4xl font-bold">
                                    {about.title}
                                </h3>
                                <h3 className="max-w-[600px] text-white/60 mx-auto">
                                    {about.description}
                                </h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-[620px] mx-auto md:mx-0">
                                    {about.info.map((item, index)=>{
                                        return(
                                            <li className="flex items-center justify-center md:justify-start gap-4 " key={index}>
                                                <span className="text-white/60">
                                                    {item.fieldName}
                                                </span>
                                                <span className="text-xl">
                                                    {item.fieldvalue}
                                                </span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default page;
