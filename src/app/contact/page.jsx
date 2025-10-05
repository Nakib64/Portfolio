"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { toast } from "sonner";

const info = [
	{ icon: <FaPhoneAlt />, title: "Whatsapp", description: "(+880) 1315 168075" },
	{ icon: <FaEnvelope />, title: "Email", description: "nafiz2282@gmail.com" },
	{
		icon: <FaMapMarkedAlt />,
		title: "Address",
		description: "Dhaka, Bangladesh",
	},
];

const Contact = () => {
	const [status, setStatus] = useState("Send");
	const [loading, setloading] = useState(false);
	const [title, setTitle] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		setloading(true);
		const form = e.target;

		setStatus("Sending...");

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
				form,
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
			)
			.then(
				() => {
					setStatus("send");

					setloading(false);
					form.reset();
					toast("✅ Message sent! I’ll be in touch with you soon. 😊");
				},
				(error) => {
					setloading(false);
					setStatus("Send");
					console.error("EmailJS Error:", error);
					toast("🛠️ Message delivery failed! Looks like a server glitch. Try again soon. ⚙️");

				}
			);
	};

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
				<div className="flex-col-reverse flex lg:flex-row gap-7.5">
					{/* form */}
					<div className="lg:h-[54%] lg:w-9/12">
						<form
							className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl w-full"
							onSubmit={handleSubmit}
						>
							<h3 className="text-4xl text-accent">Let's work together</h3>
							<p className="text-white/60"></p>

							{/* input */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<Input type="text" name="name" placeholder="Firstname" required />

								<Input type="email" name="email" placeholder="Email address" required />
							</div>

							{/* select */}
							<Select name="service">
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Select a service" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Select a service</SelectLabel>
										<SelectItem value="Frontend Development">
											Frontend Development
										</SelectItem>
										<SelectItem value="Full stack Development">
											Fullstack Development
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>

							{/* text area */}
							<Textarea
								name="message"
								className="h-[150px]"
								placeholder="Share your thoughts..."
								required
							></Textarea>

							{/* button */}
							<Button
								size="md"
								variant="ghost"
								className="max-w-40 flex gap-2"
								type="submit"
								disabled={loading}
							>
								{loading && <span className="loading loading-dots loading-md"></span>}
								{status}
							</Button>
						</form>
					</div>

					{/* info */}
					<div className="flex items-center lg:justify-center ">
						<ul className="flex flex-col gap-10">
							{info.map((item, index) => {
								return (
									<li key={index} className="flex items-center gap-6">
										<div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
											<div className="text-[28px]">{item.icon}</div>
										</div>
										<div>
											<p className="text-white/60">{item.title}</p>
											<p className="text-xl">{item.description}</p>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Contact;
