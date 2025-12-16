"use client";
import { motion } from "framer-motion";

export const MotionSection = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }} // start hidden & down
			whileInView={{ opacity: 1, y: 0 }} // animate into view
			viewport={{ once: true, amount: 0.1 }} // trigger once
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			{children}
		</motion.div>
	);
};
