"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

const education = {
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

const Education = () => {
    return (
        <section className="py-12 md:py-16">
            <div className="flex flex-col gap-[30px] text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-4xl font-bold">{education.title}</h3>
                    <p className="max-w-[600px] text-muted-foreground mx-auto md:mx-0 mt-4">
                        {education.description}
                    </p>
                </motion.div>

                <div className="w-full">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {education.items.map((item, index) => {
                            return (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-secondary/30 backdrop-blur-md h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center md:items-start gap-1 border border-white/10 hover:border-accent transition-all duration-300 hover:shadow-lg group"
                                >
                                    <span className="text-accent font-medium">{item.duration}</span>
                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center md:text-left font-bold group-hover:text-primary transition-colors">
                                        {item.degree}
                                    </h3>
                                    <div className="flex items-center gap-3">
                                        <span className="w-[8px] h-[8px] rounded-full bg-accent animate-pulse"></span>
                                        <p className="text-muted-foreground">{item.institution}</p>
                                    </div>
                                </motion.li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Education;
