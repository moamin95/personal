import React from "react";

const ExperienceCard = ({
  company,
  link,
  dateRange,
  role,
  description,
  technologies = [],
}) => {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      {/* Background and Shadow Effects */}
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-blue-900/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,223,186,0.2)] lg:group-hover:drop-shadow-lg"></div>

      {/* Date Range */}
      <header
        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-300 sm:col-span-2"
        aria-label={dateRange}
      >
        {dateRange}
      </header>

      {/* Content */}
      <div className="z-10 sm:col-span-6">
        {/* Role and Company */}
        <h3 className="font-medium leading-snug text-blue-600">
          <div>
            <a
              className="inline-flex items-baseline font-medium leading-tight text-blue-500 hover:text-blue-700 focus-visible:text-blue-700 group/link text-base"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${role} at ${company} (opens in a new tab)`}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {role} ·{" "}
                <span className="inline-block">
                  {company}
                  {/* Arrow Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </span>
            </a>
          </div>
        </h3>

        {/* Description */}
        <p className="mt-2 text-slate-400 text-left">{description}</p>

        {/* Technologies */}
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {technologies.map((tech, index) => (
            <li key={index} className="mr-1.5 mt-2">
              <div className="_chiclet">
                {tech}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
