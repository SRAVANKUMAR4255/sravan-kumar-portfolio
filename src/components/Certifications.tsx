
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const certifications = [
  {
    title: "Java Full Stack Development",
    organization: "Java Training Institute",
    date: "2023",
    link: "https://drive.google.com/file/d/175GUHqzleuaUbJt2F8ug_xyXhLn1xJ0C/view?usp=sharing"
  },
  {
    title: "Data Science using Pandas and Python",
    organization: "Data Science Academy",
    date: "2023",
    link: "https://drive.google.com/file/d/16fVQ_mU1VrWL_b1nEilt_yfzT5gDnH0h/view?usp=sharing"
  }
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  return (
    <section ref={ref} className="section-padding">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.title} 
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(255,61,0,0.3)" }}
            >
              <div className="w-12 h-12 bg-highlight/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{cert.organization}</p>
              
              <div className="absolute bottom-3 right-4 text-highlight opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1">
                <span className="text-sm">View Certificate</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
