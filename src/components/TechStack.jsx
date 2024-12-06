import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython, FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiTerraform } from "react-icons/si";

const techItems = [
  { icon: <IoLogoJavascript />, name: "JavaScript", hoverColor: "hover:text-yellow-500" },
  { icon: <FaPython />, name: "Python", hoverColor: "hover:text-yellow-300" },
  { icon: <FaReact />, name: "React", hoverColor: "hover:text-blue-400" },
  { icon: <FaNodeJs />, name: "Node.js", hoverColor: "hover:text-green-500" },
  { icon: <DiMysql />, name: "MySQL", hoverColor: "hover:text-blue-500" },
  { icon: <FaDocker />, name: "Docker", hoverColor: "hover:text-blue-400" },
  { icon: <SiTerraform />, name: "Terraform", hoverColor: "hover:text-indigo-500" },
];

const TechStack = () => {
  return (
    <div className="_section">
      <div className="_subheading">Tech Stack</div>
      <div className="flex flex-row flex-wrap gap-4 lg:gap-10 justify-start bg-gray-900">
        {techItems.map((tech, index) => (
          <div key={index} className="relative group">
            {/* Icon with hover effect */}
            <div
              className={`text-4xl text-gray-500 ${tech.hoverColor} hover:scale-110 transition-transform`}
            >
              {tech.icon}
            </div>
            {/* Tooltip */}
            <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {tech.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
