
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-background/90 backdrop-blur-md border-b border-white/10' : 'py-4'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Removed SK logo */}
        </motion.div>
        
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto" // Centered the navigation
        >
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-highlight transition-colors duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-highlight transition-colors duration-300">About</a></li>
            <li><a href="#skills" className="hover:text-highlight transition-colors duration-300">Skills</a></li>
            <li><a href="#projects" className="hover:text-highlight transition-colors duration-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-highlight transition-colors duration-300">Contact</a></li>
          </ul>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;
