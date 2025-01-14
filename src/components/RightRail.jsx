import React from "react";
import { About } from "./About";
import { Experience } from "./Experience";
import TechStack from "./TechStack";
import ResumeDownload from "./ResumeDownload";
import Footer from "./Footer";

export const RightRail = () => {
  return (
    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
      <div className="flex flex-col">
        <About />
        <Experience />
        <TechStack />
        {/* <ResumeDownload /> */}
        <Footer />
      </div>
    </div>
  );
};
