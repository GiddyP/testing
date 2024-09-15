'use client'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TextVariationProps {
  variations: {
    firstWord: string;
    secondWord: string;
    color1: string;
    color2: string;
  }[];
}

const TextVariation: React.FC<TextVariationProps> = ({ variations }) => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % variations.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [variations]);

  const currentVariation = variations[textIndex];

  return (
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='font-bold text-2xl xs:text-3xl sm:text-5xl slg:text-7xl leading-[1.8] md:leading-[100px] xs:mb-2 md:mb-8 text-center slg:text-start'
    >
      <span style={{ color: currentVariation.color1 }}>
        {currentVariation.firstWord}
      </span>{" "}
      <span style={{ color: currentVariation.color2 }}>
        {currentVariation.secondWord}
      </span>
    </motion.h2>
  );
};

export default TextVariation;