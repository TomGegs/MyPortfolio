import React from "react";
import Marquee from "react-fast-marquee";
import { images } from "../../data";

const LoopingHeader = ({ title, width, direction }) => {
    return (
        <div className="max-w-[1920px]">
            <hr
                className={`block h-[1px] w-[${width}] animate-gradient rounded border-0  bg-gradient-to-r from-primary via-secondary to-[#cbb7f7]`}
            />
            <Marquee
                direction={direction}
                speed={30}
                autoFill
                pauseOnHover={true}
                className="animate__fadeIn animate__animated h-[80px] whitespace-nowrap [animation-delay:1.5s] lg:h-[120px]">
                <span className="animate-gradient truncate bg-gradient-to-r from-primary 	 via-green-300 to-[#8553F4] bg-clip-text font-encode text-[2rem] leading-none text-transparent lg:text-[3rem] ">
                    {title}
                </span>

                <img
                    src={images.logoIcon}
                    alt="logo"
                    className="flex h-[25px] px-10 lg:h-[35px]"
                />
            </Marquee>
            <hr
                className={`block h-[1px] w-[${width}] animate-gradient rounded border-0  bg-gradient-to-r from-primary via-secondary to-[#cbb7f7]`}
            />
        </div>
    );
};

export default LoopingHeader;
