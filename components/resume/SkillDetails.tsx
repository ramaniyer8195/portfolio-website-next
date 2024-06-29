import { Skills } from "@/interfaces/resume";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SkillDetails = ({ data }: { data: Skills }) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{data.title}</h3>
        <p className="max-w-[600px] textwhite/60 mx-auto xl:mx-0">
          {data.description}
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
          {data.skillList.map(({ name, icon }, index) => {
            return (
              <li key={index}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                      <div className="text-6xl group-hover:text-accent transition-all duration-300">
                        {icon}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="capitalize">{name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SkillDetails;
