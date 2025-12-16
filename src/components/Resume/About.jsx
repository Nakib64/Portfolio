"use client";

import React from "react";
import { motion } from "framer-motion";

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

const About = () => {
    return (
        <section className="py-12 md:py-16">
            <motion.div
                className="flex flex-col lg:flex-row gap-12 items-start"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="flex-1 space-y-6 text-center md:text-left">
                    <h3 className="text-4xl font-bold text-accent">{about.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        {about.description}
                    </p>
                </div>

                <div className="flex-1 w-full">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                        {about.info.map((item, index) => (
                            <motion.li
                                key={index}
                                className="flex flex-col p-6 rounded-xl bg-secondary/30 backdrop-blur-md hover:bg-secondary/50 transition-all border border-white/10 hover:border-accent"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-sm text-muted-foreground uppercase tracking-wider">{item.fieldName}</span>
                                <span className="text-xl font-bold">{item.fieldvalue}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
