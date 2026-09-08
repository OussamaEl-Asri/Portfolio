import { ProjectPlaceholder } from "../component/projectsPlaceholder";
import { SmallProjectPlaceholder } from "../component/smallProjectPlaceholder";

import { smallProject } from "../project/smallPr";
import { apps } from "../project/apps";

export function Project() {
  return (
    <div className="w-full lg:w-fit ml-0 lg:ml-25 mb-40 px-4 sm:px-6 lg:px-0">
      <div className="flex py-10 justify-between items-center w-full lg:w-fit">
        <h1 className="text-white text-2xl sm:text-3xl font-semibold">
          <span className="text-[#C778DD] font-bold">{"/ "}</span>Projects
        </h1>
      </div>
      <h1 className="mt-10 mb-10 text-white font-bold text-xl sm:text-2xl">
        <span className="text-[#C778DD]">{"# "}</span>Big Apps
        <span className="block sm:inline-block mt-3 sm:mt-0 sm:ml-5 mb-1 w-full sm:w-40 lg:w-160 border-t-2 border-[#C778DD]" />
      </h1>

      <div className=" pl-2 flex gap-10 flex-wrap justify-center sm:justify-start w-full lg:w-fit mt-4">
        {apps.map((app, ind) => (
          <ProjectPlaceholder
            key={ind}
            title={app.title}
            description={app.description}
            skills={app.skills}
            videoDemo={app.videoDemo}
            poster={app.poster}
            isLive={app.isLive}
            sourceCode={app.sourceCode}
            isCompleted
            url={app.url}
          />
        ))}

        <h1 className="mt-10 mb-10 text-white font-bold text-xl sm:text-2xl">
          <span className="text-[#C778DD]">{"# "}</span>Currently working on
          <span className="block sm:inline-block mt-3 sm:mt-0 sm:ml-5 mb-1 w-full sm:w-40 lg:w-160 border-t-2 border-[#C778DD]" />
        </h1>
        <ProjectPlaceholder
          title="AI Studio"
          description="A multi-agent AI platform providing unified access to specialized assistants for chat, crypto, resume."
          skills={[
            "Next.js",
            "React",
            "TypeScript",
            "shadcn",
            "AI Agents",
            "LangChain",
            "FastAPI",
            "PostgreSQL",
            "Redis",
            "Docker",
          ]}
          isCompleted
          poster="/AI-studio/poster.png"
          videoDemo="https://jxhrtcjl3epzp802.public.blob.vercel-storage.com/AI-studio/sRecord.mov"
          sourceCode="https://github.com/OussamaEl-Asri/studio.git"
        />

        <h1 className="mt-10 mb-10 text-white font-bold text-xl sm:text-2xl">
          <span className="text-[#C778DD]">{"# "}</span>Small-projects
          <span className="block sm:inline-block mt-3 sm:mt-0 sm:ml-5 mb-1 w-full sm:w-40 lg:w-160 border-t-2 border-[#C778DD]" />
        </h1>
      </div>
      <div className=" pl-2 flex gap-10 flex-wrap justify-center sm:justify-start w-full lg:w-fit mt-4">
        {smallProject.map((project) => (
          <SmallProjectPlaceholder
            title={project.title}
            description={project.description}
            skills={project.skills}
            isCompleted
            videoDemo={project.videoDemo}
            poster={project.poster}
            sourceCode={project.sourceCode}
          />
        ))}
      </div>
    </div>
  );
}
