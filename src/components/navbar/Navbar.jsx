import { Link } from "react-router-dom";
import React, { useState } from "react";
import NavBgOnScroll from "../../hooks/NavOnScroll";

import { images } from "../../data/index";

function NavBar() {
    // Mobile menu toggle & state
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => setMobileMenu(!mobileMenu);

    // Change Navbar background on scroll
    const [navBarBackground] = NavBgOnScroll();

    return (
        <nav>
            {/* Container */}
            <div
                className={`absolute lg:fixed z-40 h-20 w-full items-center justify-end px-4 py-4 font-encode font-medium uppercase text-white transition-all duration-300 ease-in-out lg:mx-auto lg:flex lg:justify-between lg:px-20 lg:py-12 ${
                    // Navbar hook
                    navBarBackground
                        ? // on scroll changes to:
                          "rounded-b-xl border-none bg-[white]/25 bg-opacity-10 shadow-md backdrop-blur"
                        : // at top of page uses default class
                          ""
                } ${mobileMenu ? "hidden lg:block" : ""}`}>
                {/* Left side: website logo */}
                <Link to="/Home">
                    <img
                        src={images.bannerLogo}
                        alt="bannerLogo"
                        className="hidden lg:block"
                    />
                </Link>

                {/* Right side:  navigation items */}
                <div className="hidden space-x-4 text-center lg:flex">
                    <Link to="/about">
                        <p className="rounded-lg px-3 py-2 font-medium text-white hover:bg-slate-700 hover:text-primary">
                            About
                        </p>
                    </Link>

                    <Link to="/projects">
                        <p className="rounded-lg px-3 py-2 font-medium text-white hover:bg-slate-700 hover:text-primary">
                            Projects
                        </p>
                    </Link>

                    <Link to="/contact">
                        <p className="rounded-lg px-3 py-2 font-medium text-white hover:bg-slate-700 hover:text-primary">
                            Contact
                        </p>
                    </Link>

                    <Link to="/resume">
                        <button
                            type="button"
                            className="flex items-center rounded-lg bg-primary px-3 py-2 font-medium uppercase text-white hover:bg-altSecond">
                            Resume
                        </button>
                    </Link>
                </div>

                {/* Show burgerMenu icon on mobile screens */}
                <div className="z-50 flex  items-center justify-between px-4  lg:hidden">
                      <images.burgerMenu size={25} onClick={toggleMenu} />
                    <Link to="/Home">
                        <img
                            src={images.bannerLogo}
                            alt="bannerLogo"
                            className="flex w-32 overflow-clip  lg:hidden"
                        />
                    </Link>
                </div>
            </div>

            {/* Mobile links */}
            <div
                className={
                    mobileMenu
                        ? "fixed left-0 top-0 z-50 h-full w-[60%] border-r border-r-gray-900 bg-[white]/25 bg-opacity-50 shadow-md backdrop-blur duration-500 ease-in-out hover:cursor-pointer"
                        : "fixed left-[-100%]"
                }>
                  <img src={images.logoIcon} alt="logo" className=" w-24 p-4" />
               
                <ul className="p-4 uppercase text-[white]">
                    <li className="border-y border-primary p-4">About</li>
                    <li className="border-b border-primary p-4">Projects</li>
                    <li className="border-b border-primary p-4">Contact</li>
                    <li className="border-b border-primary p-4">Resume</li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
