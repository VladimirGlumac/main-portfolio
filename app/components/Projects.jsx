"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "@/variants";

const projectData = [
  {
    id: 1,
    title: "Rent a car website",
    description: "Next.js, Tailwind, Framer-Motion",
    image: "/projects/project1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/VladimirGlumac/rent-car-website",
    previewUrl: "https://car-land-demo.netlify.app/",
  },
  {
    id: 2,
    title: "Ticket App",
    description: "Next.js, Tailwind, MongoDB",
    image: "/projects/TicketApp1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/VladimirGlumac/Ticket-App",
    previewUrl: "https://ticket-app-demo.netlify.app/",
  },
  {
    id: 3,
    title: "Bakery website",
    description: "React.js, Css, Framer-Motion",
    image: "/projects/project2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/VladimirGlumac/CrustyCreations",
    previewUrl: "https://crusty-creations.netlify.app/",
  },
  {
    id: 4,
    title: "E-commerce Application",
    description: "React.js, Css",
    image: "/projects/project3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/VladimirGlumac/Fotographix",
    previewUrl: "https://fotographix.netlify.app/",
  },
  {
    id: 5,
    title: "Flight Agency",
    description: "React.js, Css, Framer-Motion",
    image: "/projects/project4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/VladimirGlumac/FlightAgency",
    previewUrl: "https://flight-agency-demo.netlify.app/",
  },
  {
    id: 6,
    title: "Cinema APP",
    description: "React Native, TMDb API",
    image: "/projects/project5.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/VladimirGlumac/MovieTicketApp",
    previewUrl: "#projects",
  },
  {
    id: 7,
    title: "Automobile Dealership App",
    description: "React Native",
    image: "/projects/project6.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/VladimirGlumac/AutoBestieApp",
    previewUrl: "#projects",
  },
];

function Projects() {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProject = projectData.filter((project) => {
    return project.tag.includes(tag);
  });

  return (
    <section id="projects" className="py-24">
      <motion.h2
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="text-4xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-200 to-amber-600"
      >
        My Projects
      </motion.h2>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="text-white flex flex-row justify-center items-center gap-2 py-6"
      >
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag == "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag == "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag == "Mobile"}
        />
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
      >
        {filteredProject.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
