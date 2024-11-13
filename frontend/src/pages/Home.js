// src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to InternCourse</h1>
        <p>Empowering you to learn new skills anytime, anywhere.</p>
        <button className="cta-button">Explore Courses</button>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>Empower Your Learning Journey!</h2>
        <p>
          Experience a world of endless possibilities with our expertly designed courses. From foundational knowledge to advanced skills, we are dedicated to providing the tools you need to succeed. Take the first step towards your dream career today and unlock your potential with us!
        </p>
      </section>

      {/* Courses Section */}
      <section className="courses">
        <h2>Popular Courses</h2>
        <div className="course-list">
          {/* Course Item 1 */}
          <div className="course-item">
            <img src="/images/webdev.jpg" alt="Web Development" className="course-image" />
            <h3>Web Development</h3>
            <p>Gain essential skills in web development to create modern, responsive websites and applications. Master HTML, CSS, JavaScript, and more to build engaging user experiences.</p>
          </div>
          {/* Course Item 2 */}
          <div className="course-item">
            <img src="/images/autocad-2016-1.jpg" alt="AutoCAD" className="course-image" />
            <h3>AutoCAD</h3>
            <p>Develop foundational skills in AutoCAD to design precise 2D and 3D models for engineering and architectural projects. Learn essential tools and techniques to create professional, detailed drawings.</p>
          </div>
          {/* Course Item 3 */}
          <div className="course-item">
            <img src="/images/revit.webP" alt="Revit" className="course-image" />
            <h3>Revit</h3>
            <p>Gain expertise in Revit to create detailed 3D building designs and streamline project workflows. Learn BIM tools to improve collaboration and project accuracy.</p>
          </div>
          {/* Course Item 4 */}
          <div className="course-item">
            <img src="/images/mat.jpg" alt="MATLAB" className="course-image" />
            <h3>MATLAB</h3>
            <p>Master MATLAB to analyze data, create algorithms, and model complex systems with ease. Learn powerful tools for numerical computing, visualization, and automation.</p>
          </div>
          {/* Course Item 5 */}
          <div className="course-item">
            <img src="/images/data.jpg" alt="Data Science" className="course-image" />
            <h3>Data Science</h3>
            <p>Learn Data Science to extract insights from data, build predictive models, and drive decision-making. Master skills in data analysis, machine learning, and statistical techniques.</p>
          </div>
          {/* Course Item 6 */}
          <div className="course-item">
            <img src="/images/ai.jpg" alt="Artificial Intelligence" className="course-image" />
            <h3>Artificial Intelligence</h3>
            <p>Explore Artificial Intelligence to create intelligent systems that can learn, adapt, and make decisions. Develop skills in machine learning, neural networks, and natural language processing.</p>
          </div>
          {/* Course Item 7 */}
          <div className="course-item">
            <img src="/images/cyber.jpg" alt="Cybersecurity" className="course-image" />
            <h3>Cybersecurity</h3>
            <p>Gain expertise in Cybersecurity to protect systems and data from cyber threats. Learn key skills in risk management, network security, and ethical hacking.</p>
          </div>
          {/* Course Item 8 */}
          <div className="course-item">
            <img src="/images/machine.jpg" alt="Machine Learning" className="course-image" />
            <h3>Machine Learning</h3>
            <p>Learn Machine Learning to create models that enable computers to learn from data and make predictions. Develop expertise in algorithms, data preprocessing, and model evaluation techniques.</p>
          </div>
        </div>
      </section>

 {/* Student's Feedback Section */}
 <section className="feedback">
        <h2>What Our Students Say</h2>
        <div className="feedback-list">
          <div className="feedback-item">
            <p>"The Web Development course was a game-changer for me! I learned so many new skills and now I can build my own websites."</p>
            <h4>Shubhankar Verma</h4>
            <p>Heritage Institute of Technology, Kolkata</p>
          </div>
          <div className="feedback-item">
            <p>"AutoCAD training helped me land a job as an architectural designer. The course was comprehensive and easy to follow."</p>
            <h4>Sumit Chaudhary</h4>
            <p>Birla Institute of Technology - Mesra</p>
          </div>
          <div className="feedback-item">
            <p>"Revit course helped me understand BIM concepts and boosted my career. The instructors were very knowledgeable."</p>
            <h4>Priya Singh</h4>
            <p>Motilal Nehru National Institute of Technology, Allahabad</p>
          </div>
          {/* Add more feedback items as needed */}
        </div>
      </section>


      {/* Call-to-Action Section */}
      <section className="call-to-action">
        <h2>Start Learning Today</h2>
        <p>Join thousands of learners around the world and upgrade your skills.</p>
        <button className="cta-button">Sign Up Now</button>
      </section>


{/* Ongoing Projects Section */}
<section className="ongoing-projects">
        <h2>Ongoing Projects</h2>
        <div className="projects-list">
          <div className="project-item">
            <img src="/images/smart.jpg" alt="Project 1" className="project-image" />
            <div className="project-content">
              <h3>Smart City Design</h3>
              <p>Developing sustainable, smart city designs using cutting-edge urban planning tools like AutoCAD and Revit.</p>
              <a href="/projects/smart-city" className="project-link">View Project</a>
            </div>
          </div>
          <div className="project-item">
            <img src="/images/health.jpg" alt="Project 2" className="project-image" />
            <div className="project-content">
              <h3>Healthcare Data Analysis</h3>
              <p>Utilizing Data Science to analyze healthcare data and improve patient care through predictive models.</p>
              <a href="/projects/healthcare-data" className="project-link">View Project</a>
            </div>
          </div>
          <div className="project-item">
            <img src="/images/asses.jpg" alt="Project 3" className="project-image" />
            <div className="project-content">
              <h3>Cybersecurity Risk Assessment</h3>
              <p>Protecting organizations by identifying cybersecurity risks and providing mitigation strategies through ethical hacking.</p>
              <a href="/projects/cybersecurity" className="project-link">View Project</a>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
