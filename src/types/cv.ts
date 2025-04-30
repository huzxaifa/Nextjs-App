// src/types/cv.ts
export interface Education {
    institution: string;
    location: string;
    degree: string;
    graduationDate: string;
    coursework: string[];
  }
  
  export interface Skill {
    name: string;
  }
  
  export interface Experience {
    position: string;
    location: string;
    company: string;
    period: string;
    responsibilities: string[];
  }
  
  export interface Project {
    name: string;
    technologies: string;
    description: string[];
  }
  
  export interface CV {
    name: string;
    contact: {
      phone: string;
      email: string;
      location: string;
    };
    education: Education[];
    skills: Skill[];
    experience: Experience[];
    projects: Project[];
  }

  export default CV;