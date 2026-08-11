import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ProjectPlaceholder } from "./projectsPlaceholder";
import logo from "../assets/logo.jpg";

export function ProjectDemo() {
  return (
    <section
      id="projects"
      className="relative my-5 lg:top-30 left-0 lg:left-10 w-full lg:w-270 px-4 sm:px-6 lg:px-0"
    >
      <div className="flex flex-col sm:flex-row py-10 justify-between items-start sm:items-center gap-4 sm:gap-0 w-full lg:w-fit">
        <h1 className="text-white text-2xl sm:text-3xl font-semibold">
          Projects
        </h1>
        <div className="w-full sm:w-40 lg:w-160 sm:ml-5 sm:mt-2 border-t-2 border-[#C778DD]" />
        <Link
          className="inline-flex sm:ml-8 lg:ml-40 gap-2 text-white"
          to={"projects"}
        >
          View all
          <ArrowRight size={20} className="mt-1" />
        </Link>
      </div>

      <div className="bg-[#282C33] pl-2 flex gap-10 flex-wrap w-full lg:w-fit mt-4 justify-center sm:justify-start">
        <ProjectPlaceholder
          img={logo}
          title="ChertNodes"
          description="Minecraft servers hosting"
          skills={["HTML", "SCSS", "Python", "Flask"]}
          githubUrl="https://github.com/OussamaEl-Asri"
          liveUrl="https://github.com/OussamaEl-Asri"
        />
        <ProjectPlaceholder
          img={logo}
          title="ChertNodes"
          description="Minecraft servers hosting"
          skills={["HTML", "SCSS", "Python", "Flask"]}
          githubUrl="https://github.com/OussamaEl-Asri"
          liveUrl="https://github.com/OussamaEl-Asri"
        />
        <ProjectPlaceholder
          img={logo}
          title="ChertNodes"
          description="Minecraft servers hosting"
          skills={["HTML", "SCSS", "Python", "Flask"]}
          githubUrl="https://github.com/OussamaEl-Asri"
        />
      </div>
    </section>
  );
}
