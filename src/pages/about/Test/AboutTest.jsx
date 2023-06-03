import React, { useRef, useEffect, useState } from "react";
import { images } from "../../data/index";

const MenuSidebar = ({ onToggle, activeButton }) => {
  const [currentButton, setCurrentButton] = useState("storyCopy");

  const handleClick = (button) => {
    onToggle(button);
    setCurrentButton(button);
  };

  const buttonRefs = {
    storyCopy: useRef(null),
    skillsCopy: useRef(null),
    hobbiesCopy: useRef(null),
  };

  useEffect(() => {
    if (buttonRefs[currentButton] && buttonRefs[currentButton].current) {
      buttonRefs[currentButton].current.focus();
    }
  }, [currentButton]);

  const menuButton =
    "w-[4.5rem] h-[4.5rem] p-1 hover:rounded-[1rem] flex flex-col place-items-center hover:bg-white hover:bg-opacity-20 focus:rounded-[1rem] focus:text-primary active:translate-y-[2px] focus:outline-none";

  return (
    <div className="text-md flex h-full w-[5vw] flex-none grow-0 flex-col rounded-[2rem] bg-bgSecondary font-semibold text-white">
      <div className="mx-auto my-8 flex items-center">
        <img
          src={images.logoIcon}
          alt="logo"
          className="w-[50px] rounded-full"
        />
      </div>
      <hr className="mx-auto mb-8 flex w-[70%]" />
      <div className="flex flex-col items-center justify-between gap-y-12 ">
        <button
          ref={buttonRefs.storyCopy}
          className={`${menuButton} ${
            currentButton === "storyCopy" ? "active" : ""
          }`}
          onClick={() => handleClick("storyCopy")}
          name="storyCopy">
          <images.storyIcon className="mx-auto my-auto scale-[200%]" />
          Story
        </button>

        <button
          ref={buttonRefs.skillsCopy}
          className={`${menuButton} ${
            currentButton === "skillsCopy" ? "active" : ""
          }`}
          onClick={() => handleClick("skillsCopy")}
          name="skillsCopy">
          <images.skillsIcon className="mx-auto my-auto scale-[200%]" />
          Skills
        </button>

        <button
          ref={buttonRefs.hobbiesCopy}
          className={`${menuButton} ${
            currentButton === "hobbiesCopy" ? "active" : ""
          }`}
          onClick={() => handleClick("hobbiesCopy")}
          name="hobbiesCopy">
          <images.hobbiesIcon className="mx-auto my-auto scale-[200%]" />
          Hobbies
        </button>
      </div>
    </div>
  );
};

export default MenuSidebar;
