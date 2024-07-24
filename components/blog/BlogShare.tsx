"use client";

import Link from "next/link";
import { FaLink } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import { shareSocials } from "@/constants/data";

const BlogShare = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  const [blogUrl, setBlogUrl] = useState("");

  useEffect(() => {
    setBlogUrl(window.location.href);
  }, []);

  return (
    <div className={containerStyles}>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <div
              className={iconStyles}
              onClick={() => navigator.clipboard.writeText(blogUrl)}
            >
              {<FaLink />}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="capitalize">Copy Link</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {shareSocials.map(({ tooltip, icon, path }, index) => (
        <TooltipProvider delayDuration={100} key={index}>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href={`${path}${blogUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className={iconStyles}
              >
                {icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p className="capitalize">{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

export default BlogShare;
