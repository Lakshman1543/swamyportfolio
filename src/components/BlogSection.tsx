import React from "react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Building Scalable React Applications with JavaScript",
      description:
        "Learn best practices for structuring large-scale React applications using JavaScript, including component organization, custom hooks, and performance optimizations.",
      date: "March 15, 2024",
      readTime: "8 min read",
      tags: ["React", "JavaScript", "Performance"],
      link: "https://medium.com/@lakshmana/react-scalable-apps",
      image: "🚀",
    },
    {
      title: "Microservices Architecture with Spring Boot",
      description:
        "A comprehensive guide to implementing microservices using Spring Boot, covering service discovery, load balancing, and distributed tracing for scalable systems.",
      date: "September 28, 2024",
      readTime: "12 min read",
      tags: ["Spring Boot", "Microservices", "Java"],
      image: "🏗️",
    },
    {
      title: "Full-Stack Development: From Concept to Deployment",
      description:
        "A complete walkthrough of building a secure and scalable full-stack MERN application with JWT authentication, CI/CD, and cloud deployment.",
      date: "February 10, 2024",
      readTime: "15 min read",
      tags: ["Full-Stack", "DevOps", "Deployment"],
      image: "💻",
    },
    {
      title: "Database Optimization Techniques for Modern Applications",
      description:
        "Explore indexing, query optimization, and scaling techniques in MySQL and MongoDB to boost performance in modern web applications.",
      date: "January 22, 2025",
      readTime: "10 min read",
      tags: ["Database", "MySQL", "Performance"],
      image: "🗄️",
    },
  ];

  return (
    <section id="blog" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Latest Blog Posts
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="glass-card p-6 hover:neon-glow transition-all duration-500 hover:scale-105 group animate-slide-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div
                    className="text-3xl animate-float"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    {post.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-white/10 border border-white/20 rounded text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  disabled
                  className="text-gray-500 font-medium text-sm cursor-not-allowed flex items-center gap-2"
                >
                  Coming Soon
                  <span className="text-gray-400">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12 text-gray-400 text-sm italic">
          More posts coming soon...
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
