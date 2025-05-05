
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
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
          className="max-w-3xl mx-auto glass-card p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-center">
            I'm Sravan, a final-year B.Tech student specializing in Computer Science with a focus on Artificial Intelligence and Machine Learning. I have hands-on experience in C, Java, Python, and frontend development, and I've built projects like a face recognition system and a plagiarism checker. I'm passionate about solving real-world problems through code and constantly improving my skills through continuous learning. My goal is to become a skilled Software Developer and ML Engineer, contributing to innovative solutions at top tech companies like Amazon, Google, Infosys, or Accenture.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
