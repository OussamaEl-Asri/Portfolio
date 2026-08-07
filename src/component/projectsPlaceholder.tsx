import { Link } from "react-router";

interface Project {
  title: string;
  img: string;
  description: string;
  liveUrl?: string;
  githubUrl: string;
  skills: string[];
}

export function ProjectPlaceholder(projectProps: Project) {
  return (
    <div className="w-80 border border-[#ABB2BF]">
      {/* image */}
      <div>
        <img
          className="w-80 h-80"
          src={projectProps.img}
          alt={projectProps.title + " icon"}
        />
      </div>
      {/* skills */}
      <div className="flex flex-wrap items-center text-[#ABB2BF] border">
        {projectProps.skills.map((skill: string) => (
          <h1 className="ml-3">{skill}</h1>
        ))}
      </div>
      {/* description */}
      <div className="px-3 py-3">
        <h1 className="text-white text-xl">{projectProps.title}</h1>
        <p className="text-sm text-[#ABB2BF]">{projectProps.description}</p>
        {/* buttons */}
        <div className="flex items-center gap-3 mt-2">
          {projectProps.liveUrl && (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-[#C778DD] px-10 py-2 text-white rounded-lg transition-all duration-300 hover:bg-[#C778DD] hover:text-[#09090B]"
              to={projectProps.liveUrl}
            >
              Live
            </Link>
          )}

          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-[#ABB2BF] px-3 py-2 text-[#ABB2BF] rounded-lg transition-all duration-300 hover:bg-[#ABB2BF] hover:text-[#282C33] active:scale-95"
            to={projectProps.githubUrl}
          >
            Source Code
          </Link>
        </div>
      </div>
    </div>
  );
}
