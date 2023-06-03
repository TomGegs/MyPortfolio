import React, { useRef, useEffect, useState } from "react";
import { images } from "../../data/index";

const MenuSidebar = ({ onToggle, activeButton }) => {
    const [currentButton, setCurrentButton] = useState("skillsCopy");

    const handleClick = (button) => {
        onToggle(button);
        setCurrentButton(button);
    };

    const buttonRefs = {
        skillsCopy: useRef(null),
        workCopy: useRef(null),
        storyCopy: useRef(null),
        hobbiesCopy: useRef(null),
    };

    useEffect(() => {
        if (buttonRefs[currentButton] && buttonRefs[currentButton].current) {
            buttonRefs[currentButton].current.focus();
        }
    }, [currentButton]);

    const menuButton =
        "flex w-[70%]  place-items-center flex-row place-items-center cursor-pointer hover:rounded-[1rem] hover:bg-white hover:bg-opacity-20  focus:rounded-[1rem] focus:text-primary focus:outline-none active:translate-y-[2px]";
    const menuIcon =
        "h-[4rem] flex w-full  flex-row justify-start ml-2 focus:font-semibold font-normal place-items-center   focus:text-primary ";

    return (
        <div className="text-md hidden w-[25vw] flex-col rounded-[2rem] bg-bgSecondary font-semibold text-white md:flex">
            {/* logo */}
            <div className="mx-auto my-8 flex items-center">
                <img
                    src={images.logoIcon}
                    alt="logo"
                    className="w-[50px] rounded-full"
                />
            </div>
            <hr className="mx-auto mb-8 h-[1px] w-[70%] animate-gradient rounded border-0 bg-gradient-to-l from-primary via-secondary to-[#cbb7f7] " />

            {/* menu buttons container */}
            <div className="flex flex-col items-center  gap-y-8">
                {/* menu buttons */}

                <div className={`${menuButton}`}>
                    <button
                        ref={buttonRefs.skillsCopy}
                        className={`${menuIcon} ${
                            currentButton === "skillsCopy" ? "active" : ""
                        }`}
                        onClick={() => handleClick("skillsCopy")}
                        name="skillsCopy">
                        <images.skillsIcon className="flex flex-shrink-0 pr-2 text-[2rem]" />
                        Skills
                    </button>
                </div>

                <div className={`${menuButton}`}>
                    <button
                        ref={buttonRefs.workCopy}
                        className={`${menuIcon} ${
                            currentButton === "workCopy" ? "active" : ""
                        }`}
                        onClick={() => handleClick("workCopy")}
                        name="workCopy">
                        <images.workIcon className="flex flex-shrink-0 pr-2 text-[2rem]" />
                        Work
                    </button>
                </div>
                <div className={`${menuButton}`}>
                    <button
                        ref={buttonRefs.storyCopy}
                        className={`${menuIcon} ${
                            currentButton === "storyCopy" ? "active" : ""
                        }`}
                        onClick={() => handleClick("storyCopy")}
                        name="storyCopy">
                        <images.storyIcon className="flex flex-shrink-0 pr-2 text-[2rem]" />
                        Story
                    </button>
                </div>

                <div className={`${menuButton}`}>
                    <button
                        ref={buttonRefs.hobbiesCopy}
                        className={`${menuIcon} ${
                            currentButton === "hobbiesCopy" ? "active" : ""
                        }`}
                        onClick={() => handleClick("hobbiesCopy")}
                        name="hobbiesCopy">
                        <images.hobbiesIcon className="flex flex-shrink-0 pr-2 text-[2rem]" />
                        Hobbies
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuSidebar;
