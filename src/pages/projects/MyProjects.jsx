import React from "react";
import ButtonMain from "../../components/ui/ButtonMain";
import ButtonAlt from "../../components/ui/ButtonAlt";

const MyProjects = ({
    title,
    summary,
    description,
    techUsed,
    projectImage,
    button1Url,
    button2Url,
}) => {
    return (
        <div className={`my-6 flex w-full flex-col content-start`}>
            <img
                src={projectImage}
                alt="Project mockup"
                className="w-full lg:max-w-[600px]"
            />
            {/* Project summary */}
            <p className="hidden font-thin text-gray-300 md:flex">{summary}</p>
            {/* Project title */}
            <h3 className="my-4 animate-gradient bg-gradient-to-r from-primary via-green-300 to-[#8553F4] bg-clip-text font-encode text-[2rem] font-light text-transparent md:text-[2.5rem] xl:text-[3rem]">
                {title}
            </h3>
            {/* Project description */}
            <p className="font-encode md:max-w-[90%] md:text-lg">
                {description}
            </p>
            {/* technology used to build project */}
            <p className="my-4">
                <span className="font-bold">Build with:</span> {techUsed}
            </p>
            {/* button 1 and button 2 url links */}
            <div className="flex flex-row ">
                <ButtonMain label={"View Site"} url={button1Url} />
                <ButtonAlt
                    label={"Github Code"}
                    url={button2Url}
                    newTab={true}
                />
            </div>
        </div>
    );
};

export default MyProjects;
