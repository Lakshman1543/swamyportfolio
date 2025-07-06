import React from "react";
import { Github, Linkedin } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Online Certification Management",
      description:
        "A comprehensive certification management system built with modern web technologies.",
      tech: ["Spring Boot", "React", "MySQL", "AWS"],
      highlights: [
        "Reduced manual certification operations by 40%",
        "Implemented Hibernate ORM with 95% JUnit test coverage",
        "GitHub CI/CD improved release cycle by 40%",
      ],
      color: "from-neon-purple to-neon-cyan",
      codeUrl:
        "https://github.com/Lakshman1543/SpringbootSDPProject30326.git",
      liveUrl: "https://skillcertify.up.railway.app/",
      status: "",
    },
    {
      title: "Pet Adoption & Accessories System",
      description:
        "Full-stack MERN application for pet adoption with integrated e-commerce features.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
      highlights: [
        "40% user engagement boost via sleek UI",
        "JWT authentication for secure adoption/order flows",
        "MongoDB + Mongoose cut query time by 60%",
      ],
      color: "from-neon-cyan to-neon-pink",
      codeUrl:
        "https://github.com/Lakshman1543/petsmanagementsystem.git",
      liveUrl: "",
      status: "",
    },
    {
      title: "Employee Management System",
      description:
        "Comprehensive EMS with role-based access control and advanced management features.",
      tech: ["React.js", "Spring Boot", "MySQL", "JWT"],
      highlights: [
        "JWT-based RBAC for Admin/Manager/Employee roles",
        "Modules: duty assignment, leave tracking",
        "Deployed on Render with GitHub CI/CD",
      ],
      color: "from-neon-pink to-neon-purple",
      codeUrl:
        "https://github.com/Lakshman1543/SpringBootEMS-EmployeeManagementSystem.git",
      liveUrl: "",
      status: "",
    },
    {
      title: "Online Voting System",
      description:
        "Secure and scalable platform for conducting online elections with real-time results.",
      tech: ["Python", "Django", "HTML/CSS/JS", "PostgreSQL"],
      highlights: [
        "Secure authentication with session-based login and admin panel",
        "Role-based access for voters and administrators",
        "Real-time vote counting with result analytics and visualization",
      ],
      color: "from-neon-blue to-neon-green",
      codeUrl:
        "https://github.com/Lakshman1543/onlinevotingsystem.git",
      liveUrl: "",
      status: "",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:neon-glow transition-all duration-500 hover:scale-105 group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <span className="text-sm">{project.status}</span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-neon-cyan">
                    Key Highlights:
                  </h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-gray-400 flex items-start gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-neon-pink rounded-full mt-1.5 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-neon-purple">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-white/10 border border-white/20 rounded text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-4">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-lg text-sm font-medium hover:scale-105 transition-all duration-300 flex items-center justify-center">
                      <Github size={16} className="mr-2" />
                      Code
                    </button>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <button className="w-full px-4 py-2 bg-gradient-to-r from-neon-cyan to-neon-green rounded-lg text-sm font-medium hover:scale-105 transition-all duration-300">
                        Live Demo
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
