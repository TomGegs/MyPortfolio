import React from "react";
import { images } from "../../data/index";
import ButtonMain from "../../components/ui/ButtonMain";
import ButtonAlt from "../../components/ui/ButtonAlt";
import SocialLinks from "../../components/ui/SocialLinks";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
    return (
        // Container
        <div className="mx-auto flex h-[90dvh] md:h-[65dvh] w-full flex-col-reverse items-center overflow-hidden rounded-b-[2rem] bg-bgSecondary shadow-xl shadow-stone-900 lg:h-[100dvh] lg:flex-row lg:px-24">
            {/* Left Side - container*/}
            <div className="mx-auto flex w-full flex-col justify-center lg:max-w-[60%] lg:pt-12 ">
                {/* Title and sub-title */}
                <div className="relative w-full px-4 text-center lg:px-0 lg:text-left">
                    <h1 className="block animate-gradient bg-gradient-to-r from-primary via-green-300 to-[#8553F4] bg-clip-text font-encode text-[2rem] font-semibold leading-tight text-transparent lg:text-[3rem] lg:text-[4rem] 2xl:text-[5rem]">
                        Front-end developer <br />
                        <span className="font-thin">
                            building user-centric solutions
                        </span>
                    </h1>

                    <p className="mt-12 lg:mt-8 font-encode font-thin leading-normal text-white xl:text-[1.5rem]">
                        Hi, I'm Tom{" "}
                        <span className="inline-flex animate-wave">👋</span>
                        <br /> A Front-end developer, life-long learner and
                        start-up enthusiast. <br /> Let grab a coffee and have a
                        chat!
                    </p>
                </div>

                {/* Buttons */}
                <div className="my-12 lg:my-8 flex justify-center lg:justify-start">
                    <ButtonMain label={"Download Resume"} />
                    <ButtonAlt label={"View portfolio"} />
                </div>

                <div className="hidden lg:block">
                    <SocialLinks />
                </div>
            </div>

            {/* Right Side */}
            <div className="relative z-20 mx-auto mb-8 w-[250px] place-content-center content-center items-center justify-center justify-items-center place-self-center self-center object-center lg:mb-0 lg:w-[800px] lg:px-3">
                {/* headshot image */}
                <div className="absolute bottom-0 -z-0 h-[50%] w-[100%] animate-gradient rounded-xl bg-gradient-to-l from-primary via-secondary to-altSecond lg:-translate-y-[12dvh] lg:bg-gradient-to-l " />
                <img
                    src={images.myHeadshot}
                    alt="headshot"
                    className="relative z-10 object-cover lg:-translate-y-[115px]"
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
