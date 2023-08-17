import { images } from "../../data/index";

const IconTile = () => {
    const iconsIndex = [
        { image: "html", label: "HTML5" },
        { image: "css", label: "CSS3" },
        { image: "tailwindCSS", label: "TailwindCSS" },
        { image: "js", label: "JavaScript" },
        { image: "typescript", label: "Typescript" },
        { image: "react", label: "React" },
        { image: "nextjs", label: "Next.js" },
    ];

    return (
        <section className=" flex flex-row flex-wrap self-start">
            {iconsIndex.map((icon) => (
                <div
                    key={icon.label}
                    className="my-2 mr-3 flex flex-col lg:mr-5 animate__fadeInUp animate__animated [animation-delay:1.5s]">
                    <img
                        src={images[icon.image]}
                        alt={`${icon.label} icon`}
                        key={icon.image}
                        className="mx-auto aspect-square max-h-[20px] object-contain lg:max-h-[30px] xl:max-h-[40px]"
                    />
                    <p className="mt-2 h-full justify-center self-center text-center align-middle text-xs font-thin text-[#FFFDFA] xl:text-lg">
                        {icon.label}
                    </p>
                </div>
            ))}
        </section>
    );
};
export default IconTile;
