import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaDiscord,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ramaniyer8195" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/raman-iyer/" },
  { icon: <FaXTwitter />, path: "https://x.com/RamanIyer8195" },
  { icon: <FaFacebookF />, path: "https://www.facebook.com/ramaniyer08" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/raman_0801/" },
  { icon: <FaWhatsapp />, path: "https://wa.me/919819289445" },
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
      {socials.map(({ icon, path }, index) => (
        <Link
          key={index}
          href={path}
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyles}
        >
          {icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
