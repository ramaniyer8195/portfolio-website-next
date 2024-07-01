import { LinkType, WorkCardData } from "@/interfaces/work";
import WorkCardLink from "./WorkCardLink";
import WorkCardImage from "./WorkCardImage";

const WorkCard = ({ data }: { data: WorkCardData }) => {
  return (
    <div className="flex flex-col xl:flex-row xl:gap-[30px]">
      <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col justify-between order-2 xl:order-none">
        <div className="flex flex-col gap-[30px] h-[50%]">
          <div className="text-8xl leading-none font-extrabold">{data.num}</div>
          <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
            {data.category} project
          </h2>
          <p className="text-white/60">{data.description}</p>
          <ul className="flex gap-4">
            {data.stack.map((item, index) => {
              return (
                <li key={index} className="text-accent text-xl">
                  {item}
                  {index !== data.stack.length - 1 && ","}
                </li>
              );
            })}
          </ul>
          <div className="border border-white/20" />
          <div className="flex items-center gap-4 mb-[30px]">
            <WorkCardLink
              data={{
                type: LinkType.LIVE,
                url: data.live,
                content: "Live project",
              }}
            />
            <WorkCardLink
              data={{
                type: LinkType.GITHUB,
                url: data.github,
                content: "Github repo",
              }}
            />
            <WorkCardLink
              data={{
                type: LinkType.BLOG,
                url: data.blog,
                content: "Blog post",
              }}
            />
          </div>
        </div>
      </div>
      <WorkCardImage
        data={{
          src: data.image,
          alt: data.title,
        }}
      />
    </div>
  );
};

export default WorkCard;
