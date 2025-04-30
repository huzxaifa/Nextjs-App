// src/components/Skills.tsx
import { Skill } from '../../types/cv';

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">Skillset</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="text-gray-700 font-medium">
            {skill.name}{index < skills.length - 1 ? "," : ""}
          </span>
        ))}
      </div>
    </section>
  );
}