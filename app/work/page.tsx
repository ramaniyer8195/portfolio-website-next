"use client";

import React from "react";
import { motion } from "framer-motion";
import WorkCard from "@/components/work/WorkCard";
import { projects } from "@/constants/data";

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
