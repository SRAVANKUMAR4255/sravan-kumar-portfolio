
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  const certifications = [
    {
      title: "Java Full Stack Development",
      issuer: "Simplilearn",
      date: "May 2023",
      link: "https://drive.google.com/file/d/175GUHqzleuaUbJt2F8ug_xyXhLn1xJ0C/view?usp=sharing"
    },
    {
      title: "Data Science using Pandas and Python",
      issuer: "Simplilearn",
      date: "April 2023",
      link: "https://drive.google.com/file/d/16fVQ_mU1VrWL_b1nEilt_yfzT5gDnH0h/view?usp=sharing"
    },
    {
      title: "Web Development Fundamentals",
      issuer: "freeCodeCamp",
      date: "January 2023",
      link: "#"
    },
    {
      title: "Python Programming",
      issuer: "Coursera",
      date: "November 2022",
      link: "#"
    }
  ];

  return (
    <section id="certifications" ref={ref} className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">My <span className="highlight-text">Certifications</span></h2>
          <div className="w-24 h-1 bg-highlight mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              className="glass-card p-6 h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(255,61,0,0.3)" }}
            >
              <div className="flex-grow">
                <div className="w-12 h-12 rounded-full bg-highlight/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                <p className="text-xs text-gray-500">{cert.date}</p>
              </div>
              
              <motion.a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 text-highlight inline-flex items-center text-sm font-medium"
                whileHover={{ x: 5 }}
              >
                View Certificate
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
