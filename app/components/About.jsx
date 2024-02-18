"use client";
import Reactm, { useState, useTransition } from "react";
import Image from "next/image";
import TabButtons from "./TabButtons";
import { FaGithub, FaHtml5, FaCss3Alt, FaReact, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si";

import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "@/variants";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid text-sm grid-cols-2 md:grid-cols-2 gap-3 xl:grid-cols-3">
        <li className="skills-tabs">
          <FaHtml5 color="white" size={40} />
          <p className="text-white font-semibold">HTML</p>
        </li>

        <li className="skills-tabs">
          <FaCss3Alt color="white" size={40} />
          <p className="text-white font-semibold text-[12px] md:text-sm">CSS</p>
        </li>
        <li className="skills-tabs">
          <IoLogoJavascript color="white" size={40} />
          <p className="text-white font-semibold text-[12px] md:text-sm">
            JavaScript
          </p>
        </li>
        <li className="skills-tabs">
          <FaReact color="white" size={40} />
          <p className="text-white font-semibold text-[12px] md:text-sm">
            React
          </p>
        </li>
        <li className="skills-tabs">
          <SiNextdotjs color="white" size={40} />
          <p className="text-white font-semibold text-[12px] md:text-sm">
            Next.js
          </p>
        </li>
        <li className="skills-tabs">
          <SiTailwindcss color="white" size={40} />
          <p className="text-white font-semibold text-[12px] md:text-sm">
            Tailwind
          </p>
        </li>
        <li className="skills-tabs">
          <SiMongodb color="white" size={40} />
          <p className="text-white font-semibold text-[12px] md:text-sm">
            Mongo DB
          </p>
        </li>
        <li className="skills-tabs">
          <FaGithub color="white" size={40} />

          <p className="text-white font-semibold text-[12px] md:text-sm">
            GitHub
          </p>
        </li>
        <li className="skills-tabs">
          <FaFigma color="white" size={40} />
          <p className="text-white font-semibold text-[12px] md:text-sm">
            Figma
          </p>
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Frontend developer academy at Scrimba</li>
        <li>FTN engineer of energy technologies (still enrolled)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Frontend developer academy at Scrimba</li>
      </ul>
    ),
  },
];

function About() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="pt-10">
      <div className="text-white xl:grid xl:grid-cols-2 gap-8  py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full flex flex-1 justify-center items-center xl:items-start"
        >
          <Image
            src="/aboutImg.jpg"
            width={500}
            height={500}
            alt="Software developer writing code"
          />
        </motion.div>
        <div className="mt-4 md:mt-0 text-left flex gap-4 flex-col h-full">
          <motion.h2
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="text-4xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-200 to-amber-600"
          >
            About Me
          </motion.h2>

          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="text-base md:text-lg"
          >
            I&#39;m a front-end developer with a coding journey spanning 1.5
            years. Currently navigating the world of back-end technologies,
            I&#39;m also in the final stretch of my college journey at FTN,
            diligently tackling a few remaining exams.As an engineer of energy
            technologies, I bring a unique perspective to my coding endeavors.
          </motion.p>
          <motion.p
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="text-base md:text-lg"
          >
            Throughout my coding journey, I&#39;ve gained hands-on experience in
            building with HTML, CSS, JavaScript, React, Next.js, RESTful API, MongoDB and
            Tailwind CSS. Passionate about crafting seamless user experiences,
            I&#39;ve contributed to a variety of projects showcasing creativity
            and problem-solving skills.
          </motion.p>
          <motion.div
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-row mt-8"
          >
            <TabButtons
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButtons>
            <TabButtons
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButtons>
            <TabButtons
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButtons>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="mt-8"
          >
            {TAB_DATA.find((t) => t.id === tab).content}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
