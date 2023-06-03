import React, { useState } from "react";
import MenuSidebar from "./MenuSidebar";
import { images, aboutCopy } from "../../data/index";
import AboutMenuMobile from "./AboutMenuMobile";
import { Fade } from "react-awesome-reveal";
import IconTile from "./IconTile";

const AboutPanel = () => {
    const [showSkills, setShowSkills] = useState(true);
    const [showWork, setShowWork] = useState(false);
    const [showStory, setShowStory] = useState(false);
    const [showHobbies, setShowHobbies] = useState(false);
    //useState images
    const [showSkillsImg, setShowSkillsImg] = useState(false);
    const [showWorkImg, setShowWorkImg] = useState(false);
    const [showStoryImg, setShowStoryImg] = useState(false);
    const [showHobbiesImg, setShowHobbiesImg] = useState(false);
    //useState buttons
    const [activeButton, setActiveButton] = useState("skillsCopy");

    const handleCopyToggle = (button) => {
        if (button === "storyCopy") {
            setShowStory(true);
            setShowSkills(false);
            setShowWork(false);
            setShowHobbies(false);
            setShowStoryImg(true);
            setShowSkillsImg(false);
            setShowWorkImg(false);
            setShowHobbiesImg(false);
        } else if (button === "skillsCopy") {
            setShowStory(false);
            setShowSkills(true);
            setShowWork(false);
            setShowHobbies(false);
            setShowStoryImg(false);
            setShowSkillsImg(true);
            setShowWorkImg(false);
            setShowHobbiesImg(false);
        } else if (button === "workCopy") {
            setShowStory(false);
            setShowSkills(false);
            setShowWork(true);
            setShowHobbies(false);
            setShowStoryImg(false);
            setShowSkillsImg(false);
            setShowWorkImg(true);
            setShowHobbiesImg(false);
        } else if (button === "hobbiesCopy") {
            setShowStory(false);
            setShowSkills(false);
            setShowWork(false);
            setShowHobbies(true);
            setShowStoryImg(false);
            setShowSkillsImg(false);
            setShowWorkImg(false);
            setShowHobbiesImg(true);
        }
    };

    const handleActiveButtonToggle = (button) => {
        setActiveButton(button);
    };

    const copyHeader =
        "rounded-md text-[1.2rem] xl:text-[1.5rem] font-medium text-primary";
    const copyBody =
        "text-[0.9rem] mt-2 text-white font-light min-h-[500px] lg:justify-between flex flex-col font-encode xl:text-[1.2rem]";

    const skillsCopy = (
        <>
            <h3 className={copyHeader}>{aboutCopy[0].title}</h3>
            <p className={copyBody}>
                {aboutCopy[0].copy.split("\n").map((paragraph, index) => (
                    <React.Fragment key={index}>
                        {paragraph}
                        <br />
                        <IconTile />
                    </React.Fragment>
                ))}
            </p>
        </>
    );

    const workCopy = (
        <>
            <h3 className={copyHeader}>{aboutCopy[1].title}</h3>
            <p className={copyBody}>
                {aboutCopy[1].copy.split("\n").map((paragraph, index) => (
                    <React.Fragment key={index}>
                        {paragraph}
                        <br />
                    </React.Fragment>
                ))}
            </p>
        </>
    );

    const storyCopy = (
        <>
            <h3 className={copyHeader}>{aboutCopy[2].title}</h3>
            <p className={copyBody}>
                {aboutCopy[2].copy.split("\n").map((paragraph, index) => (
                    <React.Fragment key={index}>
                        {paragraph}
                        <br />
                    </React.Fragment>
                ))}
            </p>
        </>
    );

    const hobbiesCopy = (
        <>
            <h3 className={copyHeader}>{aboutCopy[3].title}</h3>
            <p className={copyBody}>
                {aboutCopy[3].copy.split("\n").map((paragraph, index) => (
                    <React.Fragment key={index}>
                        {paragraph}
                        <br />
                    </React.Fragment>
                ))}
            </p>
        </>
    );

    return (
        // Section Container
        <div className="relative my-12 flex w-full md:py-6">
            {/* About tile container */}
            <div className="mx-3 flex w-full flex-col rounded-[2rem] bg-bgSecondary p-4 shadow-xl shadow-stone-900 md:mx-6 md:h-[700px] md:flex-row md:p-0">
                <MenuSidebar
                    onToggle={handleCopyToggle}
                    activeButton={activeButton}
                    className="z-20"
                />
                {/*Text container */}
                <div className="flex-2 flex max-h-[44vh] w-full flex-col justify-between px-4 md:my-4  ">
                    <div className="">
                        {/* Title animated */}
                        <h2 className="animate-gradient bg-gradient-to-r from-primary via-green-300 to-[#8553F4] bg-clip-text pb-2.5 font-encode text-[2rem]  text-transparent md:mb-4  md:text-[3rem]">
                            {`About me:  ${
                                showSkills
                                    ? aboutCopy[0].category
                                    : "" || showWork
                                    ? aboutCopy[1].category
                                    : "" || showStory
                                    ? aboutCopy[2].category
                                    : "" || showHobbies
                                    ? aboutCopy[3].category
                                    : ""
                            }`}
                        </h2>
                        {/* Divider animated */}
                        <hr className="block h-[1px] w-[95%] animate-gradient rounded border-0 bg-gradient-to-r from-primary via-secondary to-[#cbb7f7] " />

                        <div className="flex w-fit flex-col px-1 py-2 md:w-[85%] md:py-4 ">
                            {showSkills && skillsCopy}
                            {showWork && workCopy}
                            {showStory && storyCopy}
                            {showHobbies && hobbiesCopy}
                        </div>
                    </div>
                </div>
                {/* Image container */}
                <div className="flex-3 mx-auto flex md:w-[70%] md:justify-center md:p-4">
                    <img
                        src={
                            showSkillsImg
                                ? images.TomSkills
                                : showWorkImg
                                ? images.tomWork
                                : showStoryImg
                                ? images.running
                                : showHobbiesImg
                                ? images.tomHobbies
                                : images.TomSkills
                        }
                        alt={images.tomSkills}
                        className="h-[100%] w-[100%] rounded-[2rem] object-cover p-2 md:p-0"
                    />
                </div>
                <div className="mt-2 block md:hidden">
                    <hr className="mb-4 ml-2 block h-[1px] w-[95%] animate-gradient rounded border-0 bg-gradient-to-r from-primary to-[#cbb7f7] " />
                    <AboutMenuMobile
                        onToggle={handleCopyToggle}
                        activeButton={activeButton}
                    />
                </div>
                {/* about tile ends above */}
            </div>
        </div>
    );
};

export default AboutPanel;
