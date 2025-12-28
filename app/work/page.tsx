import React from "react";
import WorkCard from "@/components/work/WorkCard";
import { projects } from "@/constants/data";

const Work = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        {projects.length > 0 ? (
          projects.map((project, index) => {
            return <WorkCard key={index} data={project} />;
          })
        ) : (
          <h1 className="text-3xl font-bold text-center text-accent">Coming Soon!</h1>
        )}
      </div>
    </section>
  );
};

export default Work;
