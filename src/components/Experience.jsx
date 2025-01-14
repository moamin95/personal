import React from "react";
import ExperienceCard from "./ExperienceCard";

export const Experience = () => {
  const experiences = [
    {
      company: "American Express",
      link: "https://www.americanexpress.com",
      dateRange: "Oct 2024 — ",
      role: "Front End Engineer",
      description:
        "Building and maintaining critical components used to construct banking frontend. Working closely with cross-functional teams, including developers, designers, and product managers.",
      technologies: ["JavaScript", "React", "SCSS", "Storybook"],
    },
    // {
    //   company: "CVS Health",
    //   link: "https://www.cvshealth.com/",
    //   dateRange: "2022 — 2024",
    //   role: "Software Engineer",
    //   description:
    //     "Contributed to CVS digital payment platforms, enhancing payment processing and spearheading accessiblity improvements. Furthermore, monitored and mitigated security risks as security maven.",
    //   technologies: ["React", "Next JS", "Angular", "TypeScript"],
    // },
    {
      company: "Merkle",
      link: "https://www.merkle.com",
      dateRange: "2021 — 2024",
      role: "Full Stack Engineer",
      description:
        "Enveloped within the entire SDLC, responsible for architecting and developing robust solutions for both frontend and backend services. Also contributed to containerization and CI/CD pipelines.",
      technologies: ["AWS", "React", "Express", "Docker", "MySQL"],
    },
    {
      company: "Cyient Inc.",
      link: "https://www.cyient.com/",
      dateRange: "2019 — 2021",
      role: "Engineer",
      description: "Advanced the development of the complex damage reporting platform using React, Redux, Node JS and SQL.",
      technologies: ["React", "Redux", "Node JS", "SQL"],
    },
  ];
  return (
    <div className="_section">
      <div className="_subheading">Experience</div>
      <ul className="space-y-10">
        {experiences.map((exp, index) => (
          <li key={index}>
            <ExperienceCard
              company={exp.company}
              link={exp.link}
              dateRange={exp.dateRange}
              role={exp.role}
              description={exp.description}
              technologies={exp.technologies}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
