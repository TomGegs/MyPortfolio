import React from "react";
import { images } from "../../data/index";

const IconTile = () => {
    const iconsIndex = [
        { image: "html", label: "HTML5" },
        { image: "css", label: "CSS3" },
        { image: "js", label: "JavaScript" },
        { image: "react", label: "React" },
        { image: "nextjs", label: "Next.js" },
        { image: "vite", label: "Vite" },
        { image: "tailwindCSS", label: "Tailwind CSS" },
        { image: "sass", label: "SASS" },
        { image: "git", label: "Git" },
        { image: "vscode", label: "VS Code" },
        { image: "figma", label: "Figma" },
        { image: "gpt", label: "GPT4" },
    ];

    return (
        <div className="hidden w-full md:flex md:flex-col">
            <h3 className="text-md text-primary mb-2 xl:text-[1.5rem]">
                Technology & Tools I use:
            </h3>
            <div className="grid w-full flex-shrink grid-cols-6 p-2 gap-4 text-center text-black">
                {iconsIndex.map((icon) => (
                    <div
                        key={icon.label}
                        className="flex flex-col items-center">
                        <img
                            src={images[icon.image]}
                            alt={`${icon.label} icon`}
                            className="max-h-[50px] "
                        />
                        <p className="pt-2 text-sm font-semibold text-white">
                            {icon.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IconTile;
