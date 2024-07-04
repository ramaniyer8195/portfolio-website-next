import { BlogItem } from "@/interfaces/blog";
import Image from "next/image";

export const BLOGS: BlogItem[] = [
  {
    id: "1",
    img: "/assets/work/thumb1.png",
    title: "Introducing Myself: An Aspiring React Developer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus nec felis egestas ultricies. Vestibulum pellentesque turpis ac iaculis pellentesque.",
    author: "Raman Iyer",
    publishedAt: new Date(2024, 0, 8),
  },
  {
    id: "2",
    img: "/assets/work/thumb1.png",
    title: "Essential Tech for Full-Stack MERN Developers: A Guide",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus nec felis egestas ultricies. Vestibulum pellentesque turpis ac iaculis pellentesque.",
    author: "Raman Iyer",
    publishedAt: new Date(2024, 1, 10),
  },
  {
    id: "3",
    img: "/assets/work/thumb2.png",
    title: "React JS Basics: Everything You Need to Start",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus nec felis egestas ultricies. Vestibulum pellentesque turpis ac iaculis pellentesque.",
    author: "Raman Iyer",
    publishedAt: new Date(2024, 2, 5),
  },
  {
    id: "4",
    img: "/assets/work/thumb2.png",
    title: "Node.js Basics: Introduction to Fundamentals",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus nec felis egestas ultricies. Vestibulum pellentesque turpis ac iaculis pellentesque.",
    author: "Raman Iyer",
    publishedAt: new Date(2024, 3, 19),
  },
  {
    id: "5",
    img: "/assets/work/thumb3.png",
    title: "Express.js Basics: A Beginner's Guide",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus nec felis egestas ultricies. Vestibulum pellentesque turpis ac iaculis pellentesque.",
    author: "Raman Iyer",
    publishedAt: new Date(2024, 4, 2),
  },
  {
    id: "6",
    img: "/assets/work/thumb3.png",
    title: "MongoDB 101: Beginner's Guide to Basics",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus nec felis egestas ultricies. Vestibulum pellentesque turpis ac iaculis pellentesque.",
    author: "Raman Iyer",
    publishedAt: new Date(2022, 5, 7),
  },
];
