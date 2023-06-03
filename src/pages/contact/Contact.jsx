import React from "react";
import SocialLinks from "../../components/ui/SocialLinks";

const Contact = () => {
    return (
        //wrapper
        <footer className="grid-row-2 grid px-8">
            {/* Top content */}
            <div className="flex h-screen flex-col items-center justify-center gap-y-6 bg-bgPrimary text-white lg:flex-row">
                {/* Left content */}
                <div className="flex w-full flex-col">
                    <h2 className="animate-gradient bg-gradient-to-r from-primary via-green-300 to-[#8553F4] bg-clip-text py-4 font-encode text-4xl text-[2.5rem]  font-bold text-transparent">
                        Let's grab a coffee and have a chat!
                    </h2>
                    <p>image to go there</p>
                </div>

                {/* Right content */}
                <div className="flex flex-col justify-start">
                    <p>
                        Are you in need of a front-end developer for your
                        business or project? How about someone who brings a
                        unique blend of expertise in software development,
                        product management, and driving business growth?
                    </p>
                    <p className="my-4 text-xl ">
                        Email: <a href="">tomgegs@outlook.com</a>
                    </p>
                    <p className="text-xl">
                        Phone: <a href="">+44 123456789</a>
                    </p>
                </div>
            </div>
            {/* Bottom content */}
            <SocialLinks />
        </footer>
    );
};

export default Contact;
