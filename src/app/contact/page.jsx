"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
const info = [
	{
		icon: <FaPhoneAlt />,
		title: "Phone",
		description: "(+880) 1315 168075",
	},
	{
		icon: <FaEnvelope />,
		title: "Email",
		description: "nafiz2282@gmail.com",
	},
	{
		icon: <FaMapMarkedAlt />,
		title: "Address",
		description: "Dhaka, Bangladesh",
	},
];
const page = () => {

    const handleSubmit = (e)=>{
        e.preventDefault()
        e.target.reset()
    }
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="py-6"
		>
            <div className="container mx-auto px-4 2xl:max-w-7xl mt-4">
                <div className="flex-col-reverse flex  lg:flex-row gap-7.5">
                    {/* form */}
                    <div className="lg:h-[54%]  lg:w-9/12">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl w-full" onSubmit={handleSubmit}>
                            <h3 className="text-4xl text-accent">
                                Let's work together
                            </h3>
                            <p className="text-white/60"></p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type={"firstname"} placeholder={"Firstname"}></Input>
                                <Input type={"lastname"} placeholder={"Lastname"}></Input>
                                <Input type={"email"} placeholder={"Email address"}></Input>
                                <Input type={"phone"} placeholder={"Phone number"}></Input>
                            </div>
                            {/* select */}
                            <Select>
                                <SelectTrigger className={"w-full"}>
                                    <SelectValue placeholder="Select a service">
                                    </SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="frontend">Frontend Development</SelectItem>
                                        <SelectItem value="fullstack">Fullstack Development</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* text area */}
                            <Textarea className={'h-[150px]'} placeholder="Share your thought...">
                            </Textarea>
                            {/* button */}
                            <Button size={"md"} variant={'ghost'} className={"max-w-40"} type="submit">
                                Send message
                            </Button>
                        </form>    
                    </div> 
                    {/* info */}
                    <div className="flex items-center lg:justify-center ">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index)=>{
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] lg:w-[72px] lg:-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div>
                                            <p className="text-white/60">{item.title}</p>
                                            <p className="text-xl">{item.description}</p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
	);
};

export default page;
