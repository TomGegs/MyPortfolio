import React from "react";

const ButtonAlt = ({ label, icon, url }) => {
    return (
        <div>
            <button
                type="button"
                onClick={() => window.open(url, "_blank")}
                className="m-2 flex cursor-pointer items-center rounded-lg border px-[16px] py-3 text-center font-encode text-[0.8rem] font-light text-white  hover:text-altSecond focus:outline-none active:scale-[98%] lg:px-8  lg:py-4 lg:text-lg">
                {label}
                {icon ? <span className=" ml-2  text-xl">{icon}</span> : null}
            </button>
        </div>
    );
};

export default ButtonAlt;
