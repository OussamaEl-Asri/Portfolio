import { SkillCard } from "./SkillCard";
import { Dots, Square, DoubleSquares } from "./Decorations";

export function SkillsSection() {
  return (
    <section id="skills" className="w-270 py-28 relative top-20 left-10">
      <div className="flex items-center gap-4 mb-20">
        <h2 className="text-4xl text-white font-semibold">skills</h2>

        <div className="w-140 ml-5 mt-2 border-t-2 border-[#C778DD]" />
      </div>

      <div className="grid grid-cols-2">
        {/* Left */}

        <div className="relative h-137.5">
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

        <div className="flex flex-wrap justify-end gap-5">
          <SkillCard
            title="Languages"
            skills={["TypeScript", "Python", "JavaScript", "C", "C++"]}
          />

          <SkillCard
            title="Databases"
            skills={["PostgreSQL", "SQLite", "MongoDB"]}
          />

          <SkillCard
            title="Tools"
            skills={["Git", "Docker", "VS Code", "Linux", "Figma"]}
          />

          <SkillCard
            title="Frameworks"
            skills={["React", "FastAPI", "Django", "Flask", "Tailwind"]}
          />

          <SkillCard
            title="AI"
            skills={["LangChain", "Ollama", "RAG", "ChromaDB"]}
          />

          <SkillCard
            title="Cloud"
            skills={["Docker", "GitHub Actions", "Vercel"]}
          />
        </div>
      </div>
    </section>
  );
}
