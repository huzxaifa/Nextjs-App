import { Education as EducationType } from '../../types/cv';

interface EducationProps {
  education: EducationType[];
}

export default function Education({ education }: EducationProps) {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-4">
          <div className="mb-2">
            <h3 className="text-xl font-semibold text-gray-700">
              {edu.institution} | {edu.location}
            </h3>
            <p className="text-lg text-gray-600">
              {edu.degree} | {edu.graduationDate}
            </p>
          </div>
          <div className="ml-4">
            {edu.coursework.map((course, idx) => (
              <p key={idx} className="text-gray-600">
                Completed Coursework: {course}
              </p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}