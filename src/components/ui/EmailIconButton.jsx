import React from "react";
import { images } from "../../data/index";
import emailCopy from "../../data/emailCopy";

const EmailIconButton = ({ size, pulse }) => {
    const getEmailBodyText = () => {
        return emailCopy[0].split("\n").join("\n");
    };

    return (
        <div>
            <button
                onClick={() => {
                    const emailSubject =
                        "Position Application - Meeting with Tom Geoghegan";
                    const emailBody = getEmailBodyText();
                    const mailToLink = `mailto:tomgegs@outlook.com?subject=${encodeURIComponent(
                        emailSubject
                    )}&body=${encodeURIComponent(emailBody)}`;
                    window.location.href = mailToLink;
                }}>
                <images.emailIcon
                    size={size}
                    className="duration-150 ease-in-out hover:cursor-pointer hover:text-primary"
                />
                {/* email ping animation */}
                <span
                    className={`${pulse} relative h-4 w-4 -translate-y-11 translate-x-8`}>
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-primary"></span>
                </span>
            </button>
        </div>
    );
};

export default EmailIconButton;
