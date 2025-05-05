
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ResumeViewer from "./ResumeViewer";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [showResume, setShowResume] = useState(false);
  const resumeUrl = "https://drive.google.com/file/d/10kjBp5VYh5y23NcpxRuVR73prWAnHaYt/view";
  
  return (
    <section id="about" ref={ref} className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">About <span className="highlight-text">Me</span></h2>
          <div className="w-24 h-1 bg-highlight mx-auto mt-4"></div>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-card p-8 mb-6">
            <p className="text-lg leading-relaxed">
              I'm Sravan, a final-year B.Tech student specializing in Computer Science with a focus on Artificial Intelligence and Machine Learning. I have hands-on experience in C, Java, Python, and frontend development, and I've built projects like a face recognition system and a plagiarism checker. I'm passionate about solving real-world problems through code and constantly improving my skills through continuous learning. My goal is to become a skilled Software Developer and ML Engineer, contributing to innovative solutions at top tech companies like Amazon, Google, Infosys, or Accenture.
            </p>
          </div>
          
          <div className="text-center">
            <motion.button
              onClick={() => setShowResume(true)}
              className="px-6 py-3 bg-highlight text-white font-medium rounded-md shadow-lg shadow-highlight/20 hover:bg-highlight/90 transition-colors inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View My Resume
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      <ResumeViewer 
        isOpen={showResume} 
        onClose={() => setShowResume(false)}
        resumeUrl={resumeUrl}
      />
    </section>
  );
};

export default About;
