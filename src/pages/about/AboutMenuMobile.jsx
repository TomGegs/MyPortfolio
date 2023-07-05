import React, { useRef, useState } from "react";
import { images } from "../../data/index";

const AboutMenuMobile = ({ onToggle }) => {
    const [currentButton, setCurrentButton] = useState("skillsCopy");

    const handleClick = (button) => {
        onToggle(button);
        setCurrentButton(button);
    };

    const buttonRefs = {
        storyCopy: useRef(null),
        skillsCopy: useRef(null),
        hobbiesCopy: useRef(null),
        workCopy: useRef(null),
    };

    const menuButton =
        "p-1 flex flex-col border-b rounded-xl active:rounded-xl focus:rounded-xl hover:bg-[#FFFDFA]/20 focus:border-primary/50 active:translate-y-[2px] active:border-primary/50 border-bgPrimary/50 mx-1 flex-1 place-content-evenly justify-center align-middle place-items-center active:font-semibold focus:font-semibold active:text-primary focus:text-primary focus:outline-none";

    return (
        <div className="grid w-full grid-cols-4 text-[14px] font-thin text-white/50  lg:hidden">
            <button
                ref={buttonRefs.skillsCopy}
                className={`${menuButton} ${
                    currentButton === "skillsCopy"
                        ? "active rounded-xl border-b border-primary/50 font-semibold text-primary"
                        : "border-bgPrimary/50 text-white/50"
                }`}
                onClick={() => handleClick("skillsCopy")}
                name="skillsCopy">
                <images.skillsIcon className="my-auto text-[30px]" />
                Skills
            </button>

            <button
                ref={buttonRefs.storyCopy}
                className={`${menuButton} ${
                    currentButton === "storyCopy" ? "active" : ""
                }`}
                onClick={() => handleClick("storyCopy")}
                name="storyCopy">
                <images.storyIcon className="my-auto text-[30px]" />
                Story
            </button>
            <button
                ref={buttonRefs.workCopy}
                className={`${menuButton} ${
                    currentButton === "workCopy" ? "active" : ""
                }`}
                onClick={() => handleClick("workCopy")}
                name="workCopy">
                <images.workIcon className="my-auto text-[30px]" />
                Work
            </button>
            <button
                ref={buttonRefs.hobbiesCopy}
                className={`${menuButton} ${
                    currentButton === "hobbiesCopy" ? "active" : ""
                }`}
                onClick={() => handleClick("hobbiesCopy")}
                name="hobbiesCopy">
                <images.hobbiesIcon className="my-auto text-[30px]" />
                Hobbies
            </button>
        </div>
    );
};

export default AboutMenuMobile;
