
import { motion } from "framer-motion";
import { useState } from "react";
import ResumeViewer from "./ResumeViewer";

const Hero = () => {
  const [showResume, setShowResume] = useState(false);
  const resumeUrl = "https://drive.google.com/file/d/10kjBp5VYh5y23NcpxRuVR73prWAnHaYt/view";
  const profileImageUrl = "https://drive.google.com/uc?export=view&id=1vOla5-ktFkchcvlzyPBQq8Pq81oDVqbJ";
  
  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowResume(true);
  };

  return (
    <section id="home" className="min-h-screen flex items-center section-padding">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-xl mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi, I'm
          </motion.p>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Sravan Kumar <span className="highlight-text">Gutta</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-400 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            B.Tech Student Specializing in <span className="highlight-text">AI & ML</span>
          </motion.p>
          <motion.p 
            className="text-gray-400 mb-8 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Passionate about software development, building dynamic web applications, and designing user-friendly interfaces.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.a 
              href="#contact"
              className="hover-scale px-6 py-3 bg-highlight text-white font-medium rounded-md shadow-lg shadow-highlight/20 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a 
              href="#"
              onClick={handleResumeClick}
              className="hover-scale px-6 py-3 bg-transparent border border-white/20 text-white font-medium rounded-md flex items-center justify-center"
              whileHover={{ scale: 1.05, borderColor: "#ff3d00" }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume
            </motion.a>
            <motion.a 
              href="#projects"
              className="hover-scale px-6 py-3 bg-transparent border border-white/20 text-white font-medium rounded-md flex items-center justify-center"
              whileHover={{ scale: 1.05, borderColor: "#ff3d00" }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
          <motion.div 
            className="flex gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.a
              href="https://github.com/SRAVANKUMAR4255" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center"
              whileHover={{ scale: 1.2, borderColor: "#ff3d00" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sravan-kumar-gutta/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center"
              whileHover={{ scale: 1.2, borderColor: "#ff3d00" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </motion.a>
            <motion.a
              href="mailto:sravankumargutta@gmail.com" 
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center"
              whileHover={{ scale: 1.2, borderColor: "#ff3d00" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-highlight/20 rounded-full blur-3xl"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-highlight shadow-2xl shadow-highlight/20">
              <img 
                src={profileImageUrl} 
                alt="Sravan Kumar Gutta" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '';
                  target.alt = 'SK';
                  target.parentElement!.classList.add('bg-gray-800');
                  target.parentElement!.classList.add('flex');
                  target.parentElement!.classList.add('items-center');
                  target.parentElement!.classList.add('justify-center');
                  target.parentElement!.innerHTML = '<div class="text-4xl font-bold">SK</div>';
                }}
              />
            </div>
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

export default Hero;
