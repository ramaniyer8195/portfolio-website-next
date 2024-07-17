"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaRedditAlien,
  FaHackerNews,
  FaLink,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";

const socials = [
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
      {socials.map(({ tooltip, icon, path }, index) => (
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
