import React from "react";
import TechBox from "./TechBox";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaAngular } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiTerraform } from "react-icons/si";

const TechStack = () => {
  const techStacks = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Golang",
    "React",
    "Next JS",
    "Redux",
    "Node.js",
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
    "SQL",
  ];
  return (
    <>
      <div className="_section">
        <div className="_subheading">Tech Stack</div>
        {/* <ul className="flex flex-wrap gap-2">
          {techStacks.map((tech, index) => (
            <li key={index}>
              <TechBox tech={tech} />
            </li>
          ))}
        </ul> */}

        <div className="flex flex-row flex-wrap gap-4 justify-start bg-gray-900">
          <IoLogoJavascript className="text-gray-500 w-8 h-8 hover:text-yellow-500 hover:scale-110 transition-transform" />
          <SiTypescript className="text-gray-500 w-8 h-8 hover:text-blue-500 hover:scale-110 transition-transform" />
          <FaPython className="text-gray-500 w-8 h-8 hover:text-yellow-300 hover:scale-110 transition-transform" />
          <FaReact className="text-gray-500 w-8 h-8 hover:text-blue-400 hover:rotate-12 transition-transform" />
          <FaNodeJs className="text-gray-500 w-8 h-8 hover:text-green-500 hover:scale-110 transition-transform" />
          <DiMysql className="text-gray-500 w-10 h-10 hover:text-blue-500 hover:scale-110 transition-transform" />
          <FaDocker className="text-gray-500 w-8 h-8 hover:text-blue-400 hover:scale-110 transition-transform" />
          <SiTerraform className="text-gray-500 w-8 h-8 hover:text-indigo-500 hover:scale-110 transition-transform" />
        </div>
      </div>
    </>
  );
};

export default TechStack;
