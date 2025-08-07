"use client";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import "./../globals.css";

const services = [
  {
    num: "01",
    title: "Frontend Development",
    description:
      "Build responsive, fast, and user-friendly frontend websites tailored to your business needs.",
    href: "#",
  },
  {
    num: "02",
    title: "Full Stack Development",
    description:
      "Build functional, SEO-friendly, fast full stack websites tailored to your business needs.",
    href: "#",
  },
];

const Page = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center py-12 md:py-0">
      <div className="container mx-auto px-4 2xl:max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {services.map((service, index) => (
            <div key={index} className="flex-1 group">
              <div className="flex flex-col gap-6">
                <div className="w-full flex justify-between items-center group">
                  <div className="text-5xl font-extrabold text-accent text-outline group-hover:bal transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent  transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-black text-3xl" />
                  </Link>
                </div>
                <h2 className="text-xl md:text-2xl font-semibold group-hover:text-accent tracking-widest">{service.title}</h2>
                <p className="text-white/80">{service.description}</p>
                <div className="border-b border-white/20 w-full" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Page;
