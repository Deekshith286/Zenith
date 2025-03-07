import React from 'react';
import './App.css'; 

function GifBackground() {
  const starCount = 1000; 
  const stars = Array.from({ length: starCount });

  return (
    <div className="gif-background">
      {stars.map((_, index) => (
        <div key={index} className="star" style={{
          left: `${Math.random() * 100}vw`,
          animationDelay: `${Math.random() * 10}s`
        }}></div>
      ))}
      <div className="content">
        <h1>Welcome to MyApp!</h1>
        <p>This is a rising stars background example.</p>
      </div>
    </div>
  );
}

export default GifBackground;
