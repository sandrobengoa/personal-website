import React from "react";
import { motion } from "framer-motion";
import { BsCircle, BsCircleFill } from "react-icons/bs";

type Props = {
  levelOverTen: number;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
};

export default function LanguageLevel({ levelOverTen }: Props) {
  const numberOfEmptySquares = 10 - levelOverTen;

  return (
    <div className="flex gap-1 text-sm text-gray-700 dark:text-gray-400">
      {createArrayFromN(levelOverTen).map((l, i) => (
        <motion.span
          key={i}
          variants={fadeInAnimationVariants}
          initial="initial"
          animate="animate"
          viewport={{
            once: true,
          }}
          custom={i}
        >
          <BsCircleFill />
        </motion.span>
      ))}

      {createArrayFromN(numberOfEmptySquares).map((l, i) => (
        <motion.span
          key={i}
          variants={fadeInAnimationVariants}
          initial="initial"
          animate="animate"
          viewport={{
            once: true,
          }}
          custom={i}
        >
          <BsCircle />
        </motion.span>
      ))}
    </div>
  );
}

const createArrayFromN = (n: number) => {
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(i);
  }
  return array;
};
