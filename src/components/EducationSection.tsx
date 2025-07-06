
import React from 'react';

const EducationSection = () => {
  const educationData = [
    {
      institution: "Koneru Lakshmaiah University (KL University)",
      location: "Vijayawada",
      degree: "B.Tech CSE",
      duration: "July 2022 – May 2026",
      grade: "CGPA: 9.5/10",
      icon: "🎓"
    },
    {
      institution: "Madhuri Junior College",
      location: "Gollaprolu, Andhra Pradesh, India",
      degree: "MPC",
      duration: "2020 – 2022",
      grade: "Percentage: 85%",
      icon: "🏛️"
    },
    {
      institution: "Madhuri Vidyalaya EM High School",
      location: "Gollaprolu, Andhra Pradesh, India",
      degree: "SSC",
      duration: "2019 – 2020",
      grade: "Percentage: 96%",
      icon: "🏫"
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Educational Journey
        </h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple via-neon-cyan to-neon-pink"></div>

          {educationData.map((edu, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full border-4 border-background neon-glow"></div>
              
              <div className="ml-20 glass-card p-6 hover:neon-glow transition-all duration-300 animate-slide-up">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{edu.icon}</span>
                      <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                    </div>
                    <p className="text-neon-cyan font-semibold mb-1">{edu.degree}</p>
                    <p className="text-gray-400 text-sm mb-2">{edu.location}</p>
                    <p className="text-neon-pink font-medium">{edu.grade}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300">
                      {edu.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;