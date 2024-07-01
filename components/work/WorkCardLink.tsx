import Link from "next/link";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { FaBlogger } from "react-icons/fa";
import { LinkType, WorkCardLinkData } from "@/interfaces/work";

const WorkCardLink = ({ data }: { data: WorkCardLinkData }) => {
  const getIcon = (type: LinkType): JSX.Element => {
    switch (type) {
      case LinkType.LIVE:
        return (
          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
        );
      case LinkType.GITHUB:
        return (
          <BsGithub className="text-white text-3xl group-hover:text-accent" />
        );
      case LinkType.BLOG:
        return (
          <FaBlogger className="text-white text-3xl group-hover:text-accent" />
        );
    }
  };

  return (
    <Link href={data.url}>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 justify-center flex items-center group">
            {getIcon(data.type)}
          </TooltipTrigger>
          <TooltipContent>
            <p>{data.content}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  );
};

export default WorkCardLink;
