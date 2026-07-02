import React from 'react';

const Skills = () => {
  const skills = [
    'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 
    'Responsive Design', 'Git & GitHub', 'Vite', 'Tailwind CSS', 'Redux'
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-tag">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
