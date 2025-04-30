// src/data/cvData.ts
import CV from '../../types/cv';

export const huzaifaCV: CV = {
  name: "Huzaifa Khalid",
  contact: {
    phone: "+92 317 5137945",
    email: "huzaifakhalid7c@gmail.com",
    location: "Islamabad, Pakistan"
  },
  education: [
    {
      institution: "FAST NUCES",
      location: "Islamabad, Pakistan",
      degree: "Computer Science",
      graduationDate: "12/2025",
      coursework: [
        "Programming Fundamentals",
        "Object Oriented Programming",
        "Data Structures",
        "Design And Analysis of Algorithms",
        "Operating Systems",
        "Database Systems",
        "Parallel Distributed Computing"
      ]
    }
  ],
  skills: [
    { name: "C++" },
    { name: "C#" },
    { name: "Java" },
    { name: "Pytorch" },
    { name: "TensorFlow" },
    { name: "scikit-learn" },
    { name: "seaborn" }
  ],
  experience: [
    {
      position: "Intern",
      company: "Python Tool Development",
      location: "Islamabad, Pakistan",
      period: "07/2024 - 08/2024",
      responsibilities: [
        "Gained valuable experience in developing and building tools with python frameworks.",
        "Created web extensions for password generation, cracking, management and analyzing boundary and edge cases.",
        "Contributed to the development and implementation of the ZTM-Auth Model, enhancing zero-trust authentication mechanisms for improved system security.",
        "Implemented Key Logger system for tracking user activity and identifying security vulnerabilities across devices."
      ]
    }
  ],
  projects: [
    {
      name: "SarmayaGhar",
      technologies: "Python, ML, tensorflow, Data Visualization",
      description: [
        "Developed machine learning models (Random Forest, XGBoost, DNN) to predict property prices with 96% accuracy (R²) using Python, Scikit-learn, and TensorFlow.",
        "Engineered features from geospatial, property, and market data, reducing prediction error by 18% (MAE).",
        "Built LIME interpretability tools to explain pricing factors for stakeholders.",
        "Deployed as a Flask API serving recommendations on undervalued properties."
      ]
    },
    {
      name: "Urdu context conversational AI chatbot",
      technologies: "streamlit",
      description: [
        "Conversational Urdu AI Chatbot answers context-related questions, for example, weather, politics, gender biases, etc."
      ]
    },
    {
      name: "Energy-efficient home automation",
      technologies: "heapq, tkinter",
      description: [
        "Optimizing household energy consumption by maintaining metrics that vary according to occupancy, power usage, etc.",
        "Example: minimizing light usage based on room occupancy, or adjusting room temperature according to the time of day."
      ]
    },
    {
      name: "Kth-Shortest-Path-Parallel-Version-using-MPI-OpenMP",
      technologies: "MPI, OpenMP",
      description: [
        "Implemented a parallel version of the k-th shortest path algorithm using hybrid MPI/OpenMP programming to significantly reduce computational time on large graphs.",
        "Successfully distributed graph processing across multiple nodes using MPI for inter-node communication while leveraging OpenMP for efficient multi-threading within each node."
      ]
    }
  ]
};