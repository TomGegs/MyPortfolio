import React from "react";
import { images } from "../../data/index";
import EmailIconButton from "../../components/ui/EmailIconButton";

const ContactIcons = () => {
    return (
        <div className="grid h-24 w-full grid-cols-3 grid-rows-2 gap-x-10 break-words text-center text-sm ">
            <div className="-mb-4 flex flex-col items-center justify-center">
                <EmailIconButton size={40} pulse={'flex'}/>
            </div>

            <div className="flex flex-col items-center justify-center">
                <a href="0407250035">
                    <images.phoneIcon
                        size={40}
                        className="duration-150 ease-in-out hover:cursor-pointer hover:text-primary"
                    />
                </a>
            </div>
            <div className="flex flex-col items-center justify-center">
                <a href="https://www.linkedin.com/in/thomas-geoghegan/">
                    <images.linkedinIcon
                        size={40}
                        className="duration-150 ease-in-out hover:cursor-pointer hover:text-primary"
                    />
                </a>
            </div>
            <div className="text-[0.6rem] min-[300px]:text-[0.48rem]  min-[321px]:text-[0.6rem]  lg:text-sm">
                <p className="block max-[319px]:hidden">
                    tomgegs
                    <br className="block sm:hidden" />
                    @outlook.com
                </p>
            </div>
            <div className="text-[0.6rem] min-[300px]:text-[0.48rem]  min-[321px]:text-[0.6rem] lg:text-sm">
                <p className="block max-[319px]:hidden">0407 250 035</p>
            </div>
            <div className="text-[0.6rem] min-[300px]:text-[0.48rem] min-[321px]:text-[0.6rem] lg:text-sm">
                <p className="block max-[319px]:hidden">
                    /in/thomas-geoghegan/
                </p>
            </div>
        </div>
    );
};

export default ContactIcons;
