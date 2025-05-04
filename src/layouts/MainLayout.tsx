
import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="relative">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-highlight origin-left z-50"
        style={{ scaleX }}
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
