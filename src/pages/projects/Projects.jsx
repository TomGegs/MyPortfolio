import React from "react";
import { images } from "../../data";
import MyProjects from "./MyProjects";
import IconTile from "../about/IconTile";

const Projects = () => {
    return (
        <div className="flex h-full w-full flex-col rounded-[2rem] bg-bgSecondary px-10 pb-6 pt-4 font-encode text-white md:px-48 md:py-12">
            {/* Header and divider */}
            <h2 className="animate-gradient bg-gradient-to-r from-primary via-green-300 to-[#8553F4] bg-clip-text pb-2.5 font-encode text-[2.5rem] text-transparent md:mb-4 xl:text-[3rem]">
                Projects
            </h2>
            {/* Divider animated */}
            <hr className="block h-[1px] w-[100%] animate-gradient rounded border-0 bg-gradient-to-r from-primary via-secondary to-[#cbb7f7]" />
            <h3 className="pt-2.5 text-[1.2rem] font-medium text-primary lg:pt-6 xl:text-[1.5rem]">
                A small collection of things I've built
            </h3>

            {/* All Project container */}
            <div className=" flex h-full w-full flex-col px-4 ">
                {/* Project 1 */}
                <MyProjects
                    title={"Open Ai's Dall-E Clone"}
                    summary={"Text to image generator application"}
                    description={
                        "Utilizes OpenAI's API to generate images from text. The application is built with React and TailwindCSS. The application is deployed on Netlify."
                    }
                    techUsed={"React, Redux, Node, Javascript"}
                    img1={images.laptopMockup}
                    img2={images.mobileMockup}
                    button1Url={""}
                    button2Url={""}
                    reverse={"false"}
                />
                {/* Project 2 */}
                <MyProjects
                    title={"E-commerce Clothing Store"}
                    summary={"E-commerce Website with Stripe payment"}
                    description={
                        "E-commerce website built with React front-end and Strapi backend. Users can browse products, add to cart, and checkout using Stripe. Admins can add, edit, and delete products from the Strapi admin dashboard."
                    }
                    techUsed={"React, Redux, Node, Javascript"}
                    img1={images.laptopMockup}
                    img2={images.mobileMockup}
                    button1Url={""}
                    button2Url={""}
                    reverse={"true"}
                />
                {/* Project 3  */}
                <MyProjects
                    title={"Weather App"}
                    summary={"Daily weather forecast application"}
                    description={
                        "Daily weather forecast application built with React and TailwindCSS. The application is deployed on Netlify."
                    }
                    techUsed={"React, Redux, Node, Javascript"}
                    img1={images.laptopMockup}
                    img2={images.mobileMockup}
                    button1Url={""}
                    button2Url={""}
                    reverse={"false"}
                />
                {/* Project 4 */}
                <MyProjects
                    title={"Spotify Playlist Generator"}
                    summary={"Application to generate Spotify playlists"} 
                    description={
                        "Application to generate Spotify playlists based on user input. User's connect to their Spotify account via The application is built with React and TailwindCSS. The application is deployed on Netlify."
                    }
                    techUsed={"React, Redux, Node, Javascript"}
                    img1={images.laptopMockup}
                    img2={images.mobileMockup}
                    button1Url={""}
                    button2Url={""}
                    reverse={"true"}
                />
                {/* Project 5 */}
                <MyProjects
                    title={"Business Website"}
                    summary={"Financial services website"}
                    description={
                        "Financial services website built with React and TailwindCSS. Website promoting mobile application financial tracker, BeanBoard. The application is deployed on Netlify."
                    }
                    techUsed={"React, Redux, Node, NextJS, Javascript"}
                    img1={images.laptopMockup}
                    img2={images.mobileMockup}
                    button1Url={""}
                    button2Url={""}
                    reverse={"false"}
                />
            </div>
        </div>
    );
};

export default Projects;
