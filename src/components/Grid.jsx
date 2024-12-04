import React from "react";

export const Grid = () => {
  return (
    <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
      <svg
        aria-hidden="true"
        className="absolute inset-0 size-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            id="3d-grid-pattern"
            x="0"
            y="0"
            width={50}
            height={50}
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="50" height="50" fill="#1f2937" />
            <path d="M0 0L50 50M50 0L0 50" stroke="#374151" strokeWidth="2" />
            <polygon
              points="0,25 25,0 50,25 25,50"
              fill="url(#diamond-shading)"
            />
            <polygon points="0,25 25,50 0,50" fill="#2d3748" />
            <polygon points="50,25 25,50 50,50" fill="#4a5568" />
          </pattern>
          {/* Gradient for shading */}
          <linearGradient id="diamond-shading" x1="0" y1="0" x2="1" y2="1">
            <stop offset="%" stopColor="#2d3748" />
            <stop offset="100%" stopColor="#1a202c" />
          </linearGradient>
        </defs>
        <rect
          fill="url(#3d-grid-pattern)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div
        aria-hidden="true"
        className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)",
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
        />
      </div>
    </div>
  );
};
