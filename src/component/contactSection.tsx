import { Link } from "react-router";
import { Mail } from "lucide-react";
import discord from "../assets/icons/discord.svg";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full lg:w-270 relative top-0 lg:-top-20 left-0 lg:left-10 py-16 lg:py-32 px-4 sm:px-6 lg:px-0"
    >
      {/* Section Heading */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-10 lg:mb-16">
        <h2 className="text-3xl lg:text-4xl font-semibold text-white">
          contacts
        </h2>

        <div className="w-full sm:w-40 lg:w-140 h-0.5 bg-[#C778DD]" />
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-0">
        {/* Left */}
        <div className="max-w-xl w-full">
          <p className="text-[#ABB2BF] text-base sm:text-lg lg:text-xl leading-7 sm:leading-9 lg:leading-10">
            I'm interested in freelance opportunities. However, if you have
            another request or question, don't hesitate to contact me.
          </p>
        </div>

        {/* Right */}
        <div className="border border-[#ABB2BF] px-6 py-5 w-full lg:w-auto">
          <h3 className="text-white text-xl font-semibold mb-6">
            Message me here
          </h3>

          <div className="space-y-5">
            <Link
              to="https://discord.com/users/1168507553949433892"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#ABB2BF] transition-colors duration-300 hover:text-white"
            >
              <img src={discord} alt="discord icon" />
              <span className="text-lg">oel_asri</span>
            </Link>

            <Link
              to="mailto:your@email.com"
              className="flex items-center gap-3 text-[#ABB2BF] transition-colors duration-300 hover:text-white"
            >
              <Mail size={28} />
              <span className="text-lg">oussamaasri81@gmail.com</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
