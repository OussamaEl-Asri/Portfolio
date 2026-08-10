import { ProjectPlaceholder } from "../component/projectsPlaceholder";
import logo from "../assets/logo.jpg";
import { SmallProjectPlaceholder } from "../component/smallProjectPlaceholder";

interface CompleteApp {
  title: string;
  img: string;
  description: string;
  liveUrl?: string;
  githubUrl: string;
  skills: string[];
}

interface SmallProject {
  title: string;
  description: string;
  githubUrl: string;
  skills: string[];
}

const smallProject: SmallProject[] = [
  {
    title: "ChertNodes",
    description: "Minecraft servers hosting",
    skills: ["HTML", "SCSS", "Python", "Flask"],
    githubUrl: "https://github.com/OussamaEl-Asri",
  },
  {
    title: "ChertNodes",
    description: "Minecraft servers hosting",
    skills: ["HTML", "SCSS", "Python", "Flask"],
    githubUrl: "https://github.com/OussamaEl-Asri",
  },
  {
    title: "ChertNodes",
    description: "Minecraft servers hosting",
    skills: ["HTML", "SCSS", "Python", "Flask"],
    githubUrl: "https://github.com/OussamaEl-Asri",
  },
  {
    title: "ChertNodes",
    description: "Minecraft servers hosting",
    skills: ["HTML", "SCSS", "Python", "Flask"],
    githubUrl: "https://github.com/OussamaEl-Asri",
  },
];

const completeApp: CompleteApp[] = [
  {
    img: logo,
    title: "ChertNodes",
    description: "Minecraft servers hosting",
    skills: ["HTML", "SCSS", "Python", "Flask"],
    githubUrl: "https://github.com/OussamaEl-Asri",
    liveUrl: "https://github.com/OussamaEl-Asri",
  },
  {
    img: logo,
    title: "ChertNodes",
    description: "Minecraft servers hosting",
    skills: ["HTML", "SCSS", "Python", "Flask"],
    githubUrl: "https://github.com/OussamaEl-Asri",
    liveUrl: "https://github.com/OussamaEl-Asri",
  },
];

export function Project() {
  return (
    <div className="w-fit ml-25  mb-40">
      <div className="flex py-10 justify-between items-center w-fit">
        <h1 className="text-white text-3xl font-semibold">
          <span className="text-[#C778DD] font-bold">{"/ "}</span>Projects
        </h1>
      </div>
      <h1 className="mt-10 mb-10 text-white font-bold text-2xl">
        <span className="text-[#C778DD]">{"# "}</span>Complete-apps
        <span className="inline-block ml-5 mb-1 w-160 border-t-2 border-[#C778DD]" />
      </h1>

      <div className=" pl-2 flex gap-10 flex-wrap w-fit mt-4">
        {completeApp.map((project) => (
          <ProjectPlaceholder
            img={project.img}
            title={project.title}
            description={project.description}
            skills={project.skills}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
        <h1 className="mt-10 mb-10 text-white font-bold text-2xl">
          <span className="text-[#C778DD]">{"# "}</span>Small-projects
          <span className="inline-block ml-5 mb-1 w-160 border-t-2 border-[#C778DD]" />
        </h1>
      </div>
      <div className=" pl-2 flex gap-10 flex-wrap w-fit mt-4">
        {smallProject.map((project) => (
          <SmallProjectPlaceholder
            title={project.title}
            description={project.description}
            skills={project.skills}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </div>
  );
}
