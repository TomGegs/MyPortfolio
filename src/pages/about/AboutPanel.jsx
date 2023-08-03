import React, { useState } from "react";
import MenuSidebar from "./MenuSidebar";
import { images, aboutCopy } from "../../data/index";
import AboutMenuMobile from "./AboutMenuMobile";
import Header from "../../components/ui/Header";

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
    const [activeButton] = useState("skillsCopy");

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

    const copyHeader =
        "text-[1rem] min-h-[48px] lg:text-[1.5rem] 2xl:text-[2rem] font-medium font-encode text-primary";
    const copyBody =
        "text-[0.85rem] overflow-clip mt-2 text-white min-h-[350px] lg:h-full font-light lg:justify-between flex flex-col font-encode md:text-[1.2rem] 2xl:text-[1.4rem]";

    const skillsCopy = (
        <>
            <h3 className={copyHeader}>{aboutCopy[0].title}</h3>
            <p className={copyBody}>
                {aboutCopy[0].copy.split("\n").map((paragraph, index) => (
                    <React.Fragment key={index}>
                        {paragraph}
                        <br />
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
        <div className="relative h-fit flex w-full ">
            {/* About tile container */}
            <div className="flex min-h-[95vh] w-full flex-col rounded-[2rem] bg-bgSecondary p-4 shadow-xl shadow-stone-900 lg:min-h-[700px] lg:flex-row lg:p-0">
                <div className="flex flex-col lg:flex-row">
                <MenuSidebar
                    onToggle={handleCopyToggle}
                    activeButton={activeButton}
                    className="z-20"
                />
                    {/*Text container */}
                    <div className="flex-2 flex w-full flex-col justify-between px-4 lg:my-4 lg:min-h-[50vh]  ">
                        <div className="flex h-full flex-col">
                            {/* Title animated */}
                            <Header
                                title={`About Me:  ${
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
                                width={`95%`}
                                block={`block`}
                            />

                            <div className="flex h-full w-fit flex-col overflow-clip px-1 py-2 lg:w-full lg:py-4 lg:pr-4">
                                {showSkills && skillsCopy}
                                {showWork && workCopy}
                                {showStory && storyCopy}
                                {showHobbies && hobbiesCopy}
                            </div>
                            {/* Tools and Tech Icon Container */}
                            {/* <div className="hidden md:flex">
                            <IconTile />
                        </div> */}
                        </div>
                    </div>
                    {/* Image container */}
                    <div className="flex-3 mx-auto flex  w-[100%] justify-end md:w-[70%] lg:h-full lg:justify-center lg:p-4">
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
                            className="mx-auto h-full w-full rounded-[2rem] object-cover p-2 lg:h-[100%] lg:w-[100%]  lg:p-0"
                        />
                    </div>
                    <div className="bottom-0 mt-2 flex h-fit flex-col justify-end lg:hidden">
                        <hr className="mb-4 ml-2 block h-[1px] w-[95%] animate-gradient rounded border-0 bg-gradient-to-r from-primary to-[#cbb7f7] " />
                        <AboutMenuMobile
                            onToggle={handleCopyToggle}
                            activeButton={activeButton}
                        />
                    </div>
                    {/* about tile ends above */}
                </div>
            </div>
        </div>
    );
};

export default AboutPanel;
