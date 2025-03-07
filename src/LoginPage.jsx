import React, { useState } from 'react';
import './App.css'; // Ensure to import the App.css for custom styles

function GifBackground() {
  const starCount = 100; // Number of stars
  const stars = Array.from({ length: starCount });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with', username, password);
  };

  return (
    <div className="gif-background">
      {stars.map((_, index) => (
        <div key={index} className="star" style={{
          left: `${Math.random() * 100}vw`,
          animationDelay: `${Math.random() * 10}s`
        }}></div>
      ))}
      <header className="header">
        <div className="logo">Zenith</div>
        <nav className="nav">
          <a href="/login" className="nav-link">Account</a>
          <a href="/login" className="nav-link">Blog</a>
          <a href="/login" className="nav-link">Login</a>
          <a href="/signup" className="nav-link">Signup</a>
        </nav>
      </header>
      <main className="main-content">
        <div className="login-box">
          <h2 className="login-title">Account Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
          <div className="additional-links">
            <a href="/forgot-password">Forgot your password?</a>
            <br />
            <a href="/create-account">Create new account</a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default GifBackground;
