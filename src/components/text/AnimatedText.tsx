"use client";
import { motion } from "framer-motion";

const quote = {
	initial: {
		opacity: 1,
	},
	animate: {
		opacity: 1,
		transition: {
			delay: 0.5,
			staggerChildren: 0.08,
		},
	},
};

const singleWord = {
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

interface Props {
	text: string;
	className?: string;
}

const AnimatedText = ({ text, className }: Props) => {
	return (
		<motion.h2
			className={`${className}`}
			variants={quote}
			initial='initial'
			animate='animate'
			whileInView={{ y: 0, transition: { duration: 0.2, ease: "linear" } }}
		>
			{text.split(" ").map((word, index) => (
				<motion.span
					key={word + "-" + index}
					className='inline-block'
					variants={singleWord}
				>
					{word}&nbsp;
				</motion.span>
			))}
		</motion.h2>
	);
};

export default AnimatedText;
