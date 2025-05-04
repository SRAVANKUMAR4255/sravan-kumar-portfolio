
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
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div 
            className="lg:col-span-2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-highlight/10 rounded-lg blur-2xl"></div>
              <div className="relative glass-card p-4 w-full max-w-md">
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
                  <span className="text-6xl font-bold">SK</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-3 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">I'm a <span className="highlight-text">B.Tech Student</span> Specializing in AI & ML</h3>
            <p className="text-gray-400 mb-6">
              I am currently pursuing my B.Tech at <strong>Vasireddy Venkatadri Institute of Engineering & Technology</strong>, where I am specializing in <strong>AI & ML</strong>. Over the past few years, I have developed a solid foundation in both <strong>frontend and backend development</strong>, and I enjoy building full-stack applications that provide meaningful solutions.
            </p>
            <p className="text-gray-400 mb-6">
              I also have experience working with various machine learning algorithms, web development frameworks, and tools that help create scalable and efficient applications. In addition to my technical skills, I am a <strong>problem solver</strong>, always seeking out challenges that require creative solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <p><span className="font-semibold">Name:</span> Sravan Kumar Gutta</p>
                <p><span className="font-semibold">Degree:</span> B.Tech (AI & ML)</p>
              </div>
              <div>
                <p><span className="font-semibold">Email:</span> sravankumargutta@gmail.com</p>
                <p><span className="font-semibold">Location:</span> India</p>
              </div>
            </div>
            
            <motion.a 
              href="#contact"
              className="hover-scale px-6 py-3 bg-highlight text-white font-medium rounded-md shadow-lg shadow-highlight/20 self-start flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Education <span className="highlight-text">Journey</span></h3>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-white/20"></div>
            
            <div className="grid grid-cols-1 gap-12">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="w-4 h-4 bg-highlight rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-2"></div>
                <div className="glass-card p-6 ml-auto mr-auto md:ml-0 md:mr-auto md:w-[calc(50%-20px)] max-w-lg shadow-lg">
                  <h4 className="text-xl font-bold">B.Tech in Computer Science and Engineering (AI & ML)</h4>
                  <p className="text-gray-400 mt-1">Vasireddy Venkatadri Institute of Engineering & Technology (2022–2026)</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <div className="w-4 h-4 bg-highlight rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-2"></div>
                <div className="glass-card p-6 ml-auto mr-auto md:mr-0 md:ml-auto md:w-[calc(50%-20px)] max-w-lg shadow-lg">
                  <h4 className="text-xl font-bold">Intermediate (MPC)</h4>
                  <p className="text-gray-400 mt-1">Narayana Junior College (2020–2022)</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <div className="w-4 h-4 bg-highlight rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-2"></div>
                <div className="glass-card p-6 ml-auto mr-auto md:ml-0 md:mr-auto md:w-[calc(50%-20px)] max-w-lg shadow-lg">
                  <h4 className="text-xl font-bold">SSC (10th Grade)</h4>
                  <p className="text-gray-400 mt-1">Sri Chaitanya School (2019–2020)</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
