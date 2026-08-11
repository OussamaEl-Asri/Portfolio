import { Link } from "react-router";
import icon from "../assets/icons/portofolioIcon.svg";
import discord from "../assets/icons/discord.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";

export default function Footer() {
  return (
    <footer className="border-t border-[#ABB2BF]">
      <div className="w-full mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-10 sm:gap-6 text-center sm:text-left">
          {/* Left */}
          <div className="space-y-5 flex flex-col items-center sm:items-start">
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2">
              {/* Logo */}
              <div className="sm:ml-5 w-5 h-5">
                <img src={icon}></img>
              </div>

              <div className="flex gap-2.5 text-white h-fit ">
                <h1 className="">Oussama El-Asri</h1>
              </div>

              <a
                href="mailto:your@email.com"
                className="sm:ml-5 text-[#ABB2BF] transition-colors duration-300 hover:text-white break-all"
              >
                oussamaasri81@gmail.com
              </a>
            </div>

            <p className="text-white sm:ml-10 text-lg">
              Full-Stack AI Engineer
            </p>
          </div>

          {/* Social Media */}
          <div className="sm:mr-25">
            <h3 className="sm:ml-5 mb-5 text-2xl sm:text-3xl font-semibold text-white text-center sm:text-left">
              Media
            </h3>

            <div className="flex items-center justify-center sm:justify-start gap-5">
              {/* GitHub */}
              <Link
                to="https://github.com/OussamaEl-Asri"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-7 h-7">
                  <img src={github} alt="discord icon" />
                </div>
              </Link>

              {/* LinkedIn */}
              <Link
                to="https://www.linkedin.com/in/oussama-el-asri-7a16a9281/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-7 h-7">
                  <img src={linkedin} alt="LinkedIn icon" />
                </div>
              </Link>

              {/* Discord */}
              <Link
                to="https://discord.com/users/1168507553949433892"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-7 h-7">
                  <img src={discord} alt="discord icon" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-center">
          <p className="text-[#ABB2BF]">
            © {new Date().getFullYear()} Oussama. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
