"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="max-w-[60rem] text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p>
        Hi there! I'm <b>Sandro Bengoa</b> 🙋‍♂️, a 4th year{" "}
        <b>Mechanical Engineering</b> student from <b>Lima, Peru</b> 🇵🇪 .
        Alongside my major, I'm also diving into a{" "}
        <b>Computing and People minor</b>. What ignites my passion? Making
        things not only look appealing 🎨 but also ensuring they are intuitive
        for the user.
      </p>
      <p>
        When I'm not engrossed in my studies or work, you can find me strumming
        my guitar 🎸 or creating some melodic tunes. For a good dose of
        adrenaline, I hit the courts for a game of tennis 🎾 or join friends for
        a round of soccer ⚽.
      </p>
      <p>
        Professionally, I wear the hat of an <b>Associate Software Engineer</b>{" "}
        at <b>Vertice AI</b> 💻. My journey also includes stints in{" "}
        <b>Management Consulting</b> and <b>Construction Development</b> 🏗️,
        adding diverse experiences to my portfolio.
      </p>
    </motion.section>
  );
}
