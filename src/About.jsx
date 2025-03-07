import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        Welcome to our Habit Tracker! Our mission is to help you build and maintain positive habits that lead to a happier, healthier, and more productive life.
      </p>
      <p>
        Our team is dedicated to providing you with the best tools and resources to track your habits and achieve your goals. We believe that small, consistent actions can lead to significant improvements over time.
      </p>
      <p>
        Thank you for choosing our Habit Tracker to be a part of your journey. We're excited to see you succeed!
      </p>
      <div className="team-section">
        <h2>Our Team</h2>
        <ul>
          <li>
            <strong>Deekshith:</strong> Full Stack Developer and Designer
          </li>
          <li>
            <strong>Manideep:</strong> Full Stack Developer and Designer
          </li>
          <li>
            <strong>Nikitha:</strong> Full Stack Developer and Designer
          </li>
          <li>
            <strong>Zuveriya:</strong> Full Stack Developer and Designer
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
