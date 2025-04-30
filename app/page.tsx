// src/app/cv/page.tsx
import { Metadata } from 'next';
import Education from '../src/types/components/Education';
import Skills from '../src/types/components/Skills';
import Experience from '../src/types/components/Experience';
import Projects from '../src/types/components/Project';
import { huzaifaCV } from '../src/types/data/cvData';

export const metadata: Metadata = {
  title: 'Huzaifa Khalid | CV',
  description: 'Professional CV for Huzaifa Khalid, Computer Science student and developer',
};

export default function CVPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{huzaifaCV.name}</h1>
        <div className="mt-2 text-gray-600">
          <p>{huzaifaCV.contact.phone} | {huzaifaCV.contact.email} | {huzaifaCV.contact.location}</p>
        </div>
      </header>

      <Education education={huzaifaCV.education} />
      <Skills skills={huzaifaCV.skills} />
      <Experience experience={huzaifaCV.experience} />
      <Projects projects={huzaifaCV.projects} />
      
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Last updated: April 2025</p>
      </div>
    </main>
  );
}