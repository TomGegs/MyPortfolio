import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    const form = useRef(null);
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    const onSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.sendForm(serviceId, templateId, form.current, userId).then(
            (result) => {
                console.log(result.text);
                console.log("message sent");
            },
            (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    return (
        <>
            <form
                ref={form}
                onSubmit={onSubmit}
                className="mb-4 w-full rounded pt-6 text-black shadow-md lg:w-[90%]">
                <div className="mb-4 flex flex-col lg:flex-row ">
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        required
                        maxLength={500}
                        placeholder="First name"
                        className="focus:shadow-outline mb-4 appearance-none rounded-lg border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none lg:mb-0 lg:mr-2 lg:w-[50%]"
                    />
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        required
                        maxLength={500}
                        placeholder="Last name"
                        className="focus:shadow-outline appearance-none rounded-lg border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none lg:ml-2 lg:w-[50%]"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        name="userEmail"
                        id="userEmail"
                        required
                        maxLength={500}
                        placeholder="Email address"
                        className="focus:shadow-outline w-full appearance-none rounded-lg border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                    />
                </div>
                <div className="mb-3">
                    <textarea
                        type="text"
                        name="message"
                        required
                        rows={4}
                        placeholder="What would you like to chat about?"
                        className="focus:shadow-outline w-full resize-none appearance-none rounded-lg border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                    />
                </div>
                <div className="relative">
                    <div className="absolute bottom-0 left-0 h-12 w-[100%] animate-gradientFast bg-gradient-to-r from-primary via-altSecond to-secondary blur-md lg:h-16" />
                    <button
                        className="relative my-2 flex w-[100%] transform cursor-pointer justify-center rounded-lg bg-bgPrimary px-[16px] py-3 text-center font-encode text-[0.8rem] font-light text-white transition-transform hover:border-altSecond hover:bg-altSecond hover:text-white focus:outline-none active:translate-y-0.5 active:scale-[98%] lg:px-8 lg:py-4 lg:text-lg"
                        type="submit"
                        disabled={isLoading}>
                        {isLoading ? "Sending..." : "Submit"}
                    </button>
                </div>
            </form>
        </>
    );
};

export default ContactForm;
