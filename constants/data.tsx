import { BlogItem } from "@/interfaces/blog";
import { About, Education, Experience, Skills } from "@/interfaces/resume";
import {
  FaCss3,
  FaEnvelope,
  FaFacebookF,
  FaGitAlt,
  FaGithub,
  FaHackerNews,
  FaHtml5,
  FaInstagram,
  FaJs,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaNodeJs,
  FaPhoneAlt,
  FaReact,
  FaRedditAlien,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  SiGithubactions,
  SiGraphql,
  SiJest,
  SiMui,
  SiNextdotjs,
  SiPlaywright,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const DUMMY_BLOG = `# Heading 1

## Heading 2

### Heading 3

**Lorem** *ipsum* <s>dolor</s> <mark>sit amet</mark>, \`consectetur adipiscing\` elit. Quisque et eros a sem commodo fermentum id ut nunc. Etiam iaculis vehicula rutrum. Donec iaculis elit sed libero vestibulum, at aliquet orci facilisis. Proin quis sapien ipsum. Nunc vulputate lacus augue, et vestibulum ante pulvinar sed. Pellentesque et facilisis libero. Nunc tincidunt, nulla ut pellentesque accumsan, sapien tortor elementum leo, in gravida libero lacus nec turpis. Morbi volutpat dui magna, vel fermentum lacus euismod ac. In condimentum elementum nibh, sed tempus sem lacinia sit amet. Aliquam erat volutpat.

* Bullet point 1
    
* Bullet point 2
    
* Bullet point 3
    

1. Numbered List 1
    
2. Numbered List 2
    
3. Numbered List 3
    

---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et eros a sem commodo fermentum id ut nunc. [Etiam iaculis](https://www.google.com) vehicula rutrum. Donec iaculis elit sed libero vestibulum, at aliquet orci facilisis. Proin quis sapien ipsum. Nunc vulputate lacus augue, et vestibulum ante pulvinar sed. Pellentesque et facilisis libero. Nunc tincidunt, nulla ut pellentesque accumsan, sapien tortor elementum leo, in gravida libero lacus nec turpis. Morbi volutpat dui magna, vel fermentum lacus euismod ac. In condimentum elementum nibh, sed tempus sem lacinia sit amet. Aliquam erat volutpat.

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et eros a sem commodo fermentum id ut nunc. Etiam iaculis vehicula rutrum. Donec iaculis elit sed libero vestibulum, at aliquet orci facilisis. Proin quis sapien ipsum. Nunc vulputate lacus augue, et vestibulum ante pulvinar sed. Pellentesque et facilisis libero. Nunc tincidunt, nulla ut pellentesque accumsan, sapien tortor elementum leo, in gravida libero lacus nec turpis. Morbi volutpat dui magna, vel fermentum lacus euismod ac. In condimentum elementum nibh, sed tempus sem lacinia sit amet. Aliquam erat volutpat.

<details data-node-type="hn-details-summary"><summary>This is a detail summary block</summary><div data-type="detailsContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et eros a sem commodo fermentum id ut nunc. Etiam iaculis vehicula rutrum. Donec iaculis elit sed libero vestibulum, at aliquet orci facilisis. Proin quis sapien ipsum. Nunc vulputate lacus augue, et vestibulum ante pulvinar sed. Pellentesque et facilisis libero. Nunc tincidunt, nulla ut pellentesque accumsan, sapien tortor elementum leo, in gravida libero lacus nec turpis. Morbi volutpat dui magna, vel fermentum lacus euismod ac. In condimentum elementum nibh, sed tempus sem lacinia sit amet. Aliquam erat volutpat.</div></details><div data-node-type="callout">
<div data-node-type="callout-emoji">💡</div>
<div data-node-type="callout-text">Hints and callouts are added this way!</div>
</div>

| Table Header 1 | Table Header 2 | Table Header 3 |
| --- | --- | --- |
| Cell 1 | Cell 2 | Cell 3 |
| Cell 4 | Cell 5 | Cell 6 |

![This is a pikachu](https://cdn.hashnode.com/res/hashnode/image/upload/v1720198172298/5f2576a3-340d-4f41-a926-c308560960b8.png align="center")

\`\`\`javascript
var a = 15;
var b = 20;
sum();

function sum(a, b) {
    return a + b;
}
\`\`\``;

export const BLOGS: BlogItem[] = [
  {
    id: "1",
    img: "/assets/work/thumb1.png",
    title: "Introducing Myself: An Aspiring React Developer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus nec felis egestas ultricies. Vestibulum pellentesque turpis ac iaculis pellentesque.",
    author: "Raman Iyer",
    publishedAt: new Date(2024, 0, 8),
    content: DUMMY_BLOG,
  },
  {
    id: "2",
    img: "/assets/work/thumb1.png",
    title: "Essential Tech for Full-Stack MERN Developers: A Guide",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus nec felis egestas ultricies. Vestibulum pellentesque turpis ac iaculis pellentesque.",
    author: "Raman Iyer",
    publishedAt: new Date(2024, 1, 10),
    content: DUMMY_BLOG,
  },
  {
    id: "3",
    img: "/assets/work/thumb2.png",
    title: "React JS Basics: Everything You Need to Start",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus nec felis egestas ultricies. Vestibulum pellentesque turpis ac iaculis pellentesque.",
    author: "Raman Iyer",
    publishedAt: new Date(2024, 2, 5),
    content: DUMMY_BLOG,
  },
  {
    id: "4",
    img: "/assets/work/thumb2.png",
    title: "Node.js Basics: Introduction to Fundamentals",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus nec felis egestas ultricies. Vestibulum pellentesque turpis ac iaculis pellentesque.",
    author: "Raman Iyer",
    publishedAt: new Date(2024, 3, 19),
    content: DUMMY_BLOG,
  },
  {
    id: "5",
    img: "/assets/work/thumb3.png",
    title: "Express.js Basics: A Beginner's Guide",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus nec felis egestas ultricies. Vestibulum pellentesque turpis ac iaculis pellentesque.",
    author: "Raman Iyer",
    publishedAt: new Date(2024, 4, 2),
    content: DUMMY_BLOG,
  },
  {
    id: "6",
    img: "/assets/work/thumb3.png",
    title: "MongoDB 101: Beginner's Guide to Basics",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus nec felis egestas ultricies. Vestibulum pellentesque turpis ac iaculis pellentesque.",
    author: "Raman Iyer",
    publishedAt: new Date(2022, 5, 7),
    content: DUMMY_BLOG,
  },
];

export const about: About = {
  title: "About me",
  description:
    "I am a versatile Full Stack Developer specializing in the MERN stack, building efficient, scalable web applications.",
  info: [
    { fieldName: "Name", fieldValue: "Raman Iyer" },
    { fieldName: "Phone", fieldValue: "+919819289445" },
    { fieldName: "Experience", fieldValue: "8+ Years" },
    { fieldName: "Skype", fieldValue: "live:raman0801_1" },
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Email", fieldValue: "ramaniyer8195@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Hindi" },
  ],
};

export const experience: Experience = {
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

export const education: Education = {
  title: "My education",
  description:
    "Explore my educational background and qualifications that underpin my career in web development.",
  items: [
    {
      instituion: "IIT Kanpur",
      degree: "Professional Certification in AIML",
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

export const skills: Skills = {
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

export const projects = [
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

export const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+919819289445",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ramaniyer8195@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Mumbai, India",
  },
];

export const socials = [
  {
    tooltip: "Github",
    icon: <FaGithub />,
    path: "https://github.com/ramaniyer8195",
  },
  {
    tooltip: "LinkedIn",
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/raman-iyer/",
  },
  {
    tooltip: "Twitter",
    icon: <FaXTwitter />,
    path: "https://x.com/RamanIyer8195",
  },
  {
    tooltip: "Facebook",
    icon: <FaFacebookF />,
    path: "https://www.facebook.com/code.with.raman/",
  },
  {
    tooltip: "Instagram",
    icon: <FaInstagram />,
    path: "https://www.instagram.com/raman_0801/",
  },
  {
    tooltip: "Whatsapp",
    icon: <FaWhatsapp />,
    path: "https://wa.me/919819289445",
  },
];

export const shareSocials = [
  {
    tooltip: "LinkedIn",
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/shareArticle?url=",
  },
  {
    tooltip: "Twitter",
    icon: <FaXTwitter />,
    path: "https://twitter.com/intent/post?url=",
  },
  {
    tooltip: "Facebook",
    icon: <FaFacebookF />,
    path: "https://www.facebook.com/sharer/sharer.php?u=",
  },
  {
    tooltip: "Reddit",
    icon: <FaRedditAlien />,
    path: "https://reddit.com/submit?url=",
  },
  {
    tooltip: "Whatsapp",
    icon: <FaWhatsapp />,
    path: "https://wa.me/?text=",
  },
  {
    tooltip: "Hacker News",
    icon: <FaHackerNews />,
    path: "https://news.ycombinator.com/submitlink?u=",
  },
];

export const stats = [
  {
    num: 8,
    text: "Years of experience",
  },
  {
    num: 10,
    text: "Completed projects",
  },
  {
    num: 15,
    text: "Technologies mastered",
  },
  {
    num: 5,
    text: "Blogs written",
  },
];

export const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "blog",
    path: "/blog",
  },
  {
    name: "contact",
    path: "/contact",
  },
];
