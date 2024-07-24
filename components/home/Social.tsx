import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { socials } from "@/constants/data";

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
