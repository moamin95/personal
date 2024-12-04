import React, { useState, useEffect } from "react";

const TypeWriter = ({ dataText = [] }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const typeTimeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < dataText[currentIndex]?.length) {
            setCurrentText((prev) => prev + dataText[currentIndex][charIndex]);
            setCharIndex((prev) => prev + 1);
          } else {
            if (currentIndex === dataText.length - 1) {
              return;
            }
            setTimeout(() => {
              setIsDeleting(true);
              setOpacity(1);
            }, 500);
          }
        } else {
          if (charIndex > 0) {
            setCurrentText((prev) => prev.slice(0, -1));
            setCharIndex((prev) => prev - 1);
            setOpacity((prev) => Math.max(prev - 0.05, 0.2));
          } else {
            // Move to the next word
            setIsDeleting(false);
            setCurrentIndex((prev) => prev + 1);
          }
        }
      },
      isDeleting ? 30 : 70
    );

    return () => clearTimeout(typeTimeout);
  }, [charIndex, currentIndex, isDeleting, dataText]);

  return (
    <div>
      <h1
        className="whitespace-nowrap overflow-hidden inline-block relative font-bold text-4xl lg:text-6xl tracking-tight"
        style={{ opacity: isDeleting ? opacity : 1 }}
      >
        {currentText}
        <span className="inline-block w-[0.15em] h-[1em] bg-white opacity-50 ml-[0.1em] align-bottom animate-blink-caret"></span>
      </h1>
    </div>
  );
};

export default TypeWriter;
