import React from 'react';

const About = () => {
  return (
    <section id="about" className="section hero">
      <div className="container">
        <h1>Hi, I'm a <span style={{ color: 'var(--primary-color)' }}>Frontend Developer</span></h1>
        <p>
          I specialize in building visually appealing and responsive web applications using React. 
          My passion lies in creating seamless user experiences and writing clean, maintainable code.
        </p>
        <a href="#projects" className="btn btn-primary">View My Work</a>
      </div>
    </section>
  );
};

export default About;
