import { SkillCard } from "./SkillCard";
import { Dots, Square, DoubleSquares } from "./Decorations";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full lg:w-270 py-16 lg:py-28 relative lg:top-20 left-0 lg:left-10 px-4 sm:px-6 lg:px-0"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-10 lg:mb-20">
        <h2 className="text-3xl lg:text-4xl text-white font-semibold">
          skills
        </h2>

        <div className="w-full sm:w-40 lg:w-140 sm:ml-5 sm:mt-2 border-t-2 border-[#C778DD]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
        {/* Left */}

        <div className="relative h-137.5 hidden lg:block">
          <div className="absolute top-10 left-5">
            <Dots />
          </div>

          <div className="absolute top-0 left-72">
            <Square />
          </div>

          <div className="absolute top-48 left-52">
            <Dots />
          </div>

          <div className="absolute bottom-10 left-8">
            <DoubleSquares />
          </div>

          <div className="absolute bottom-24 left-96">
            <Square />
          </div>
        </div>

        {/* Right */}

        <div className="flex flex-wrap justify-center sm:justify-start lg:justify-end gap-4 sm:gap-5">
          <SkillCard
            title="Languages"
            skills={["TypeScript", "Python", "JavaScript", "C", "C++"]}
          />

          <SkillCard
            title="Databases"
            skills={["PostgreSQL", "SQLite", "Redis", "PRISMA ORM"]}
          />

          <SkillCard
            title="Tools"
            skills={["Git", "Docker", "VS Code", "Linux", "Figma"]}
          />

          <SkillCard
            title="Frameworks"
            skills={[
              "React",
              "Nextjs",
              "Express",
              "FastAPI",
              "Django",
              "Flask",
              "Tailwind",
            ]}
          />

          <SkillCard
            title="AI"
            skills={[
              "LangChain",
              "Ollama",
              "RAG",
              "ChromaDB",
              "AI Agents",
              "Crew AI",
            ]}
          />

          <SkillCard
            title="Cloud"
            skills={["Docker", "Docker compose", "GitHub Actions", "Vercel"]}
          />
        </div>
      </div>
    </section>
  );
}
