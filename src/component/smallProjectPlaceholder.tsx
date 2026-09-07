import { Link } from "react-router";

import type { projectType } from "../definition/projectType";

export function SmallProjectPlaceholder(props: projectType) {
  return (
    <div className="w-80 max-w-full h-full border border-[#ABB2BF]">
      <div className="flex flex-wrap items-center text-[#ABB2BF] border">
        {props.skills.map((skill: string) => (
          <h1 className="ml-3">{skill}</h1>
        ))}
      </div>
      <div className="px-3 py-3 h-full flex flex-col gap-2">
        <h1 className="text-white text-xl">{props.title}</h1>
        <p className="text-sm text-[#ABB2BF]">{props.description}</p>
        {/* buttons */}
        <div className="flex items-center gap-3 mt-2">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-[#C778DD] px-10 py-2 text-white rounded-lg transition-all duration-300 hover:bg-[#C778DD] hover:text-[#09090B]"
            to={props.sourceCode}
          >
            Source Code
          </Link>
        </div>
      </div>
    </div>
  );
}
