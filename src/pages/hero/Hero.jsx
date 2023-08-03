import React from "react";
import { Link } from "react-scroll";

import { images } from "../../data/index";
import ButtonAlt from "../../components/ui/ButtonAlt";
import SocialLinks from "../../components/ui/SocialLinks";
import ButtonDownloadHandler from "../../components/ui/ButtonDownloadHandler";

const Hero = () => {
    return (
        // Container
        <div
            id="hero"
            className="mx-auto flex h-[85vh] min-h-[660px] w-full flex-col-reverse items-center justify-center overflow-hidden rounded-b-[2rem] bg-bgSecondary shadow-xl shadow-stone-900 lg:min-h-[85vh] lg:flex-row lg:px-24 lg:py-32 ">
            {/* Left Side - container*/}
            <div className="mx-auto flex w-full flex-col justify-center lg:max-w-[60%] lg:pt-12 ">
                {/* Title and sub-title */}
                <div className="relative flex w-full flex-shrink flex-col px-4 text-center lg:px-0 lg:text-left">
                    <h1 className="block animate-gradient bg-gradient-to-r from-primary via-green-300 to-[#8553F4] bg-clip-text font-encode text-[2rem] font-semibold leading-tight text-transparent md:text-[2.5rem] lg:text-[3rem] 2xl:text-[5rem]">
                        Frontend React Developer <br />
                        <span className="font-thin">
                            building user-centric solutions
                        </span>
                    </h1>

                    <p className="mt-6 font-encode font-thin leading-normal text-[#FFFDFA] lg:mt-8 xl:text-[1.5rem]">
                        Hi, I'm Tom{" "}
                        <span className="inline-flex animate-wave">👋</span>
                        <br /> A Front-end developer, life-long learner and
                        start-up enthusiast. <br /> Let grab a coffee and have a
                        chat!
                    </p>
                </div>

                {/* Buttons */}
                <div className="my-6 flex justify-center lg:my-10 lg:justify-start">
                    <ButtonDownloadHandler
                        label={"Download My Resumé"}
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
                        <ButtonAlt label={"View My Projects"} newTab={false}/>
                    </Link>
                </div>
                {/* Desktop social icons */}
                <div className="hidden self-start lg:flex  ">
                    <SocialLinks size={40} pulse={"flex"} />
                </div>
                {/* Mobile social icons */}
                <div className="self-center pb-12 md:pb-0  lg:hidden  ">
                    <SocialLinks size={25} pulse={"hidden"} />
                </div>
            </div>

            {/* Right Side */}
            <div className="relative z-10 mx-auto mb-8 flex w-[300px] justify-center lg:mb-0 lg:w-[700px] lg:px-3">
                {/* headshot image */}
                <div className=" absolute bottom-0 h-[85%] w-full animate-gradientFast rounded-[25%] bg-gradient-to-b from-primary/25 via-secondary/40 to-altSecond/50 blur-2xl lg:h-[80%] lg:w-[70%] lg:blur-[7rem] " />
                <img
                    src={images.myHeadshot}
                    alt="headshot"
                    className="relative z-10 mt-6 w-56 object-cover lg:w-fit"
                />
                {/* Background floating elements */}
                <img
                    src={images.heroElementBackground}
                    alt="background element"
                    className="absolute left-[7rem] top-[2rem] -z-10 w-[100px] flex-shrink animate-bobbing blur-[1px] lg:w-[200px] lg:blur-[2px]"
                />
                <img
                    src={images.heroElementBackground}
                    alt="background element"
                    className="absolute -top-[3rem] left-[0rem] -z-10 w-[100px] flex-shrink animate-bobbingFast blur-[1px] delay-[300ms] lg:w-[200px] lg:blur-[2px]"
                />
                <img
                    src={images.heroElementBackground}
                    alt="background element"
                    className="absolute -bottom-[2rem] right-[0rem] -z-10 w-[100px] flex-shrink animate-bobbing blur-[1px] delay-200 lg:w-[200px] lg:blur-[2px]"
                />
                <img
                    src={images.heroElementBackground}
                    alt="background element"
                    className="absolute -bottom-[7rem] right-[10rem] -z-10 w-[100px] flex-shrink animate-bobbingFast blur-[1px] delay-300 lg:-right-[6rem] lg:w-[200px] lg:blur-[2px]"
                />
            </div>
        </div>
    );
};

export default Hero;
