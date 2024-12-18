import React from "react";

const Footer = () => {
  return (
    <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
      <p className="text-sm/6 text-gray-400">
        Built by me with React and Tailwind. Hosted on Vercel. Source code{" "}
        <a
          href="https://github.com/moamin95/personal"
          target="_blank"
          rel="noreferrer"
          className="text-slate-300 hover:text-blue-500"
        >
          here.
        </a>
      </p>
    </div>
  );
};

export default Footer;
