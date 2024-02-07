"use client";
import Link from "next/link";
import React from "react";
import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "@/variants";
function HeroSection() {
  return (
    <section
      id="home"
      className="w-full h-screen text-center flex items-center justify-center"
    >
      <div className="">
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="uppercase text-sm tracking-widest text-gray-200"
        >
          LET&#39;S BUILD SOMETHING TOGETHER
        </motion.p>
        <motion.h1
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="py-4 text-gray-200 text-3xl"
        >
          Hi, I&#39;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-amber-600">
            {" "}
            Vladimir
          </span>
        </motion.h1>
        <motion.h1
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="py-2 text-gray-200"
        >
          A Front-End Web Developer
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="py-4 text-gray-200 sm:max-w-[70%] m-auto text-lg"
        >
          I&#39;m focused on building responsive front-end web applications
          integrating back-end technologies.
        </motion.p>
        <motion.div
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex py-10 flex-row justify-evenly items-center gap-4"
        >
          <Link
            href="#contact"
            className="relative px-6 py-3 font-bold text-white hover:text-[#1c1c1c] group xl:w-[30%]"
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-orange-500 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-slate-700 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
            <span className="relative">Hire Me</span>
          </Link>
          <a
            href="/VladimirGlumac-CV.docx"
            download
            className="relative px-6 py-3 font-bold text-white hover:text-[#1c1c1c] group xl:w-[30%]"
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-orange-500 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-slate-700 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
            <span className="relative">Download CV</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
