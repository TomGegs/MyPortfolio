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
        <div className="mb-4 flex w-[90%] flex-col justify-end">
            <h3 className="text-md mb-6 text-primary xl:text-[1.5rem] ">
                Technology & Tools I use:
            </h3>
            <div className="grid w-full auto-cols-auto grid-flow-col grid-rows-2  text-black ">
                {iconsIndex.map((icon) => (
                    <div
                        key={icon.label}
                        className="flex flex-col object-contain px-2">
                        <img
                            src={images[icon.image]}
                            alt={`${icon.label} icon`}
                            className="mx-auto aspect-square h-[50%] w-[50%] object-contain"
                        />
                        <p className="whitespace-nowrap pt-2 text-center text-xs font-thin text-[#FFFDFA]">
                            {icon.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default IconTile;
