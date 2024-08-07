"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "../ui/button";
import { links } from "@/constants/data";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Raman<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map(({ name, path }, index) => (
            <Link
              key={index}
              href={path}
              className={`${
                path === pathname && "text-accent border-b-2 border-accent"
              } capitalize text-xl hover:text-accent transition-all`}
            >
              {name}
            </Link>
          ))}
          <Link href="https://buymeacoffee.com/ramaniyer" target="_blank">
            <Button>Buy Me Coffee</Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
