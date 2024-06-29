import { About } from "@/interfaces/resume";

const AboutMe = ({ data }: { data: About }) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <h3 className="text-4xl font-bold">{data.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {data.description}
      </p>
      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
        {data.info.map(({ fieldName, fieldValue }, index) => {
          return (
            <li
              key={index}
              className="flex items-center justify-center xl:justify-start gap-4"
            >
              <span className="text-white/60">{fieldName}</span>
              <span className="text-xl">{fieldValue}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AboutMe;
