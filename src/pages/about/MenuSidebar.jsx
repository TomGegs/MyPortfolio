import React, { useRef, useState } from "react";
import { images } from "../../data/index";

const MenuSidebar = ({ onToggle }) => {
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

    const buttonContainer =
        "flex w-[70%] place-items-center flex-row place-items-center cursor-pointer hover:rounded-[1rem] hover:bg-[#FFFDFA]/20 focus:rounded-[1rem] focus:text-primary active:outline-none focus:outline-none active:translate-y-[2px]";

    const menuButton =
        "h-[4rem] flex w-full flex-row justify-start pl-2 focus:font-semibold font-normal place-items-center focus:text-primary border-b rounded-b-2xl focus:border-primary/50 active:border-primary/50 border-bgPrimary/50";

    const menuIcon = "flex flex-shrink-0 pr-2 text-[2rem] 2xl:text-[3rem]";

    return (
        <div className="text-md hidden min-w-[15vw] flex-col rounded-[2rem] bg-bgSecondary font-semibold text-white/50 lg:flex 2xl:text-xl">
            {/* logo */}
            <div className="mx-auto my-8 flex items-center">
                <img
                    src={images.logoIcon}
                    alt="logo"
                    className="w-[30px] rounded-full lg:w-[50px]"
                />
            </div>
            <hr className="mx-auto mb-8 h-[1px] w-[70%] animate-gradient rounded border-0 bg-gradient-to-l from-primary via-secondary to-[#cbb7f7] " />

            {/* menu buttons container */}
            <div className="flex flex-col items-center gap-y-8 2xl:gap-y-12">
                {/* menu buttons */}

                <div className={`${buttonContainer}`}>
                    <button
                        ref={buttonRefs.skillsCopy}
                        className={`${menuButton} ${
                            currentButton === "skillsCopy"
                                ? "active rounded-b-2xl border-b border-primary/50 text-primary"
                                : "border-bgPrimary/50 text-white/50"
                        }`}
                        onClick={() => handleClick("skillsCopy")}
                        name="skillsCopy">
                        <images.skillsIcon className={`${menuIcon}`} />
                        Skills
                    </button>
                </div>

                <div className={`${buttonContainer}`}>
                    <button
                        ref={buttonRefs.storyCopy}
                        className={`${menuButton} ${
                            currentButton === "storyCopy" ? "active" : ""
                        }`}
                        onClick={() => handleClick("storyCopy")}
                        name="storyCopy">
                        <images.storyIcon className={`${menuIcon}`} />
                        Story
                    </button>
                </div>
                <div className={`${buttonContainer}`}>
                    <button
                        ref={buttonRefs.workCopy}
                        className={`${menuButton} ${
                            currentButton === "workCopy" ? "active" : ""
                        }`}
                        onClick={() => handleClick("workCopy")}
                        name="workCopy">
                        <images.workIcon className={`${menuIcon}`} />
                        Work
                    </button>
                </div>

                <div className={`${buttonContainer}`}>
                    <button
                        ref={buttonRefs.hobbiesCopy}
                        className={`${menuButton} ${
                            currentButton === "hobbiesCopy" ? "active" : ""
                        }`}
                        onClick={() => handleClick("hobbiesCopy")}
                        name="hobbiesCopy">
                        <images.hobbiesIcon className={`${menuIcon}`} />
                        Hobbies
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuSidebar;
