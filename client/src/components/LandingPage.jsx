import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="header">
        <h1>Daily Routine & To-Do List</h1>
        <p>Organize your day, stay productive, and track progress efficiently.</p>
        <Link to="/signup" className="cta-button">
          Get Started
        </Link>
      </header>

      <section className="features">
        <div className="feature">
          <h2>📌 Task Management</h2>
          <p>Create, edit, and organize your tasks with priorities and deadlines.</p>
        </div>
        <div className="feature">
          <h2>📅 Daily Routine Planner</h2>
          <p>Structure your day by assigning tasks to specific time slots.</p>
        </div>
        <div className="feature">
          <h2>⏰ Reminders</h2>
          <p>Receive notifications and email reminders for important tasks.</p>
        </div>
        <div className="feature">
          <h2>📊 Progress Tracking</h2>
          <p>Monitor your productivity with detailed statistics and charts.</p>
        </div>
      </section>

      <footer className="footer">
        <p>Start managing your time effectively today!</p>
        <Link to="/login" className="secondary-button">
          Login
        </Link>
      </footer>
    </div>
  );
};

export default LandingPage;
