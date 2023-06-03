import React from "react";
import { FaGithub, FaTwitter, FaEnvelope, FaLinkedinIn } from "react-icons/fa";

const SocialLinks = () => {
  return (
    // Container
    <div className="relative mx-auto flex flex-row gap-16 text-white">
      {/* Icons */}
      <a href="https://www.linkedin.com/in/thomas-geoghegan/">
        <FaLinkedinIn
          size={40}
          className="duration-150 ease-in-out hover:cursor-pointer hover:text-primary "
        />
      </a>

      <a href="https://github.com/TomGegs">
        <FaGithub
          size={40}
          className="duration-150 ease-in-out hover:cursor-pointer hover:text-primary"
        />
      </a>
      {/* Email icon - auto-generate and open email */}
      <a
        onClick={(e) => {
          const emailSubject = "Meeting with Tom Geoghegan";
          const emailBody =
            "Dear [Applicant Name], This email is regarding your application for the [Job Title] position at [Company Name]. Our hiring team has reviewed your application and we would like to schedule a meeting with you to discuss your qualifications and learn more about your experience. The meeting will give us an opportunity to learn more about your skills and experience, and to answer any questions you may have about the position and our company. We would like to schedule the meeting for [Date] at [Time], and it will be conducted over [Zoom/phone/in-person] as per your preference. Please let us know if this date and time work for you, or if you need to suggest an alternative time. We look forward to hearing from you soon and hope to have the opportunity to speak with you.";
          const mailToLink = `mailto:tomgegs@outlook.com?subject=${encodeURIComponent(
            emailSubject
          )}&body=${encodeURIComponent(emailBody)}`;
          window.location.href = mailToLink;
        }}>
        <FaEnvelope
          size={40}
          className="duration-150 ease-in-out hover:cursor-pointer hover:text-primary"
        />
        {/* email ping animation */}
        <span className="relative flex h-4 w-4 -translate-y-11 translate-x-8">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
          <span className="relative inline-flex h-4 w-4 rounded-full bg-primary"></span>
        </span>
      </a>
    </div>
  );
};

export default SocialLinks;
