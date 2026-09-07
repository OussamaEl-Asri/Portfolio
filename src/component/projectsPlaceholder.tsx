import { useRef } from "react";
import { Link } from "react-router";

import type { projectType } from "../definition/projectType";

export function ProjectPlaceholder(projectProps: projectType) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    const video = videoRef.current;

    if (!video) return;

    video.currentTime = 0;

    video.play().catch((error) => {
      console.error("Video playback failed:", error);
    });
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;

    if (!video) return;

    video.pause();
    video.currentTime = 0;
  };

  return (
    <div className="w-80 max-w-full h-full border border-[#ABB2BF]">
      {/* Video */}
      <div
        className="aspect-video overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          poster={projectProps.poster}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        >
          <source src={projectProps.videoDemo} type="video/quicktime" />
        </video>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap items-center border text-[#ABB2BF]">
        {projectProps.skills.map((skill: string) => (
          <h1 key={skill} className="ml-3">
            {skill}
          </h1>
        ))}
      </div>

      {/* Description */}
      <div className="px-3 py-3 h-full ">
        <h1 className="text-xl text-white">{projectProps.title}</h1>

        <p className="text-sm text-[#ABB2BF]">{projectProps.description}</p>

        {/* Buttons */}
        <div className="mt-3 flex items-center gap-3">
          {projectProps.isLive && (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-[#C778DD] px-10 py-2 text-white transition-all duration-300 hover:bg-[#C778DD] hover:text-[#09090B]"
              to={projectProps.url as string}
            >
              Live
            </Link>
          )}

          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-[#ABB2BF] px-3 py-2 text-[#ABB2BF] transition-all duration-300 hover:bg-[#ABB2BF] hover:text-[#282C33] active:scale-95"
            to={projectProps.sourceCode}
          >
            Source Code
          </Link>
        </div>
      </div>
    </div>
  );
}
