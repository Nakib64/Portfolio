"use client";

import React from "react";
import {
    FaCss3,
    FaFigma,
    FaHtml5,
    FaJs,
    FaNodeJs,
    FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFirebase } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { motion } from "framer-motion";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

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

const Skills = () => {
    return (
        <section className="py-12 md:py-16">
            <div className="flex flex-col gap-[30px] text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-muted-foreground mx-auto md:mx-0 mt-4">
                        {skills.description}
                    </p>
                </motion.div>
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.skillList.map((skill, index) => {
                        return (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex justify-center"
                            >
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-full h-[150px] bg-secondary/30 backdrop-blur-md hover:bg-secondary/50 rounded-xl flex justify-center items-center group border border-white/10 hover:border-accent transition-all duration-300 shadow-sm">
                                            <div className="text-6xl group-hover:text-accent transition-all duration-300 group-hover:scale-110">
                                                {skill.icon}
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{skill.name}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </motion.li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Skills;
