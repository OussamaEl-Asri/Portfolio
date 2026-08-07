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
              className="border border-[#C778DD] text-white px-10 py-1"
              to={projectProps.liveUrl}
            >
              Live
            </Link>
          )}

          <Link
            className="border border-[#ABB2BF] text-[#ABB2BF] px-3 py-1"
            to={projectProps.githubUrl}
          >
            Source Code
          </Link>
        </div>
      </div>
    </div>
  );
}
