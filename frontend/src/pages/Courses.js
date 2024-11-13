import React from 'react';
import './Courses.css';

const courses = [
  {
    
    coursesList: [
      { title: 'Structural Analysis', imageUrl: '/images', description: 'Learn the fundamentals of structural design and analysis.' },
      { title: 'AutoCAD Civil 3D', imageUrl: '/images', description: 'Learn the fundamentals of structural design and analysis.' },
      { title: 'Surveying', imageUrl: '/images/civil-surveying.jpg', description: 'Gain practical knowledge in surveying techniques and tools.' },
      { title: 'Construction Management', imageUrl: '/images/civil-construction.jpg', description: 'Master the concepts of managing construction projects effectively.' }
    ]
  },
  {
    
    coursesList: [
      { title: 'Data Structures', imageUrl: '/images', description: 'Understand how to organize and manipulate data efficiently.' },
      { title: 'Web Development', imageUrl: '/images/cse-web-development.jpg', description: 'Build dynamic and responsive websites using modern tools and technologies.' },
      { title: 'Artificial Intelligence', imageUrl: '/images/cse-ai.jpg', description: 'Dive into the world of AI and machine learning algorithms.' }
    ]
  },
  {
   
    coursesList: [
      { title: 'Thermodynamics', imageUrl: '/images/mechanical-thermo.jpg', description: 'Study the principles of energy conversion and heat transfer.' },
      { title: 'Fluid Mechanics', imageUrl: '/images/mechanical-fluid.jpg', description: 'Learn the behavior of fluids in motion and at rest.' },
      { title: 'Machine Design', imageUrl: '/images/mechanical-machine-design.jpg', description: 'Master the concepts of designing and building mechanical systems.' }
    ]
  }
];

const Courses = () => {
  return (
    <div className="courses-container">
      <h1>Our Courses</h1>
      {courses.map((courseCategory, index) => (
        <div className="course-category" key={index}>
          <h2>{courseCategory.category}</h2>
          <div className="courses-list">
            {courseCategory.coursesList.map((course, idx) => (
              <div className="course-card" key={idx}>
                <img src={course.imageUrl} alt={course.title} className="course-image" />
                <div className="course-info">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
