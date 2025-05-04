
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypedTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
}

const TypedText: React.FC<TypedTextProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1000,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    const targetText = texts[currentTextIndex];
    
    if (isTyping) {
      // Typing effect
      if (currentText !== targetText) {
        const timeout = setTimeout(() => {
          setCurrentText(targetText.substring(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing current text, wait before deleting
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayBetweenTexts);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (currentText) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next text
        setIsTyping(true);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }
  }, [currentText, currentTextIndex, isTyping, texts, typingSpeed, deletingSpeed, delayBetweenTexts]);

  return (
    <motion.span 
      className="inline-block highlight-text"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {currentText}
      <motion.span 
        className="inline-block"
        animate={{ opacity: [1, 0] }} 
        transition={{ repeat: Infinity, duration: 0.8 }}
      >|</motion.span>
    </motion.span>
  );
};

export default TypedText;
