"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const Experience = () => {
    const experiences = [
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
    ];

    return (
        <section className="py-12 md:py-16">
            <div className="w-full h-full flex flex-col items-center text-center gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-4xl font-extrabold hover:text-accent transition-colors cursor-default">
                        My Experience
                    </h1>
                    <p className="text-lg font-medium text-muted-foreground max-w-[600px] mt-4">
                        I am a fresher and do not have formal industry experience yet. However,
                        I have built several{" "}
                        <span className="text-accent font-semibold">real-world projects</span>,
                        collaborated in team environments, and developed strong expertise in{" "}
                        <span className="text-accent font-semibold">
                            MERN Stack development
                        </span>
                        .
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 w-full">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="p-8 rounded-2xl bg-secondary/30 backdrop-blur-md hover:bg-secondary/50 border border-white/10 hover:border-accent shadow-lg transition-all duration-300 group text-left relative overflow-hidden"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            {/* Decorative line */}
                            <div className="absolute top-0 left-0 w-2 h-full bg-accent/20 group-hover:bg-accent transition-colors duration-300"></div>

                            <div className="pl-4">
                                <h3 className="text-2xl font-bold mb-3">{exp.title}</h3>
                                <p className="text-muted-foreground mb-6">{exp.desc}</p>
                                <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
                                    {exp.stack.map((item, idx) => (
                                        <li key={idx} className="text-sm font-bold text-accent px-3 py-1 bg-primary/5 rounded-full border border-accent/20">
                                            {item.name}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex items-center gap-4">
                                    <Link href={exp.live} target="_blank">
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-background/50 backdrop-blur-md flex justify-center items-center group border border-border hover:border-accent transition-all">
                                                    <BsArrowUpRight className="text-foreground text-2xl group-hover:text-accent"></BsArrowUpRight>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Live project</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                    <Link href={exp.github} target="_blank">
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-background/50 backdrop-blur-md flex justify-center items-center group border border-border hover:border-accent transition-all">
                                                    <BsGithub className="text-foreground text-2xl group-hover:text-accent"></BsGithub>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Github repository</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
