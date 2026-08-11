type SkillCardProps = {
  title: string;
  skills: string[];
};

export function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="border border-[#ABB2BF] w-full sm:w-60">
      <div className="border-b border-[#ABB2BF] px-4 py-3">
        <h3 className="text-white font-semibold text-xl">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-x-3 gap-y-2 px-4 py-4">
        {skills.map((skill) => (
          <span key={skill} className="text-[#ABB2BF] text-lg">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
