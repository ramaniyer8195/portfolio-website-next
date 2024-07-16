"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
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

const Nav = () => {
  const pathname = usePathname();

  const getActivePath = (path: string): boolean => {
    if (path === "/blog") {
      return /^\/blog*/.test(pathname);
    } else {
      return path === pathname;
    }
  };

  return (
    <nav className="flex gap-8">
      {links.map(({ name, path }, index) => (
        <Link
          key={index}
          href={path}
          className={`${
            getActivePath(path) && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
