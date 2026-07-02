import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title">My Resume</h2>
        <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p style={{ marginBottom: '2rem' }}>
            Interested in my professional experience and background? Download my full resume to learn more about my qualifications and past projects.
          </p>
          <a href="#" className="btn btn-primary" download>
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
