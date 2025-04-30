// src/components/Projects.tsx
import { Project } from '../../types/cv';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            {project.name} | {project.technologies}
          </h3>
          <ul className="list-disc ml-6">
            {project.description.map((desc, idx) => (
              <li key={idx} className="text-gray-600 mb-1">{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}