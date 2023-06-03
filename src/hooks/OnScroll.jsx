import { useState, useEffect, useRef } from "react";

const OnScroll = ({ title, fontStyle}) => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const titleSection = titleRef.current;
      if (titleSection) {
        const titleSectionHeight = titleSection.offsetHeight;
        const titleSectionTop =
          titleSection.getBoundingClientRect().top + window.pageYOffset;
        if (
          currentScrollY + window.innerHeight >=
          titleSectionTop + titleSectionHeight
        ) {
          setIsVisible(true);
          window.removeEventListener("scroll", handleScroll);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative" ref={titleRef}>
      <div
        className={`opacity-0 transition-opacity duration-1000 ${
          isVisible ? " opacity-100" : ""
        }`}>
        <h2 className={`${fontStyle} mt-4 flex max-w-[46rem] after:absolute after:ml-10 after:flex after:h-[0.125rem] after:w-[25rem] after:translate-x-32 after:translate-y-1 after:self-center after:rounded-md after:bg-gray-700 after:opacity-50`}>
          {title}
        </h2>
      </div>
    </div>
  );
};

export default OnScroll;
