
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "Face Recognition Attendance System",
    description: "A smart attendance system that uses facial recognition for automatic student attendance, helping automate classroom processes and improve efficiency.",
    tech: ["Python", "OpenCV", "Tkinter"],
    github: "#"
  },
  {
    title: "HackerRank Plagiarism Checker",
    description: "A tool developed to detect plagiarism in coding assignments by comparing code submissions and identifying similarities.",
    tech: ["Java", "File Handling", "Algorithms"],
    github: "#"
  },
  {
    title: "Personal Web Application",
    description: "A responsive, clean web application developed to showcase my frontend development skills using HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#"
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  return (
    <section id="projects" ref={ref} className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">My <span className="highlight-text">Projects</span></h2>
          <div className="w-24 h-1 bg-highlight mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title} 
              className="glass-card overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(255,61,0,0.3)" }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-white/10 text-xs rounded">{tech}</span>
                  ))}
                </div>
                <motion.a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-highlight"
                  whileHover={{ x: 5 }}
                >
                  <span>GitHub Repository</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
