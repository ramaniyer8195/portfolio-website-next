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
