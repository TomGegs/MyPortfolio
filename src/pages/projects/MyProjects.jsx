import React from "react";
import ButtonMain from "../../components/ui/ButtonMain";
import ButtonAlt from "../../components/ui/ButtonAlt";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import "animate.css";

const MyProjects = ({
    title,
    summary,
    description,
    techUsed,
    img1,
    button1Url,
    button2Url,
    reverse,
}) => {
    const appearBottom = keyframes`
    from {
      opacity: 0;
      transform: translate(0px, 50px);
    }

    to {
      opacity: 1;
      transform: translate(0, 0, 0);
    }
  `;

    return (
        <div
            className={`my-6 flex flex-col items-center  lg:my-64 ${
                reverse === "true"
                    ? "lg:flex-row-reverse"
                    : "gap-x-14 lg:flex-row"
            }`}>
            {/* LEFT side - images */}
            <div
                className="mx-auto flex w-fit md:w-full "
                style={{ backfaceVisibility: "hidden" }}>
                <Reveal
                    keyframes={appearBottom}
                    duration={2000}
                    direction="up"
                    triggerOnce={true}
                    fraction={1}>
                    <img
                        src={img1}
                        alt=""
                        className="animate__animated animate__fadeInUp animate__slideInUp flex  lg:w-[80vw]"
                    />
                </Reveal>
            </div>
            {/* RIGHT side - text */}
            <div className="flex h-full w-full flex-col  ">
                {/* Project summary */}
                <p className="hidden font-thin text-gray-300 md:flex">
                    {summary}
                </p>
                {/* Project title */}
                <h3 className="my-4 animate-gradient bg-gradient-to-r from-primary via-green-300 to-[#8553F4] bg-clip-text font-encode text-[1.8rem] text-transparent  md:text-[2.5rem] md:font-semibold xl:text-[3rem]">
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
                    <ButtonAlt label={"Github Code"} url={button2Url} />
                </div>
            </div>
        </div>
    );
};

export default MyProjects;
