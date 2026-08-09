import { Link } from "react-router";
import { Mail } from "lucide-react";
import discord from "../assets/icons/discord.svg";

export function ContactSection() {
  return (
    <section id="contact" className="w-270 relative -top-20 left-10 py-32">
      {/* Section Heading */}
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-semibold text-white">contacts</h2>

        <div className="w-140 h-0.5 bg-[#C778DD]" />
      </div>

      {/* Content */}
      <div className="flex justify-between items-start">
        {/* Left */}
        <div className="max-w-xl">
          <p className="text-[#ABB2BF] text-xl leading-10">
            I'm interested in freelance opportunities. However, if you have
            another request or question, don't hesitate to contact me.
          </p>
        </div>

        {/* Right */}
        <div className="border border-[#ABB2BF] px-6 py-5">
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
