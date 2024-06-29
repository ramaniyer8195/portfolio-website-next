import { Education, Experience } from "@/interfaces/resume";

const ProfileDetails = ({ data }: { data: Experience | Education }) => {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{data.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {data.description}
      </p>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        {data.items.map((item, index) => {
          return (
            <li
              key={index}
              className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
            >
              <span className="text-accent">{item.duration}</span>
              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                {"position" in item ? item.position : item.degree}
              </h3>
              <div className="flex items-center gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                <p className="text-white/60">
                  {"company" in item ? item.company : item.instituion}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProfileDetails;
