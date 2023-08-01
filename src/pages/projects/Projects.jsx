import React from "react";
import { images } from "../../data";
import MyProjects from "./MyProjects";
import Header from "../../components/ui/Header";

const Projects = () => {
    return (
        <div
            id="projects"
            className="flex h-full w-full flex-col rounded-[2rem] bg-bgSecondary px-10 pb-6 pt-4 font-encode text-[#FFFDFA] lg:px-48 lg:py-12">
            {/* Header and divider */}
            <Header title={"My Projects"} width={`100%`} />
            <h3 className="pt-2.5 font-encode text-[1rem] font-medium text-primary lg:pt-6 xl:text-[1.5rem]">
                A collection of things I've built (aka My Collection Selection)
            </h3>

            {/* All Project container */}
            <div className=" flex h-full w-full flex-col px-4 ">
                {/* Project 1 */}

                <MyProjects
                    title={"Copi.Rite"}
                    summary={
                        "Simple UI to guide users through the process of generating digital marketing copy with AI"
                    }
                    description={
                        "Utilises OpenAI's API to generate digital marketing copy based on user's inputs. The interface guides users through simple steps to help them generate AI marketing copy for their product or service"
                    }
                    techUsed={"Next.js, TypeScript, TailwindCSS"}
                    img1={images.CopiRite}
                    button1Url={"https://copi-rite.netlify.app/"}
                    button2Url={
                        "https://github.com/TomGegs/copi-rite-AI-marketing"
                    }
                    reverse={"false"}
                />
                {/* Project 2 */}
                <MyProjects
                    title={"Copi.Rite MvP"}
                    summary={"First iteration of Copi.Rite"}
                    description={
                        "First iteration of Copi.Rite. Targeted the minimum viable function of the application's purpose of simplifying the process of generating digital marketing copy with AI."
                    }
                    techUsed={"Next.js, TypeScript, TailwindCSS"}
                    img1={images.CopiRiteV1}
                    button1Url={"https://goodcopyright.netlify.app/"}
                    button2Url={
                        "https://github.com/TomGegs/copywriting-ai-product"
                    }
                    reverse={"true"}
                />
                <MyProjects
                    title={"OpenAI's Dall-E Clone"}
                    summary={"Text to image generator application"}
                    description={
                        "Utilises OpenAI's API to generate images from text. The application is built with React and TailwindCSS and deployed on Netlify."
                    }
                    techUsed={"React, Redux, Node, MongoDB, Cl Javascript"}
                    img1={images.ProjectDALLEClone}
                    button1Url={""}
                    button2Url={""}
                    reverse={"false"}
                />
                {/* Project 2 */}
                <MyProjects
                    title={"E-commerce Clothing Store"}
                    summary={"E-commerce website with Stripe payment"}
                    description={
                        "E-commerce website built with React front-end and Strapi backend. Users can browse products, add to cart, and checkout using Stripe. Admins can add, edit, and delete products from the Strapi admin dashboard."
                    }
                    techUsed={"React, Redux, Node, Javascript"}
                    img1={images.ProjectClothingStore}
                    button1Url={""}
                    button2Url={""}
                    reverse={"true"}
                />

                {/* Project 3  */}
                <MyProjects
                    title={"Weather App"}
                    summary={"Daily weather forecast application"}
                    description={
                        "Daily weather forecast application, built with React and TailwindCSS and deployed on Netlify. Users can search for a city and view the current weather and 7 day forecast."
                    }
                    techUsed={"React, Redux, Node, Javascript"}
                    img1={images.ProjectWeatherApp}
                    button1Url={""}
                    button2Url={""}
                    reverse={"false"}
                />
                {/* Project 4 */}
                <MyProjects
                    title={"Application to generate Spotify playlists"}
                    summary={"Spotify Playlist Generator"}
                    description={
                        "Application to generate Spotify playlists based on user input, with users connecting their Spotify account via an API. The application is built with React and TailwindCSS and deployed on Netlify."
                    }
                    techUsed={"React, Redux, Node, Javascript"}
                    img1={images.ProjectsSpotifyPlaylist}
                    button1Url={""}
                    button2Url={""}
                    reverse={"true"}
                />
                {/* Project 5 */}
                <MyProjects
                    title={"Business Website"}
                    summary={"Financial services website"}
                    description={
                        "Financial services website promoting a mobile application financial tracker, BeanBoard. The application is  built with React and TailwindCSS and deployed on Netlify."
                    }
                    techUsed={"React, Redux, Node, NextJS, Javascript"}
                    img1={images.ProjectFinanceWebsite}
                    button1Url={""}
                    button2Url={""}
                    reverse={"false"}
                />
            </div>
        </div>
    );
};

export default Projects;
