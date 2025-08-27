import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Social = () => {
  const socials = [
    { icon: <FaGithub />, path: "https://github.com/Nakib64" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/nafiz64/" },
    {
      icon: <FaWhatsapp />,
      path: "https://wa.me/8801315168075?text=" + encodeURIComponent("Hello! I’m interested in your services."),
    },
  ];

  return (
    <div className="flex gap-6">
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
