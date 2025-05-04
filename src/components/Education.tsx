
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const educationItems = [
    {
      degree: "B.Tech",
      field: "Computer Science",
      institution: "Educational Institution",
      year: "2019-2023",
      score: "8.3 CGPA"
    },
    {
      degree: "Intermediate",
      field: "Science",
      institution: "Educational Institution",
      year: "2017-2019",
      score: "94.7%"
    },
    {
      degree: "10th Grade",
      field: "General Education",
      institution: "Educational Institution",
      year: "2017",
      score: "94%"
    }
  ];

  return (
    <section id="education" ref={ref} className="section-padding">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">My <span className="highlight-text">Education</span></h2>
          <div className="w-24 h-1 bg-highlight mx-auto mt-4"></div>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            My academic journey has shaped my analytical thinking and problem-solving skills.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-4">
                <span className="text-sm text-gray-400">{item.year}</span>
                <h3 className="text-xl font-bold">{item.degree}</h3>
                <p className="text-highlight">{item.field}</p>
              </div>
              <p className="text-gray-400 mb-4">{item.institution}</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Score:</span>
                <span className="text-highlight font-bold">{item.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
