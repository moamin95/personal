import React from "react";
import { Grid } from "./Grid";
import TypeWriter from "./Typewriter";
import { Social } from "./Social";
import Contact from "./Contact";
import myAvatar from "../assets/avatar.jpg";

export const LeftRail = () => {
  const titles = ["Developer ", "Traveler ", "Cat Dad ", "Mohammed Amin "];

  return (
    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
      <Grid />
      <div className="flex flex-col">
        <img
          alt="avatar"
          src={myAvatar}
          className="inline-block w-[7rem] h-[7rem] rounded-full mb-8 lg:w-[8rem] lg:h-[8rem]"
        />
        <div className="flex flex-col text-slate-50">
          <TypeWriter dataText={titles} />
          <p className="_subheading">Full Stack Engineer</p>
        </div>
        <p className="_blurb">
          I build robust and scalable web applications. Let's connect and create
          something.
        </p>
      </div>
      <Contact />
      <Social />
    </div>
  );
};
