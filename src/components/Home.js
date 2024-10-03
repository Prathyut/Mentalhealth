import React from 'react';
import '../App.css';
import feelingLonely from '../assests/images/feelinglonely.jpg';
import trauma from '../assests/images/trauma.jpg';
import overthink from '../assests/images/overthink.jpg';
import stress from '../assests/images/stress.jpg';
import anxiety from '../assests/images/anxiety.jpg';
import depression from '../assests/images/depression.jpg';
import Procrastination from '../assests/images/Procrastination.jpg';

function Home() {
  const topics = [
    {
      title: "Feeling Lonely",
      image: feelingLonely, // Replace with actual path
      description: "Experiencing difficulty understanding your emotions? Finding yourself on the brink of tears? Reach out to experts who cultivate an atmosphere of unconditional support."
    },
    {
      title: "Trauma",
      image: trauma, // Replace with actual path
      description: "Having trouble pinpointing the root causes of your triggers? Connect with seasoned professionals and begin your journey of self-discovery without delay."
    },
    {
      title: "Overthinking",
      image: overthink, // Replace with actual path
      description: "Struggling to manage your thoughts? Constantly feeling overwhelmed? Connect with professionals who provide a safe space to help you find peace and clarity."
    },
    {
      title: "Stress",
      image: stress, // Replace with actual path
      description: "Feeling overwhelmed with schoolwork or personal responsibilities? Our experts can help you manage stress in a healthy, productive way."
    },
    {
      title: "Anxiety",
      image: anxiety, // Replace with actual path
      description: "Experiencing constant worry, fear, or panic? Learn how to cope with anxiety and regain control of your mind with the help of our trained professionals."
    },
    {
      title: "Depression",
      image: depression, // Replace with actual path
      description: "Struggling with feelings of hopelessness, sadness, or fatigue? We offer a safe space to talk and begin your journey to better mental health."
    },
    {
      title: "Procrastination",
      image: Procrastination, // Replace with actual path
      description: "Finding it hard to stay focused or motivated? Connect with our experts to develop habits that combat procrastination and boost productivity."
    }
  ];

  return (
    <div className="home-container">
      <h1>Welcome to Healthy Heads</h1>
      <p>Your Mental Health Matters</p>
      <div className="card-grid">
        {topics.map((topic, index) => (
          <div className="card" key={index}>
            <img src={topic.image} alt={topic.title} className="card-image" />
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
