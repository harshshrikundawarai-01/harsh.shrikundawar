import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce App',
      description: 'A full-stack e-commerce application with secure payments and user authentication.',
      img: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '#'
    },
    {
      title: 'Task Management System',
      description: 'A responsive React application for managing daily tasks and team collaboration.',
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application utilizing external REST APIs and data visualization.',
      img: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects Showcase</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="glass-card">
              <img src={project.img} alt={project.title} className="project-img" loading="lazy" />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <a href={project.link} className="btn btn-outline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
