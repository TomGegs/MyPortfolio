import React, { useEffect, useState } from "react";
import { images } from "../../data";

const Preloader = () => {
    const preloaderStyle = {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        height: "100dvh",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#090909",
        transition: "opacity 0.7s ease-in-out",
    };

    const [showPreloader, setShowPreloader] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowPreloader(false);
        }, 1000);
        //clean up function
        return () => clearTimeout(timeout);
    }, []);

    if (showPreloader) {
        document.body.classList.add("preloader");
    } else {
        document.body.classList.remove("preloader");
    }

    return (
        showPreloader && (
            <div style={preloaderStyle}>
                <div className="relative grid h-[55vh] w-[75vw] grid-cols-1 grid-rows-5 items-center rounded-3xl bg-bgSecondary text-center align-middle font-encode text-[1.5rem] font-thin text-white lg:h-[250px] lg:grid-cols-5 lg:grid-rows-1 lg:flex-row lg:text-[2rem] ">
                    <span className="animate__animated animate__fadeInUp animate__faster">
                        Tom Geoghegan
                    </span>
                    <img
                        src={images.logoIcon}
                        alt="Tom G Logo"
                        className="mx-auto my-4 h-12 w-12 animate-spin lg:my-0 "
                    />
                    <span className="animate__animated animate__fadeInUp animate__faster [animation-delay:0.6s]">
                        Create
                    </span>
                    <span className="animate__animated animate__fadeInUp animate__faster [animation-delay:1.4s]">
                        Develop
                    </span>
                    <span className="animate__animated animate__fadeIn animate__faster bg-gradient-to-r  from-altSecond via-secondary to-primary bg-clip-text px-6 font-encode font-medium text-transparent [animation-delay:2s]">
                        Explore
                    </span>
                </div>
            </div>
        )
    );
};

export default Preloader;
