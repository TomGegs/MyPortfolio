import React from "react";
import ButtonMain from "../../components/ui/ButtonMain";
import ButtonAlt from "../../components/ui/ButtonAlt";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const MyProjects = ({
    title,
    summary,
    description,
    techUsed,
    img1,
    img2,
    button1Url,
    button2Url,
    reverse,
}) => {
    const appearRight = keyframes`
    from {
      opacity: 0;
      transform: translate(100px, 0px);
    }

    to {
      opacity: 1;
      transform: translate(0, 0, 0);
    }
  `;

    const appearLeft = keyframes`
    from {
      opacity: 0;
      transform: translate(-150px, 0px);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `;

    return (
        <div
            className={`flex flex-col md:my-72 md:flex  ${
                reverse === "true" ? "md:flex-row-reverse" : "md:flex-row"
            }`}>
            {/* LEFT side - images */}
            <div
                className="relative my-20 h-[15vh] w-full md:h-[0vh]"
                style={{ backfaceVisibility: "hidden" }}>
                <Reveal
                    keyframes={appearRight}
                    duration={2000}
                    triggerOnce={true}
                    fraction={1}
                    delay={100}>
                    <img
                        src={img1}
                        alt=""
                        className="absolute right-[0%] top-[15%] w-64 md:-top-[40%] md:right-[10%] md:w-[30vw]"
                    />
                </Reveal>
                <Reveal
                    keyframes={appearLeft}
                    duration={2000}
                    triggerOnce={true}
                    fraction={1}
                    delay={100}>
                    <img
                        src={img2}
                        alt=""
                        className="absolute -left-[20%] top-[15%] w-64 md:-left-[5%] md:top-[25%] md:w-[25vw]"
                    />
                </Reveal>
            </div>
            {/* RIGHT side - text */}
            <div className="flex h-full w-full flex-col">
                {/* Project summary */}
                <p className="hidden font-thin text-gray-300 md:flex">
                    {summary}
                </p>
                {/* Project title */}
                <h3 className="my-4 animate-gradient bg-gradient-to-r from-primary via-green-300 to-[#8553F4] bg-clip-text font-encode text-[2.5rem]  text-transparent md:font-semibold xl:text-[3rem]">
                    {title}
                </h3>
                {/* Project description */}
                <p className="font-encode md:w-[85%] md:text-lg">
                    {description}
                </p>
                {/* technology used to build project */}
                <p className="my-4">
                    <span className="font-bold">Build with:</span> {techUsed}
                </p>
                {/* button 1 and button 2 url links */}
                <div className="flex flex-row ">
                    <ButtonMain label={"View Site"} url={button1Url} />
                    <ButtonAlt label={"Github Repo"} url={button2Url} />
                </div>
            </div>
        </div>
    );
};

export default MyProjects;
