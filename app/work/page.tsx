"use client";

import React from "react";
import { motion } from "framer-motion";
import WorkCard from "@/components/work/WorkCard";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at efficitur tortor.",
    stack: ["Html 5", "Css 3", "Javascript"],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
    blog: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at efficitur tortor.",
    stack: ["Next.js", "Tailwind.css", "Node.js"],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
    blog: "",
  },
  {
    num: "03",
    category: "backend",
    title: "project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at efficitur tortor.",
    stack: ["Express.js", "MongoDB", "Node.js"],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
    blog: "",
  },
];

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        {projects.map((project, index) => {
          return <WorkCard key={index} data={project} />;
        })}
      </div>
    </motion.section>
  );
};

export default Work;
