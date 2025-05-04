
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  highlightText: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, highlightText }) => {
  return (
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        {title} <span className="highlight-text">{highlightText}</span>
      </h2>
      <div className="w-24 h-1 bg-highlight mx-auto mt-4"></div>
    </motion.div>
  );
};

export default SectionHeading;
