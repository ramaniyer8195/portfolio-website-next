"use client";

import { WorkCardImageData } from "@/interfaces/work";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const WorkCardImage = ({ data }: { data: WorkCardImageData }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="w-full xl:w-[50%]"
    >
      <div className="xl:h-[520px] mb-12">
        <div className="w-full">
          <div className="h-[460px] relative group justify-center items-center bg-pink-50/20">
            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
            <div className="relative w-full h-full">
              <Image
                src={data.src}
                alt={data.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCardImage;
