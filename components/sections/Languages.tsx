"use client";

import React from "react";
import SectionHeading from "../SectionHeading";
import { motion } from "framer-motion";
import { languagesData } from "@/lib/data";
import Image from "next/image";
import LanguageLevel from "../LanguageLevel";
import { useSectionInView } from "@/lib/hooks";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
};

export default function Languages() {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      id="languages"
      ref={ref}
      className="max-w-[53rem] scroll-mt-28 text-center"
    >
      <SectionHeading> Languages</SectionHeading>
      <motion.ul
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="flex flex-wrap justify-center gap-2 text-gray-800"
      >
        {languagesData.map((language, index) => (
          <li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
          >
            <div className="flex gap-1 items-center mb-1">
              <Image
                src={language.flagImage}
                alt={language.name}
                width={25}
                height={25}
              ></Image>
              <div className="text-lg mr-2 ml-2">{language.name}</div>
              <LanguageLevel levelOverTen={language.level} />
            </div>
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
