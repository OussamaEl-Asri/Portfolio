import { Link } from "react-router";
import homeLogo from "../assets/icons/homeLogo.svg";
import { TextQuote } from "lucide-react";
import { ProjectDemo } from "../component/projectDemo";

export function Home() {
  return (
    <div className="w-fit absolute top-30 left-20 ">
      <div className="flex justify-between items-center">
        <div className="ml-20 flex flex-col gap-3">
          <h1 className="text-2xl text-white">
            Oussama is a{" "}
            <span className="text-[#C778DD]">Full-Stack AI Engineer</span>
          </h1>
          <p className="text-md text-[#ABB2BF]">
            I build intelligent, scalable web applications <br />
            and AI-powered solutions with a focus on clean architecture,
            <br />
            performance, and exceptional user experiences.
          </p>
          <Link
            to="/contact"
            className="w-35 inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white border-2 border-[#C778DD] rounded-xl transition-all duration-300 hover:bg-[#C778DD] hover:text-[#09090B] hover:shadow-[0_0_20px_rgba(200,120,221,0.35)] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C778DD] focus:ring-offset-2 focus:ring-offset-[#09090B]"
          >
            Contact Me
          </Link>
        </div>
        <div className="mr-30">
          <img src={homeLogo} alt="Home Logo" />
        </div>
      </div>

      {/* quote */}
      <div className="relative top-25 left-60 w-fit">
        {/* Top-left quote */}
        <div className="absolute -top-4 left-6 bg-[#282C33] px-2 z-10">
          <TextQuote size={28} color="#ABB2BF" strokeWidth={2} />
        </div>

        <div className="border border-[#ABB2BF] px-12 py-10 rounded-sm">
          <h1 className="text-3xl text-white font-medium tracking-wide">
            Simplicity is the ultimate sophistication.
          </h1>
        </div>

        {/* Author */}
        <div className="relative ml-auto w-fit border-x border-b border-[#ABB2BF] px-8 py-4">
          <div className="absolute -top-4 right-4 bg-[#282C33] px-2">
            <TextQuote size={28} color="#ABB2BF" strokeWidth={2} />
          </div>

          <p className="text-2xl text-white">— Leonardo da Vinci</p>
        </div>
      </div>

      {/* projects */}
      <ProjectDemo />
    </div>
  );
}
