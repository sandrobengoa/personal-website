"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useState, useEffect } from "react";
export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const [showSpanish, setShowSpanish] = useState(true);

  useEffect(() => {
    if (showSpanish) {
      const timeout = setTimeout(() => {
        setShowSpanish(false);
      }, 4000); // 4 seconds delay, adjust as needed

      return () => clearTimeout(timeout);
    }
  }, [showSpanish]);
  return (
    <section
      ref={ref}
      id="home"
      className="max-x-[50rem] text-center scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/foto_sandro.jpeg"
              alt="Sandro Bengoa"
              width="500"
              height="500"
              quality="95"
              priority={true}
              className="h-32 w-32 rounded-[10px] object-cover border-[0.3rem] border-gray-700 shadow-xl"
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={showSpanish ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="mb-10 mt-10 px-4 text-6xl sm:text-7xl"
      >
        Bienvenidos a mi pagina web
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={!showSpanish ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="mb-10 mt-10 px-4 text-6xl sm:text-7xl"
      >
        Welcome to my website
      </motion.div>
      <motion.div
        className="flex flex-col sm:flex-row
      items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none"
          onClick={() => {
            {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }
          }}
        >
          Contact me here {""}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 "
          href="/resume.pdf"
          target="_blank"
          download
          rel="noopener"
        >
          Download CV {""}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full transition active:scale-105 borderBlack dark:bg-white/10 dark:text-white/80 focus:scale-[1.15] hover:scale-[1.15] "
          href="https://www.linkedin.com/in/sandro-bengoa/"
          target="_blank"
          rel="noopener"
          aria-label="Open Linkedin profile"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full transition active:scale-105 borderBlack dark:bg-white/10 dark:text-white/80 focus:scale-[1.15] hover:scale-[1.15] "
          href="https://github.com/sandrobengoa"
          target="_blank"
          rel="noopener"
          aria-label="Open Github profile"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
