import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const socials = [
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
    path: "https://www.facebook.com/ramaniyer08",
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

const Social = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map(({ tooltip, icon, path }, index) => (
        <TooltipProvider delayDuration={100} key={index}>
          <Tooltip>
            <TooltipTrigger>
              <Link
                key={index}
                href={path}
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

export default Social;
