import React from "react";
import { images } from "../../data";
import MyProjects from "./MyProjects";
import LoopingHeader from "../../components/ui/LoopingHeader";

const Projects = () => {
    return (
        <section
            id="projects"
            className="mx-auto flex h-full w-full flex-col rounded-[2rem] px-10 pb-6 pt-4 text-[#FFFDFA] lg:mb-24 lg:px-24 lg:pt-0 ">
            {/* Header and divider */}
            <LoopingHeader
                title={"My Projects"}
                width={`100%`}
                direction={"right"}
            />

            {/* All Project container */}
            <div className=" mt-4 flex h-full w-full flex-col gap-6 md:grid md:grid-cols-2">
                {/* Project 1 */}

                <MyProjects
                    title={"Copi.Rite"}
                    description={
                        "The interface guides users through simple steps to generate marketing copy for their product or service. Utilises OpenAI's API to generate digital marketing copy based on user's inputs. "
                    }
                    techUsed={"Next.js, TypeScript, TailwindCSS"}
                    projectImage={images.CopiRite}
                    button1Url={"https://copi-rite.netlify.app/"}
                    button2Url={
                        "https://github.com/TomGegs/copi-rite-AI-marketing"
                    }
                    reverse={"true"}
                />
                {/* Project 2 */}
                <MyProjects
                    title={"Copi.Lite"}
                    description={
                        "First iteration of Copi.Rite. Targeted the minimum viable function of the application's purpose of simplifying the process of generating digital marketing copy with AI."
                    }
                    techUsed={"Next.js, TypeScript, TailwindCSS"}
                    projectImage={images.CopiRiteV1}
                    button1Url={"https://goodcopyright.netlify.app/"}
                    button2Url={
                        "https://github.com/TomGegs/copywriting-ai-product"
                    }
                    reverse={"true"}
                />
                {/* Project 3 */}
                <MyProjects
                    title={"OpenAI's Dall-E Clone"}
                    description={
                        "Text to image generator clone of the DALL-E AI. Utilises OpenAI's API to generate images based on user's inputs"
                    }
                    techUsed={"React, Redux, Node, MongoDB, Javascript"}
                    projectImage={images.ProjectDALLEClone}
                    button1Url={"https://gegs-e-x-dall-e.netlify.app/"}
                    button2Url={
                        "https://github.com/TomGegs/AI-Image-generator-clone-DALL-E"
                    }
                    reverse={"false"}
                />

                {/* Project 5  */}
                <MyProjects
                    title={"Weather App"}
                    description={
                        "Daily weather forecast application, built with React and TailwindCSS and deployed on Netlify. Users can search for a city and view the current weather and 7 day forecast."
                    }
                    techUsed={"React, Javascript"}
                    projectImage={images.ProjectWeatherApp}
                    button1Url={
                        "https://weather-project-portfolio.netlify.app/"
                    }
                    button2Url={
                        "https://github.com/TomGegs/weather-application"
                    }
                    reverse={"false"}
                />
                {/* Project 6 */}
                <MyProjects
                    title={"Spotify playlists generator"}
                    description={
                        "Application to generate Spotify playlists based on user input, with users connecting their Spotify account via an API. "
                    }
                    techUsed={"React, Redux, Node, Javascript"}
                    projectImage={images.ProjectsSpotifyPlaylist}
                    button1Url={"https://spotifyplaylistproject.netlify.app/"}
                    button2Url={
                        "https://github.com/TomGegs/SpotifyPlaylistGenerator"
                    }
                    reverse={"true"}
                />
                {/* Project 7 */}
                <MyProjects
                    title={"Business Website"}
                    description={
                        "Financial services website promoting a mobile application financial tracker, BeanBoard."
                    }
                    techUsed={"HTML, CSS"}
                    projectImage={images.ProjectFinanceWebsite}
                    button1Url={"https://beanboard.netlify.app"}
                    button2Url={
                        "https://github.com/TomGegs/FinancialWebsiteLandingPage"
                    }
                    reverse={"false"}
                />
            </div>
        </section>
    );
};

export default Projects;
