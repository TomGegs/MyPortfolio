import React from "react";

const Header = ({ title, width, block }) => {
    return (
        <>
            <h2 className="animate-gradient bg-gradient-to-r from-primary via-green-300 to-[#8553F4] bg-clip-text pb-2.5 font-encode text-[2rem] text-transparent lg:mb-4 lg:text-[3rem] ">
                {title}
            </h2>
            <hr
                className={`${block} h-[1px] w-[${width}] animate-gradient rounded border-0  bg-gradient-to-r from-primary via-secondary to-[#cbb7f7]`}
            />
        </>
    );
};

export default Header;
