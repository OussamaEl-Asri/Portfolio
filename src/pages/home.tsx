import homeLogo from "../assets/icons/homeLogo.svg";
import { TextQuote } from "lucide-react";
import { ProjectDemo } from "../component/projectDemo";
import { SkillsSection } from "../component/skills/SkillsSection";
import { ContactSection } from "../component/contactSection";
import { AboutSection } from "../component/aboutMe";

export function Home() {
  return (
    <div className="w-full lg:w-fit">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0 px-4 sm:px-6 lg:px-0 text-center lg:text-left">
        <div className="lg:ml-20 flex flex-col items-center lg:items-start gap-3">
          <h1 className="text-xl sm:text-2xl text-white">
            Oussama is a{" "}
            <span className="text-[#C778DD]">Full-Stack AI Engineer</span>
          </h1>
          <p className="text-sm sm:text-md text-[#ABB2BF]">
            I build intelligent, scalable web applications{" "}
            <br className="hidden sm:block" />
            and AI-powered solutions with a focus on clean architecture,
            <br className="hidden sm:block" />
            performance, and exceptional user experiences.
          </p>
          <a
            href="#contact"
            className="w-full sm:w-35 inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white border-2 border-[#C778DD] rounded-xl transition-all duration-300 hover:bg-[#C778DD] hover:text-[#09090B] hover:shadow-[0_0_20px_rgba(200,120,221,0.35)] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C778DD] focus:ring-offset-2 focus:ring-offset-[#09090B]"
          >
            Contact Me
          </a>
        </div>
        <div className="lg:ml-30 w-40 sm:w-56 lg:w-auto">
          <img src={homeLogo} alt="Home Logo" className="w-full h-auto" />
        </div>
      </div>

      {/* quote */}
      <div className="relative mt-10 lg:mt-0 lg:top-25 left-0 lg:left-60 w-full lg:w-fit px-4 sm:px-6 lg:px-0">
        {/* Top-left quote */}
        <div className="absolute -top-4 left-6 bg-[#282C33] px-2 z-10">
          <TextQuote size={28} color="#ABB2BF" strokeWidth={2} />
        </div>

        <div className="border border-[#ABB2BF] px-6 py-8 sm:px-12 sm:py-10 rounded-sm">
          <h1 className="text-xl sm:text-2xl lg:text-3xl text-white font-medium tracking-wide">
            Simplicity is the ultimate sophistication.
          </h1>
        </div>

        {/* Author */}
        <div className="relative ml-auto w-fit border-x border-b border-[#ABB2BF] px-4 py-3 sm:px-8 sm:py-4">
          <div className="absolute -top-4 right-4 bg-[#282C33] px-2">
            <TextQuote size={28} color="#ABB2BF" strokeWidth={2} />
          </div>

          <p className="text-lg sm:text-xl lg:text-2xl text-white">
            — Leonardo da Vinci
          </p>
        </div>
      </div>

      <ProjectDemo />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
