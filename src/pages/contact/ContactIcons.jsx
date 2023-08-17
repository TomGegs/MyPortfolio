import React from "react";
import { images } from "../../data/index";
import EmailIconButton from "../../components/ui/EmailIconButton";

const ContactIcons = () => {
    return (
        <div className="h-[70px] w-full flex flex-row justify-between break-words text-center text-sm ">
            <div className=" flex flex-col items-center justify-center ">
                <EmailIconButton size={40} pulse={"flex"} />
                <p className="hidden text-[0.6rem] h-full items-end min-[300px]:text-[0.48rem] min-[321px]:text-[0.6rem] lg:flex lg:text-sm">
                    tomgegs@outlook.com
                </p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <a href="tel:0407250035">
                    <images.phoneIcon
                        size={40}
                        className="duration-150 ease-in-out hover:cursor-pointer hover:text-altSecond"
                    />
                </a>
                <p className="hidden text-[0.6rem] h-full items-end min-[300px]:text-[0.48rem] min-[321px]:text-[0.6rem]  lg:flex lg:text-sm">
                    0407 250 035
                </p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <a
                    href="https://www.linkedin.com/in/thomas-geoghegan/"
                    target="_blank"
                    rel="noreferrer">
                    <images.linkedinIcon
                        size={40}
                        className="duration-150 ease-in-out hover:cursor-pointer hover:text-altSecond"
                    />
                </a>
                <p className="hidden text-[0.6rem] h-full items-end  min-[300px]:text-[0.48rem] min-[321px]:text-[0.6rem] lg:flex lg:text-sm">
                    /in/thomas-geoghegan/
                </p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <a
                    href="https://github.com/TomGegs"
                    target="_blank"
                    rel="noreferrer">
                    <images.gitHubIcon
                        size={40}
                        className="duration-150 ease-in-out hover:cursor-pointer hover:text-altSecond"
                    />
                </a>
                <p className="hidden text-[0.6rem] h-full items-end min-[300px]:text-[0.48rem] min-[321px]:text-[0.6rem] lg:flex lg:text-sm">
                    /TomGegs
                </p>
            </div>
        </div>
    );
};

export default ContactIcons;
