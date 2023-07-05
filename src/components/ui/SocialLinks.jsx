import React from "react";
import { images } from "../../data/index";
import EmailIconButton from "./EmailIconButton";

const SocialLinks = ({ size, pulse }) => {
    return (
        // Container
        <div className="relative mx-auto flex flex-row gap-16 text-[#FFFDFA]">
            {/* Icons */}
            <a href="https://www.linkedin.com/in/thomas-geoghegan/">
                <images.linkedinIcon
                    size={size}
                    className="duration-150 ease-in-out hover:cursor-pointer hover:text-primary "
                />
            </a>

            <a href="https://github.com/TomGegs">
                <images.gitHubIcon
                    size={size}
                    className="duration-150 ease-in-out hover:cursor-pointer hover:text-primary"
                />
            </a>
            {/* Email icon - auto-generate and open email */}
            <EmailIconButton size={size} pulse={pulse}/>
        </div>
    );
};

export default SocialLinks;
