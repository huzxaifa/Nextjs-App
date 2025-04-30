// src/components/Experience.tsx
import { Experience as ExperienceType } from '../../types/cv';

interface ExperienceProps {
  experience: ExperienceType[];
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className="mb-6">
          <div className="mb-2">
            <h3 className="text-xl font-semibold text-gray-700">
              {exp.position} | {exp.location}
            </h3>
            <p className="text-lg text-gray-600">
              {exp.company} | {exp.period}
            </p>
          </div>
          <ul className="list-disc ml-6">
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx} className="text-gray-600 mb-1">{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
