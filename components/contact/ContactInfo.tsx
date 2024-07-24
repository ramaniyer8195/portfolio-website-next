import Social from "../home/Social";
import { info } from "@/constants/data";

const ContactInfo = () => {
  return (
    <ul className="flex flex-col gap-10">
      {info.map(({ icon, title, description }, index) => {
        return (
          <li key={index} className="flex items-center gap-6">
            <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
              <div className="text-[28px]">{icon}</div>
            </div>
            <div className="flex-1">
              <p className="text-white/60">{title}</p>
              <h3 className="text-xl">{description}</h3>
            </div>
          </li>
        );
      })}
      <Social
        containerStyles="flex gap-6"
        iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover: transition-all duration-500"
      />
      <p className="text-white/60">© 2022 Raman Iyer. All rights reserved.</p>
    </ul>
  );
};

export default ContactInfo;
