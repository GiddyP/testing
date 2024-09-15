"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedText3Props {
	text: string;
	className: string;
}

const AnimatedText3 = ({ text, className }: AnimatedText3Props) => {
	const charVariants = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 0.9,
				delay: 0.3,
			},
		},
	};

	const [ref, inView] = useInView({
		triggerOnce: false, // Only trigger the animation once
	});

	return (
		<motion.h3 title={text} className={className} ref={ref}>
			{text.split(" ").map((word, wordIndex) => (
				<span key={`${word}-${wordIndex}`}>
					{word.split("").map((char, charIndex) => (
						<motion.span
							key={`${char}-${charIndex}`}
							className='inline-block'
							variants={charVariants}
							initial='initial'
							animate={inView ? "animate" : "initial"} // Trigger animation when in view
							transition={{
								delay: Number((charIndex + 1) % 2 === 0), // Only animate even-numbered characters
								duration: 0.9,
							}}
						>
							{char}
						</motion.span>
					))}
					&nbsp;
				</span>
			))}
		</motion.h3>
	);
};

export default AnimatedText3;
