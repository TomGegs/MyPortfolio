import React, { useRef, useState } from "react";
import { images } from "../../data/index";

const MenuSidebar = ({ onToggle }) => {
    const [currentButton, setCurrentButton] = useState([
        "skillsCopy",
        "storyCopy",
        "workCopy",
        "hobbiesCopy",
    ]);

    const handleClick = (button) => {
        onToggle(button);
        setCurrentButton(button);
    };

    const buttonRefs = {
        skillsCopy: useRef(null),
        storyCopy: useRef(null),
        workCopy: useRef(null),
        hobbiesCopy: useRef(null),
    };

    const buttonContainer =
        "flex w-[90%] my-6 flex-row border-white/50 place-items-center align-middle font-thin text-white/50 pl-2 cursor-pointer h-[70px] focus:font-semibold font-normal focus:text-primary border-b rounded-b-2xl focus:border-primary/50 active:border-bgPrimary/50 hover:rounded-[1rem] hover:bg-[#FFFDFA]/20 focus:rounded-[1rem] focus:text-primary active:text-primary active:outline-none hover:font-semibold focus:outline-none active:translate-y-[2px] ";

    const buttonClicked =
        "active rounded-b-2xl border-b border-primary/50 text-primary";

    const menuIcon = "flex pr-2 text-[2rem] 2xl:text-[3rem]";

    return (
        <aside className="text-md hidden min-w-[200px] max-w-[14dvw] flex-col rounded-[2rem] p-3 text-xl  lg:flex">
            {/* menu buttons */}

            <button
                className={`${buttonContainer} ${
                    currentButton ? buttonClicked : ""
                }`}
                ref={buttonRefs.skillsCopy}
                onClick={() =>
                    handleClick("skillsCopy") && setCurrentButton("skillsCopy")
                }
                name="skillsCopy">
                <images.skillsIcon className={menuIcon} />
                Skills
            </button>
            <button
                ref={buttonRefs.storyCopy}
                className={`${buttonContainer} ${
                    currentButton ? buttonClicked : ""
                }`}
                onClick={() =>
                    handleClick("storyCopy") && setCurrentButton("storyCopy")
                }
                name="storyCopy">
                <images.storyIcon className={menuIcon} />
                Story
            </button>
            <button
                ref={buttonRefs.workCopy}
                className={`${buttonContainer} ${
                    "workCopy" ? buttonClicked : ""
                }`}
                onClick={() =>
                    handleClick("workCopy") && setCurrentButton("workCopy")
                }
                name="workCopy">
                <images.workIcon className={menuIcon} />
                Work
            </button>
            <button
                ref={buttonRefs.hobbiesCopy}
                className={`${buttonContainer} ${
                    "hobbiesCopy" ? buttonClicked : ""
                }`}
                onClick={() =>
                    handleClick("hobbiesCopy") &&
                    setCurrentButton("hobbiesCopy")
                }
                name="hobbiesCopy">
                <images.hobbiesIcon className={menuIcon} />
                Hobbies
            </button>
        </aside>
    );
};

export default MenuSidebar;
