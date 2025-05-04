
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Skill = {
  name: string;
  level: number;
  category: string;
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  const [activeTab, setActiveTab] = useState("all");
  
  const skills: Skill[] = [
    { name: "Java", level: 85, category: "languages" },
    { name: "Python", level: 80, category: "languages" },
    { name: "C", level: 75, category: "languages" },
    { name: "HTML", level: 90, category: "web" },
    { name: "CSS", level: 85, category: "web" },
    { name: "JavaScript", level: 80, category: "web" },
    { name: "React", level: 75, category: "frameworks" },
    { name: "Node.js", level: 70, category: "frameworks" },
    { name: "Spring Boot", level: 65, category: "frameworks" },
    { name: "MySQL", level: 80, category: "database" },
    { name: "MongoDB", level: 75, category: "database" },
    { name: "Git", level: 85, category: "tools" },
    { name: "GitHub", level: 80, category: "tools" },
    { name: "UI/UX Design", level: 75, category: "other" },
    { name: "Machine Learning", level: 70, category: "other" },
    { name: "Problem Solving", level: 90, category: "other" },
  ];
  
  const filteredSkills = activeTab === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);
  
  return (
    <section id="skills" ref={ref} className="section-padding">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">My <span className="highlight-text">Skills</span></h2>
          <div className="w-24 h-1 bg-highlight mx-auto mt-4"></div>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {["all", "languages", "web", "frameworks", "database", "tools", "other"].map((tab) => (
            <motion.button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md capitalize ${activeTab === tab ? 'bg-highlight text-white' : 'bg-secondary'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div 
              key={skill.name} 
              className="glass-card p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(255,61,0,0.3)" }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                <motion.div 
                  className="skill-bar"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
