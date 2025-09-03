"use client";
import { motion } from "framer-motion";

export const MotionSection = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0, x: -100 }} // start hidden & left
			whileInView={{ opacity: 1, x: 0 }} // animate into view
			viewport={{ once: false, amount: 0.2 }} // trigger only once when 20% visible
			transition={{ duration: 0.8, ease: "easeOut" }}
		>
			{children}
		</motion.div>
	);
};
