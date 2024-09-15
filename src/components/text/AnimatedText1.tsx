"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedText1Props {
	text: string;
	className: string;
}

const AnimatedText1 = ({ text, className }: AnimatedText1Props) => {
	const quoteVariants = {
		animate: {
			opacity: 1,
			transition: {
				delay: 0.5,
				staggerChildren: 0.08,
			},
		},
	};

	const wordVariants = {
		initial: {
			opacity: 0,
			y: 50,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
			},
		},
	};

	const [ref, inView] = useInView({
		triggerOnce: false, // Only trigger the animation once
	});

	return (
		<motion.h3
			className={className}
			variants={quoteVariants}
			initial='initial'
			animate={inView ? "animate" : "initial"} // Trigger animation when in view
			ref={ref}
		>
			{text.split(" ").map((word, index) => (
				<motion.span
					key={`${word}-${index}`}
					className='inline-block'
					variants={wordVariants}
				>
					{word}&nbsp;
				</motion.span>
			))}
		</motion.h3>
	);
};

export default AnimatedText1;
