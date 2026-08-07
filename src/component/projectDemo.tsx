import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ProjectPlaceholder } from "./projectsPlaceholder";
import logo from "../assets/logo.jpg";

export function ProjectDemo() {
  return (
    <div className="relative top-30 left-20 w-270">
      <div className="flex justify-between items-center w-fit">
        <h1 className="text-white text-3xl">Projects</h1>
        <div className="w-160 ml-5 mt-2 border-t-2 border-[#C778DD]" />
        <Link className="inline-flex ml-40 gap-2 text-white" to={"projects"}>
          View all
          <ArrowRight size={20} className="mt-1" />
        </Link>
      </div>

      <div className="bg-[#282C33] flex gap-10 flex-wrap w-fit mt-4">
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
          liveUrl="https://github.com/OussamaEl-Asri"
        />
      </div>
    </div>
  );
}
