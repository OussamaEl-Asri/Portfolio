import { Link } from "react-router";

import profilePlaceholder from "../assets/profile-placeholder.svg"; // Replace with your SVG

export function AboutSection() {
  return (
    <section className="w-270 py-20 relative left-10">
      {/* Heading */}
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-semibold text-white">about-me</h2>

        <div className="w-140 h-0.5 bg-[#C778DD]" />
      </div>

      <div className="grid grid-cols-2 gap-24 items-center">
        {/* Left */}
        <div>
          <div className="space-y-8 text-[#ABB2BF] text-xl leading-10">
            <p>Hello, I'm Oussama!</p>

            <p>
              I'm a Full-Stack AI Engineer from Morocco who enjoys building
              scalable web applications and intelligent systems. My focus is on
              backend engineering, modern web technologies, and artificial
              intelligence.
            </p>

            <p>
              I enjoy transforming ideas into reliable software through clean
              architecture and thoughtful design. I'm constantly exploring new
              technologies while building projects that solve real-world
              problems.
            </p>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center justify-center mt-12 border border-[#C778DD] px-8 py-3 text-white rounded-lg transition-all duration-300 hover:bg-[#C778DD] hover:text-[#09090B] active:scale-95"
          >
            Read more →
          </Link>
        </div>

        {/* Right */}
        <div className="relative flex justify-center">
          {/* Top decoration */}
          <img
            src="/dots.svg"
            alt=""
            className="absolute top-8 left-16 w-24 opacity-80 pointer-events-none select-none"
          />

          {/* Profile placeholder */}
          <img
            src={profilePlaceholder}
            alt="Profile"
            className="relative z-10 w-105 object-contain"
          />

          {/* Bottom decoration */}
          <img
            src="/dots.svg"
            alt=""
            className="absolute bottom-28 right-4 w-24 opacity-80 pointer-events-none select-none"
          />

          {/* Bottom line */}
          <div className="absolute bottom-0 w-80 h-0.5 bg-[#C778DD]" />
        </div>
      </div>
    </section>
  );
}
