"use client";
import React from "react";
import { motion } from "framer-motion";

interface AnimatedText2Props {
	text: string;
	className: string;
}
const AnimatedText2 = ({ text, className }: AnimatedText2Props) => {
	return (
		<motion.h3
			initial={{ y: -50, opacity: 0 }}
			whileInView={{
				y: 0,
				transition: { duration: 1, ease: "easeOut", delay: 0.1 },
				opacity: 1,
			}}
			className={`${className}`}
		>
			{text}
		</motion.h3>
	);
};

export default AnimatedText2;
