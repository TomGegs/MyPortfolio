import React from "react";
import { images } from "../../data/index";
import Header from "../../components/ui/Header";
import ContactIcons from "./ContactIcons";

const Contact = () => {
    return (
        //wrapper
        <footer
            className="grid-row-3 align-left grid pb-4 text-[#FFFDFA] lg:px-48"
            id="contact">
            {/* Img Wrapper */}
            <div className="relative w-full lg:max-h-[80vh]">
                <img
                    src={images.ContactImage}
                    alt="Coffee and laptop in cafe"
                    className="w-[100%] flex-1 rounded-[2rem] border-0 object-cover p-2 lg:h-[95%] lg:p-0"
                />
                <div>
                    {/* Text box */}
                    <div className="left-24 top-24 z-10 flex flex-col rounded-[2rem] lg:absolute lg:w-[55%] lg:min-w-[500px] lg:shadow-md xl:max-w-[650px] ">
                        <div className=" -inset-2 hidden h-full w-full animate-gradientFast bg-gradient-to-r from-primary via-secondary to-altSecond blur-lg lg:absolute lg:block lg:px-1 lg:py-1" />
                        <div className="w-full rounded-[2rem] lg:relative lg:bg-black/90 lg:px-6 lg:py-12">
                            <Header
                                title={"Let's grab a coffee and have a chat!"}
                                block={`hidden`}
                            />
                            <p className="font-encode font-thin">
                                Let's chat about how I can help you achieve your
                                goals by utilising my experience in software
                                development, product management, and driving
                                business growth.
                            </p>
                            <h3 className="py-6 font-encode font-light">
                                Connect with me on:
                            </h3>
                            {/* Contact Icons */}
                            <div className="mx-auto flex w-full px-4 lg:px-0 ">
                                <ContactIcons />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* Copywrite footer */}
                <hr className="mb-2 mt-4 h-[1px] w-[full] animate-gradient rounded border-0 bg-gradient-to-r from-primary via-secondary to-[#cbb7f7] lg:-mt-3 lg:mb-2" />
                <p className="text-center text-xs text-[#FFFDFA]">
                    &copy; {new Date().getFullYear()} | Designed and coded by
                    Tom Geoghegan
                </p>
            </div>
        </footer>
    );
};

export default Contact;
