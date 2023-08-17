import React from "react";
import { Link } from "react-scroll";

import ButtonAlt from "../../components/ui/ButtonAlt";
import ButtonDownloadHandler from "../../components/ui/ButtonDownloadHandler";
import IconTile from "../about/IconTile";

const Hero = () => {
    return (
        <section
            id="hero"
            className="mx-auto mt-12 flex h-[75vh] min-h-[660px] w-full flex-col justify-center px-10 lg:min-h-[85vh] lg:px-24 ">
            <div className="absolute -z-10 -mx-10 h-[75%] w-[95%] animate-gradientFast rounded-3xl bg-gradient-to-b from-primary/25 via-secondary/40 to-altSecond/50 blur-[140px] lg:w-[75%] lg:opacity-60 lg:blur-[180px] " />

            <div className="mx-auto flex w-full flex-col justify-center pt-12 ">
                {/* Title and sub-title */}
                <h1 className="block animate-gradient bg-gradient-to-r from-primary via-green-300 to-[#8553F4] bg-clip-text font-encode text-[2.5rem] font-semibold leading-tight text-transparent lg:text-[3.5rem] 2xl:text-[5.5rem]">
                    Frontend React Developer <br />
                </h1>
                <p className="mt-3 font-encode font-thin leading-normal text-[#FFFDFA] lg:mt-8 xl:text-[1.5rem]">
                    Hi, I'm Tom{" "}
                    <span className="inline-flex animate-wave">👋</span>
                    <br /> A Front-end developer, life-long learner and start-up
                    enthusiast. <br className="hidden lg:block" /> Let grab a
                    coffee and have a chat!
                </p>
                {/* Buttons */}
                <div className="my-3 flex justify-start lg:my-10">
                    <ButtonDownloadHandler
                        label={"Download Resumé"}
                        fileName={"TomGeoghegan_Resume.pdf"}
                        filePath={"./files/TomGeoghegan_Resume.pdf"}
                        styling={
                            "my-2 flex transform cursor-pointer rounded-lg border border-primary bg-primary px-[16px] py-3 text-center font-encode text-[0.8rem] font-light text-white transition-transform hover:border-altSecond hover:bg-altSecond focus:outline-none active:scale-[98%] lg:px-8 lg:py-4 lg:text-lg"
                        }
                    />
                    <Link
                        to={"projects"}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        <ButtonAlt label={"View Projects"} noNewTab={true} />
                    </Link>
                </div>

                {/* Language/Framework icons */}
                <IconTile />
            </div>

            {/* background elements */}
        </section>
    );
};

export default Hero;
