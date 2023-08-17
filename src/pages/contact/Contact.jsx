import React from "react";
import { images } from "../../data/index";
import Header from "../../components/ui/Header";
import ContactIcons from "./ContactIcons";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        //wrapper
        <footer
            className="mx-auto flex h-full w-full flex-col rounded-[2rem] px-10 pb-2 pt-4 text-[#FFFDFA] lg:px-24 lg:pt-0 "
            id="contact">
            <Header title={"Contact"} width={`100%`} />
            {/* Img Wrapper */}
            <div className="relative flex h-full w-full flex-col pt-2 lg:flex-row lg:pt-5 ">
                <div className=" absolute top-4 h-[70%] w-[80%] animate-gradientFast rounded-[25%] bg-gradient-to-b from-primary/25 via-secondary/40 to-altSecond/50 blur-[120px] lg:top-20 lg:w-[30%] " />
                <img
                    src={images.myHeadshot}
                    alt="headshot of Tom Geoghegan"
                    className="z-10 h-[350px] w-fit flex-1 place-self-center rounded-[2rem] lg:mb-10  lg:h-[500px]"
                    loading="lazy"
                />
                {/* Text box */}
                <div className="align-center flex h-full w-full flex-col rounded-[2rem] object-center lg:relative lg:mx-12 lg:py-12">
                    <h3 className="pt-2.5 font-encode text-[1rem] font-medium text-primary xl:text-[1.5rem]">
                        Let's grab a coffee and chat!
                    </h3>
                    <p className="pt-4 font-thin">
                        Get in touch and let's find out how I can help you
                        achieve your goals in software development, product
                        management, and driving business growth.
                    </p>
                    <ContactForm />
                    {/* Contact Icons */}
                </div>
            </div>

            <div className="w-full">
                <ContactIcons />
                {/* Copywrite footer */}
                <p className="text-center text-xs pt-2 text-gray-600">
                    &copy; {new Date().getFullYear()} | Designed and coded by
                    Tom Geoghegan
                </p>
            </div>
        </footer>
    );
};

export default Contact;
