/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: { encode: ["Encode Sans Semi Expanded", "sans-serif"] },
        extend: {
            colors: {
                primary: "#1bb7cc",
                secondary: "#0cb5a4",
                altSecond: "#8553F4",
                primaryDark: "#192442",
                bgPrimary: "#232323",
                bgSecondary: "#090909",
            },
            animation: {
                gradient: "gradient 5s infinite",
                bobbing: "bobbing 12s ease-in-out infinite",
                bobbingFast: "bobbing 7s ease-in-out infinite",
                fadeBottom: "fadeBottom 1s ease-in",
                wave: "wave 3s linear 3 3s",
                appearRight: "appearRight 2s ease-in-out 1",
                appearLeft: "appearLeft 2s ease-in-out 1",
            },

            keyframes: {
                gradient: {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
                wave: {
                    "0%": { transform: "rotate(0.0deg)" },
                    "15%": { transform: "rotate(14.0deg)" },
                    "30%": { transform: "rotate(-8.0deg)" },
                    "40%": { transform: "rotate(14.0deg)" },
                    "50%": { transform: "rotate(-4.0deg)" },
                    "60%": { transform: "rotate(10.0deg)" },
                    "70%": { transform: "rotate(0.0deg)" },
                    "100%": { transform: "rotate(0.0deg)" },
                },
                bobbing: {
                    "0%": {
                        transform: "translate(0px, 0px)",
                    },
                    "25%": {
                        transform: "translate(0px, 10px)",
                    },
                    "50%": {
                        transform: "translate(0px, 5px)",
                    },
                    "75%": {
                        transform: "translate(0px, 10px)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px)",
                    },
                },
                fadeBottom: {
                    "0%": {
                        transform: "translate(0px, 100px)",
                        opacity: "0",
                    },
                    "100%": {
                        transform: "translate(0px, 115px)",
                        opacity: "1",
                    },
                },
                appearLeft: {
                    "0%": {
                        transform: "translate(-150px, 0px)",
                        opacity: "0",
                    },
                    "100%": {
                        transform: "translate(0px, 0px)",
                    },
                },
                appearRight: {
                    "0%": {
                        transform: "translate(100px, 0px)",
                        opacity: "0",
                    },
                    "100%": {
                        transform: "translate(0px, 0px)",
                        opacity: "1",
                    },
                },
            },
        },
    },
    plugins: [],
};
