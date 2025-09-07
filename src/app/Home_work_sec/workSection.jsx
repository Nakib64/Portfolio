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
    title: "Blood Aid",
    desciption:
      "BloodAid is a modern full-stack blood donation platform built using the MERN stack and Firebase Authentication.",
    stack: [{ name: "React.js" }, { name: "Express.js" }, { name: "MongoDB" }],
    image: "/bloodaid.png",
    video: "/bloodaid.mp4",
    live: "https://bloodaid-f4332.web.app/",
    github: "https://github.com/Nakib64/Blood-Aid",
  },
  {
    num: "02",
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
		num: "03",
		category: "fullstack",
		title: "PC-shop",
		desciption:
			"PC-Store is a modern e-commerce web application built with the MERN stack and Next.js. It allows users to browse, search, and view products, while admins can manage products and users.",
		stack: [{ name: "Next.js" },  { name: "MongoDB" }],
		image: "/eshop.png",
    video: "/eshop.mp4",
		live: "https://e-shop-liard-seven.vercel.app/ 	",
		github: "https://github.com/Nakib64/e-shop",
	},
	{
		num: "04",
		category: "fullstack",
		title: "Plants Care",
		desciption:
			"A responsive, full-stack Plant Care Management app where users can monitor plant health, track watering schedules, and manage plant data. Users can add or remove plants based on categories and receive helpful guidance for better plant care. Built with the MERN stack and robust CRUD functionality (POST, PUT, PATCH, DELETE).",
		stack: [{ name: "React.js" }, { name: "Express.js" }, { name: "MongoDB" }],
		image: "/plantscare.png",
    video: "/plant.mp4",
		live: "https://plants-b7145.web.app/",
		github: "https://github.com/Nakib64/PlantCare",
	},
];

// animation helpers
const fadeInLR = (direction = "left") => ({
  hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
});
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ProjectCard component with video hover effect
const ProjectCard = ({ project, reverse, isMobile }) => {
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

  const imageVariant =  fadeInLR(reverse ? "right" : "left");
  const textVariant =  fadeInLR(reverse ? "left" : "right");

  return (
    <motion.div
      className={`flex flex-col lg:flex-row items-center gap-8 ${
        reverse ? "lg:flex-row-reverse" : ""
      } text-left`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      {/* Video / Image container */}
      <motion.div
        variants={imageVariant}
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
        variants={textVariant}
        className="w-full lg:w-1/2 flex flex-col gap-4  lg:items-start"
      >
        <span className="text-6xl font-extrabold text-outline text-transparent">
          {project.num}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          {project.title}
        </h2>
        <p className="text-white/70">{project.desciption}</p>

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
                <TooltipTrigger className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group">
                  <BsArrowUpRight className="text-white text-2xl group-hover:text-accent transition-colors" />
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
                <TooltipTrigger className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group">
                  <BsGithub className="text-white text-2xl group-hover:text-accent transition-colors" />
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="py-16 bg-neutral-900">
      <div className="container mx-auto 2xl:max-w-7xl px-4 space-y-24">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.num}
            project={project}
            reverse={index % 2 !== 0}
            isMobile={isMobile}
          />
        ))}
      </div>
    </section>
  );
}