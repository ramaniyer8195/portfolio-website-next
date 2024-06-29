"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiGraphql,
  SiTailwindcss,
  SiGithubactions,
  SiMui,
  SiJest,
  SiPlaywright,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import ProfileDetails from "@/components/resume/ProfileDetails";
import { About, Education, Experience, Skills } from "@/interfaces/resume";
import SkillDetails from "@/components/resume/SkillDetails";
import AboutMe from "@/components/resume/AboutMe";

const about: About = {
  title: "About me",
  description:
    "I am a versatile Full Stack Developer specializing in the MERN stack, building efficient, scalable web applications.",
  info: [
    { fieldName: "Name", fieldValue: "Raman Iyer" },
    { fieldName: "Phone", fieldValue: "+919819289445" },
    { fieldName: "Experience", fieldValue: "8+ Years" },
    { fieldName: "Skype", fieldValue: "raman.0801" },
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Email", fieldValue: "ramaniyer8195@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Hindi" },
  ],
};

const experience: Experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Explore my 8+ years of experience delivering high-quality, scalable web applications across diverse roles.",
  items: [
    {
      company: "Deuex Solutions",
      position: "Senior Software Developer",
      duration: "2020 - Present",
    },
    {
      company: "Avendata Technologies",
      position: "Full Stack Developer",
      duration: "2018 - 2020",
    },
    {
      company: "Zeus Learning",
      position: "Software Developer",
      duration: "2016 - 2018",
    },
    {
      company: "Ayravat Software",
      position: "Intern",
      duration: "2016",
    },
  ],
};

const education: Education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Explore my educational background and qualifications that underpin my career in web development.",
  items: [
    {
      instituion: "IIT Kanpur",
      degree: "Certification course in AIML",
      duration: "2023 - 2024",
    },
    {
      instituion: "Mumbai University",
      degree: "Bachelor of Engineering IT",
      duration: "2012 - 2016",
    },
    {
      instituion: "Maharashtra State Board",
      degree: "Higher Secondary Certificate",
      duration: "2012",
    },
    {
      instituion: "Maharashtra State Board",
      degree: "Secondary School Certificate",
      duration: "2010",
    },
  ],
};

const skills: Skills = {
  title: "My skills",
  description:
    "Discover my technical expertise and skills that drive successful web development projects.",
  skillList: [
    {
      name: "html 5",
      icon: <FaHtml5 />,
    },
    {
      name: "css 3",
      icon: <FaCss3 />,
    },
    {
      name: "javascript",
      icon: <FaJs />,
    },
    {
      name: "react.js",
      icon: <FaReact />,
    },
    {
      name: "redux",
      icon: <SiRedux />,
    },
    {
      name: "typescript",
      icon: <SiTypescript />,
    },
    {
      name: "tailwind",
      icon: <SiTailwindcss />,
    },
    {
      name: "next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "graphql",
      icon: <SiGraphql />,
    },
    {
      name: "git",
      icon: <FaGitAlt />,
    },
    {
      name: "github actions",
      icon: <SiGithubactions />,
    },
    {
      name: "material ui",
      icon: <SiMui />,
    },
    {
      name: "jest",
      icon: <SiJest />,
    },
    {
      name: "playwright",
      icon: <SiPlaywright />,
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <ProfileDetails data={experience} />
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <ProfileDetails data={education} />
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <SkillDetails data={skills} />
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <AboutMe data={about} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
