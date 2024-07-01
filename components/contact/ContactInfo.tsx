import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+919819289445",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ramaniyer8195@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Mumbai, India",
  },
];

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
    </ul>
  );
};

export default ContactInfo;