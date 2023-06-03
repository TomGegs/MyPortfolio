import { useState, useEffect, useRef } from "react";

const OnScroll = () => {
    const [isVisible, setIsVisible] = useState(false);
    const titleRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const titleSection = titleRef.current;
            if (titleSection) {
                const titleSectionHeight = titleSection.offsetHeight;
                const titleSectionTop =
                    titleSection.getBoundingClientRect().top +
                    window.pageYOffset;
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
};

export default OnScroll;
