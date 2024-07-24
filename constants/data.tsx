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

export const DUMMY_BLOG = `## **Introduction**

As a JavaScript developer, you might have heard about TypeScript and wondered what all the fuss is about. Why are so many developers and companies turning to TypeScript? In this article, we'll dive into TypeScript, exploring its features, benefits, and how you can get started with it. Whether you're new to TypeScript or looking to deepen your understanding, this guide will provide valuable insights to help you on your journey.

## **Understanding TypeScript**

### **What is TypeScript?**

TypeScript is an open-source programming language developed by Microsoft. It builds on JavaScript by adding static types, which can help developers catch errors early and improve the readability and maintainability of their code.

### **Brief History**

TypeScript was first released in 2012, with the goal of addressing some of the limitations of JavaScript, particularly for large-scale applications. It has since grown in popularity, thanks to its robust feature set and strong community support.

### **Key Features**

TypeScript introduces several key features that enhance JavaScript development, including static typing, interfaces, classes, and decorators. These features allow for more predictable and manageable code.

## **Why JavaScript Developers Should Learn TypeScript**

### **Enhanced Code Quality**

One of the main reasons JavaScript developers should consider learning TypeScript is the potential for enhanced code quality.

### **Static Typing**

Static typing is a powerful feature that can help you catch errors at compile time rather than at runtime. This means you can identify and fix issues before your code even runs, leading to fewer bugs and more reliable software.

### **Better Tooling**

TypeScript's static typing also enables better tooling support. Many modern IDEs and code editors can provide more accurate autocompletion, refactoring tools, and inline documentation, making your development experience smoother and more efficient.

### **Improved Developer Experience**

Beyond code quality, TypeScript can also significantly improve the overall developer experience.

### **Enhanced IDE Support**

IDEs like Visual Studio Code offer robust TypeScript support, providing features like intelligent code completion, error checking, and integrated debugging. This can make writing and maintaining TypeScript code a breeze.

### **Easier Refactoring**

Refactoring is an essential part of software development, and TypeScript makes it easier by providing clear, static types that can guide you through changes and ensure you don't accidentally break your code.

## **Getting Started with TypeScript**

### **Setting Up TypeScript**

Getting started with TypeScript is straightforward. Here's how you can set up your development environment.

### **Installing TypeScript**

First, you'll need to install TypeScript. You can do this using npm, the Node.js package manager, by running the following command:

\`\`\`bash
npm install -g typescript
\`\`\`

### **Configuring tsconfig.json**

Once installed, you should set up a \`tsconfig.json\` file in your project root. This file configures the TypeScript compiler options and specifies which files to include in the compilation. Here's a basic example:

\`\`\`json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true
  },
  "include": ["src/**/*"]
}
\`\`\`

### **Basic Syntax and Types**

Now that TypeScript is set up, let's dive into its basic syntax and types.

### **Primitive Types**

TypeScript supports all the basic types you're familiar with in JavaScript, such as \`string\`, \`number\`, \`boolean\`, and \`array\`. You can declare variables with specific types like this:

\`\`\`typescript
let name: string = "John";
let age: number = 30;
let isDeveloper: boolean = true;
\`\`\`

### **Interfaces and Types**

Interfaces and types in TypeScript allow you to define the shape of objects and enforce consistent structures across your codebase. Here's an example of an interface:

\`\`\`typescript
interface Person {
  name: string;
  age: number;
  isDeveloper?: boolean; // optional property
}
\`\`\`

### **Classes and Inheritance**

TypeScript also brings modern object-oriented features to JavaScript, including classes and inheritance. Here's a simple example:

\`\`\`typescript
class Developer {
  name: string;
  language: string;

  constructor(name: string, language: string) {
    this.name = name;
    this.language = language;
  }

  code() {
    console.log(\`\${this.name} is coding in \${this.language}\`);
  }
}

const dev = new Developer("Jane", "TypeScript");
dev.code(); // Jane is coding in TypeScript
\`\`\`

## **Advanced TypeScript Features**

### **Generics**

Generics allow you to create reusable components that work with any data type. They provide a way to create a component that can operate on a variety of types while still maintaining type safety.

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("Hello");
\`\`\`

### **Decorators**

Decorators are a powerful feature that enables you to modify classes and methods at design time. They are commonly used in frameworks like Angular for dependency injection and metadata programming.

\`\`\`typescript
function Log(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(\`Calling \${propertyName} with \`, args);
    return method.apply(this, args);
  };
}

class Calculator {
  @Log
  add(a: number, b: number): number {
    return a + b;
  }
}
\`\`\`

### **Type Guards and Type Assertions**

Type guards and type assertions allow you to specify the type of a variable within a conditional block. This can be particularly useful when dealing with union types.

\`\`\`typescript
function isString(x: any): x is string {
  return typeof x === "string";
}

function example(value: string | number) {
  if (isString(value)) {
    console.log(\`String: \${value.toUpperCase()}\`);
  } else {
    console.log(\`Number: \${value.toFixed(2)}\`);
  }
}
\`\`\`

## **Integrating TypeScript with JavaScript Projects**

### **Migration Strategies**

When integrating TypeScript into an existing JavaScript project, you have two main strategies: gradual migration and full rewrite.

### **Gradual Migration**

In a gradual migration, you convert one file at a time, starting with the most critical parts of your codebase. This approach minimizes disruption and allows you to learn TypeScript incrementally.

### **Full Rewrite**

A full rewrite involves converting your entire codebase to TypeScript in one go. While this approach can be more disruptive, it can also be faster in the long run if you have a small codebase or dedicated resources for the transition.

### **Using TypeScript with React**

TypeScript integrates seamlessly with React, offering strong typing for components and props.

### **TypeScript with Create React App**

Create React App (CRA) provides built-in TypeScript support. You can create a new TypeScript project with CRA by running:

\`\`\`bash
npx create-react-app my-app --template typescript
\`\`\`

### **Typing React Components**

Here's an example of typing a React component with TypeScript:

\`\`\`typescript
import React from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default Greeting;
\`\`\`

## **Common Challenges and Solutions**

### **Dealing with Third-Party Libraries**

One challenge when using TypeScript is dealing with third-party libraries that don't have type definitions. Fortunately, the DefinitelyTyped project provides type definitions for many popular libraries.

\`\`\`bash
npm install @types/lodash
\`\`\`

### **Managing Legacy Code**

Managing legacy code can be challenging, especially when integrating TypeScript into an existing project. One strategy is to use the \`any\` type temporarily and gradually replace it with more specific types as you refactor the code.

## **Best Practices for TypeScript Development**

### **Organizing Your Code**

Organizing your TypeScript code effectively can improve readability and maintainability. Group related files and use clear, descriptive names for your types and interfaces.

### **Writing Reusable Types**

Creating reusable types can save time and reduce errors. Use interfaces and type aliases to define common shapes and structures.

\`\`\`typescript
type ID = string | number;

interface User {
  id: ID;
  name: string;
}
\`\`\`

### **Leveraging TypeScript Utility Types**

TypeScript provides several utility types that can help you write cleaner, more concise code. These include \`Partial\`, \`Pick\`, and \`Omit\`.

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type UserPreview = Pick<User, 'id' | 'name'>;
\`\`\`

## **Tools and Resources for Learning TypeScript**

### **Essential Tools**

Several tools can enhance your TypeScript development experience.

### **Linters and Formatters**

Using a linter like ESLint and a formatter like Prettier can help ensure your code follows best practices and remains consistent.

### **Debugging Tools**

Debugging TypeScript can be done using the built-in capabilities of modern IDEs, as well as browser developer tools.

### **Recommended Resources**

There are many excellent resources available for learning TypeScript.

### **Books**

* "Programming TypeScript" by Boris Cherny
    
* "TypeScript Quickly" by Yakov Fain and Anton Moiseev
    

### **Online Courses and Tutorials**

* TypeScript documentation
    
* TypeScript courses on platforms like Udemy, Pluralsight, and Coursera
    

## **Conclusion**

In conclusion, TypeScript offers a powerful set of tools and features that can greatly enhance the development experience for JavaScript developers. By adopting TypeScript, you can improve code quality, boost productivity, and create more maintainable applications. Whether you're working on a small project or a large-scale application, TypeScript is worth considering.

## **FAQs**

### **Is TypeScript hard to learn for JavaScript developers?**

No, TypeScript is designed to be a superset of JavaScript, meaning any valid JavaScript code is also valid TypeScript code. The learning curve is manageable, especially with the wealth of resources available.

### **Can I use TypeScript with Node.js?**

Yes, TypeScript works well with Node.js. You can write your server-side code in TypeScript and use the TypeScript compiler to generate JavaScript code that Node.js can run.

### **What are the main benefits of using TypeScript?**

The main benefits of using TypeScript include improved code quality through static typing, enhanced developer experience with better tooling support, and easier refactoring and maintenance of codebases.

### **Are there any downsides to using TypeScript?**

The main downside is the initial learning curve and the added complexity of setting up TypeScript in existing projects. However, the long-term benefits often outweigh these initial challenges.

### **How can I start learning TypeScript?**

You can start learning TypeScript by reading the official TypeScript documentation, taking online courses, and practicing by converting small JavaScript projects to TypeScript.

## **TL;DR**

TypeScript is a powerful tool for JavaScript developers, offering static typing and enhanced tooling that improve code quality and developer experience. Getting started with TypeScript involves setting up your environment, learning basic syntax and types, and gradually integrating it into your projects. Despite a slight learning curve, the benefits of TypeScript make it a worthwhile addition to your development toolkit.`;

export const BLOGS: BlogItem[] = [
  {
    id: "1",
    img: "/assets/work/thumb1.png",
    title: "Exploring TypeScript for JavaScript Developers",
    desc: "Wondering why TypeScript is so popular? This article explores its features, benefits, and how to start using it. Perfect for both beginners and those wanting more depth.",
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
