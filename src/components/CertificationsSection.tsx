import React from "react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "RedHat Enterprise Application Developer",
      issuer: "Red Hat",
      icon: "🧠",
      color: "from-red-500 to-red-600",
      description: "Enterprise Java development and deployment",
      file: "/certificates/Red Hat Certified Enterprise Application Developer.pdf",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      icon: "☁️",
      color: "from-orange-500 to-yellow-500",
      description: "Cloud computing fundamentals and AWS services",
      file: "/certificates/AWS CP.pdf",
    },
    {
      title: "React & Software Engineering Certified",
      issuer: "HackerRank",
      icon: "⚛️",
      color: "from-blue-500 to-cyan-500",
      description: "Frontend development and software engineering principles",
      file:"https://www.hackerrank.com/certificates/iframe/5524f097fabf"
    },
    {
      title: "Oracle Cloud Infrastructure 2024 Certified",
      issuer: "Oracle",
      icon: "🛡️",
      color: "from-red-600 to-orange-600",
      description: "Core cloud infrastructure and services on OCI",
      file: "/certificates/Oracle Cloud Infrastructure 2024 Generative AI Certified Professional.pdf",
    },
    {
      title: "Salesforce Certified AI Associate",
      issuer: "Salesforce",
      icon: "🤖",
      color: "from-purple-500 to-indigo-500",
      description: "AI foundations and Salesforce ecosystem",
      file: "/certificates/Salesforce Certified AI Associate.pdf",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:neon-glow transition-all duration-500 hover:scale-105 group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center space-y-4">
                <div
                  className="text-4xl mb-4 animate-float"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  {cert.icon}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-gradient transition-all duration-300">
                  {cert.title}
                </h3>

                <p className="text-neon-cyan font-medium text-sm">
                  {cert.issuer}
                </p>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {cert.description}
                </p>

                <div
                  className={`w-full h-1 bg-gradient-to-r ${cert.color} rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block px-4 py-2 border border-neon-purple text-neon-purple rounded-lg text-sm font-medium text-center hover:bg-neon-purple hover:text-white transition-all duration-300"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
