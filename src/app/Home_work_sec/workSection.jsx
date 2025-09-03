"use client";

import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

// your data
const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Blood Aid",
    desciption:
      "BloodAid is a modern full-stack blood donation platform built using the MERN stack (MongoDB, Express, React, Node.js) and Firebase Authentication. It empowers users to request or donate blood, manage donation statuses, explore verified donors, and handle admin operations with ease.",
    stack: [{ name: "React.js" }, { name: "Express.js" }, { name: "MongoDB" }],
    image: "/bloodaid.png",
    live: "https://bloodaid-f4332.web.app/",
    github: "https://github.com/Nakib64/Blood-Aid",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Wholesale website",
    desciption:
      "🛒 A responsive full-stack B2B wholesale platform with category-based browsing, secure authentication, and a dynamic cart system. Built with React, Node.js, Express & MongoDB.",
    stack: [{ name: "React.js" }, { name: "Express.js" }, { name: "MongoDB" }],
    image: "/whoelsale.png",
    live: "https://wholesale-11b32.web.app/",
    github: "https://github.com/Nakib64/WholeSaleMarket",
  },
  {
    num: "03",
    category: "fullstack",
    title: "PC-shop",
    desciption:
      "PC-Store is a modern e-commerce web application built with the MERN stack and Next.js. It allows users to browse, search, and view products, while admins can manage products and users.",
    stack: [{ name: "Next.js" }, { name: "MongoDB" }],
    image: "/eshop.png",
    live: "https://e-shop-liard-seven.vercel.app/",
    github: "https://github.com/Nakib64/e-shop",
  },
  {
    num: "04",
    category: "fullstack",
    title: "Plants Care",
    desciption:
      "A responsive, full-stack Plant Care Management app where users can monitor plant health, track watering schedules, and manage plant data. Built with the MERN stack and robust CRUD functionality (POST, PUT, PATCH, DELETE).",
    stack: [{ name: "React.js" }, { name: "Express.js" }, { name: "MongoDB" }],
    image: "/plantscare.png",
    live: "https://plants-b7145.web.app/",
    github: "https://github.com/Nakib64/PlantCare",
  },
];

/** @param {"left"|"right"} direction */
const fadeIn = (direction = "left") => ({
  hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
});

export default function Work() {
  return (
    <section className="min-h-screen py-16">
      <div className="container mx-auto 2xl:max-w-7xl px-4 space-y-24">
        {projects.map((project, index) => {
          const reverse = index % 2 !== 0; // alternate layout
          return (
            <motion.div
              key={project.num}
              className={`flex flex-col lg:flex-row items-center gap-10 ${
                reverse ? "lg:flex-row-reverse" : ""
              }`}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }} // re-animate on each scroll-in
            >
              {/* Image */}
              <motion.div
                variants={fadeIn(reverse ? "right" : "left")}
                className="w-full lg:w-1/2 h-[320px] lg:h-[400px] relative rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                variants={fadeIn(reverse ? "left" : "right")}
                className="w-full lg:w-1/2 flex flex-col gap-5"
              >
                <span className="text-6xl font-extrabold text-outline text-transparent">
                  {project.num}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {project.title}
                </h2>
                <p className="text-white/70">{project.desciption}</p>

                <ul className="flex gap-4 flex-wrap">
                  {project.stack.map((item, i) => (
                    <li key={i} className="text-accent font-bold text-lg">
                      {item.name}
                      {i !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 mt-4">
                  <Link href={project.live} target="_blank">
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

                  <Link href={project.github} target="_blank">
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
        })}
      </div>
    </section>
  );
}
