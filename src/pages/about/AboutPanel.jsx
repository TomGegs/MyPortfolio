import React, { useEffect, useRef, useState } from "react";
import MenuSidebar from "./MenuSidebar";
import { images, aboutCopy } from "../../data/index";
import AboutMenuMobile from "./AboutMenuMobile";
import LoopingHeader from "../../components/ui/LoopingHeader";

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

    //calc screen height
    const [copyHeight, setCopyHeight] = useState("initial");

    const dynamicSkillsCopy = useRef();
    const dynamicWorkCopy = useRef();
    const dynamicStoryCopy = useRef();
    const dynamicHobbiesCopy = useRef();

    const setHeight = () => {
        if (
            dynamicWorkCopy.current &&
            dynamicSkillsCopy.current &&
            dynamicStoryCopy.current &&
            dynamicHobbiesCopy.current
        ) {
            const workCopyHeight =
                dynamicWorkCopy.current.getBoundingClientRect().height;

            dynamicSkillsCopy.current.style.height = `${workCopyHeight}px`;
            dynamicStoryCopy.current.style.height = `${workCopyHeight}px`;
            dynamicHobbiesCopy.current.style.height = `${workCopyHeight}px`;

            setCopyHeight(Math.max(workCopyHeight, 200));
        }
    };

    useEffect(() => {
        setHeight();

        // Call setHeight whenever the window is resized
        window.addEventListener("resize", setHeight);
        return () => {
            window.removeEventListener("resize", setHeight);
        };
    }, []);

    const copyHeader =
        "text-[1rem] min-h-[48px] lg:text-[1.5rem] 2xl:text-[2rem] font-medium font-encode text-primary";
    const copyBody =
        "text-[0.85rem] overflow-clip mt-2 w-full text-white font-light lg:justify-between flex flex-col font-encode md:text-[1.2rem] 2xl:text-[1.4rem]";

    const skillsCopy = (
        <div ref={dynamicSkillsCopy} style={{ minHeight: copyHeight }}>
            <h3 className={copyHeader}>{aboutCopy[0].title}</h3>
            <p className={copyBody}>
                {aboutCopy[0].copy.split("\n").map((paragraph, index) => (
                    <React.Fragment key={index}>
                        {paragraph}
                        <br />
                    </React.Fragment>
                ))}
            </p>
        </div>
    );

    const workCopy = (
        <div ref={dynamicWorkCopy} style={{ minHeight: copyHeight }}>
            <h3 className={copyHeader}>{aboutCopy[1].title}</h3>
            <p className={copyBody}>
                {aboutCopy[1].copy.split("\n").map((paragraph, index) => (
                    <React.Fragment key={index}>
                        {paragraph}
                        <br />
                    </React.Fragment>
                ))}
            </p>
        </div>
    );

    const storyCopy = (
        <div ref={dynamicStoryCopy} style={{ minHeight: copyHeight }}>
            <h3 className={copyHeader}>{aboutCopy[2].title}</h3>
            <p className={copyBody}>
                {aboutCopy[2].copy.split("\n").map((paragraph, index) => (
                    <React.Fragment key={index}>
                        {paragraph}
                        <br />
                    </React.Fragment>
                ))}
            </p>
        </div>
    );

    const hobbiesCopy = (
        <div ref={dynamicHobbiesCopy} style={{ minHeight: copyHeight }}>
            <h3 className={copyHeader}>{aboutCopy[3].title}</h3>
            <p className={copyBody}>
                {aboutCopy[3].copy.split("\n").map((paragraph, index) => (
                    <React.Fragment key={index}>
                        {paragraph}
                        <br />
                    </React.Fragment>
                ))}
            </p>
        </div>
    );

    return (
        // Section Container
        <section
            className="mx-auto flex w-full flex-col rounded-[2rem] px-10 pb-6 pt-4 text-[#FFFDFA] lg:min-h-[80vh] lg:px-24 lg:pt-16"
            id="about">
            {/* About section title  */}
            <LoopingHeader
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
                width={`100%`}
                direction={"left"}
            />

            {/* About content  */}
            <div className="flex w-full flex-col mt-6 lg:mt-10 lg:flex-row">
                {/* Sidebar buttons */}
                <div className=" hidden lg:flex lg:flex-col">
                    <MenuSidebar onToggle={handleCopyToggle} />
                </div>
                {/*Text container */}
                <div className="flex-2 flex w-full flex-col justify-between overflow-clip py-2 lg:my-4 lg:w-full lg:px-4 lg:py-4">
                    {showSkills && skillsCopy}
                    {showWork && workCopy}
                    {showStory && storyCopy}
                    {showHobbies && hobbiesCopy}
                </div>
                {/* Image container */}
                <div className="flex-3 mx-auto flex w-[100%] justify-end lg:h-[90%] lg:justify-center lg:p-4">
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
                        loading="lazy"
                        className="mx-auto h-full w-full rounded-[2rem] object-cover md:max-h-[50dvh]"
                    />
                </div>
                <div className="bottom-0 mt-2 flex h-fit flex-col justify-end lg:hidden">
                    <hr className="mb-4 ml-2 block h-[1px] w-[95%] animate-gradient rounded border-0 bg-gradient-to-r from-primary to-[#cbb7f7] " />
                    <AboutMenuMobile onToggle={handleCopyToggle} />
                </div>
                {/* about tile ends above */}
            </div>
        </section>
    );
};

export default AboutPanel;
