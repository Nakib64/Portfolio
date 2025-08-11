"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
	return (
		<div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] mx-auto">
			{/* Animated Image */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { delay: 2, duration: 0.4, ease: "easeIn" },
				}}
				className="absolute top-1/2 left-1/2 w-[200px] h-[200px] md:w-[350px] md:h-[350px] -translate-x-1/2 -translate-y-1/2 mix-blend-lighten"
			>
				<Image
					src={"/photo.png"}
					priority
					quality={100}
					fill
					alt=""
					className="object-contain rounded-full"
				/>
			</motion.div>

			{/* Rotating Circle */}
			<motion.svg
				className="w-full h-full absolute top-0 left-0"
				fill="transparent"
				viewBox="0 0 500 500"
				xmlns="http://www.w3.org/2000/svg"
			>
				<motion.g
					initial={{ rotate: 0 }}
					animate={{ rotate: 360 }}
					transition={{
						repeat: Infinity,
						duration: 20,
						ease: "linear",
					}}
					transformOrigin="center"
				>
					<motion.circle
						cx="253"
						cy="253"
						r="200"
						stroke="#00ff99"
						strokeWidth="4"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeDasharray="15 100  100"
					/>
				</motion.g>
			</motion.svg>
		</div>
	);
};

export default Photo;
