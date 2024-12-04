import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Social = () => {
  const socialLinks = [
    { icon: <FaGithub />, alt: "github", link: "https://github.com/moamin95" },
    {
      icon: <FaLinkedin />,
      alt: "linkedin",
      link: "https://www.linkedin.com/in/mohammed-amin-13a179215/",
    },
  ];

  return (
    <div className="mt-4 flex flex-row gap-4 text-2xl text-zinc-400 lg:mt-8">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noreferrer"
          className="hover:text-white"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};
