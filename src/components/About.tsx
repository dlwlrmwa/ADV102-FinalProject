import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Footer from "./Footer";

const About = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">About Recipe Finder</h1>
        <p className="text-lg text-muted-foreground mb-6 text-center">
          Recipe Finder is your ultimate destination for discovering, saving, and sharing recipes from around the world. Whether you're a seasoned chef or a beginner in the kitchen, our platform is designed to inspire your culinary journey.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Mission</h2>
        <p className="text-lg text-muted-foreground mb-6 text-center">
          Our mission is to make cooking accessible, enjoyable, and rewarding for everyone. We aim to connect food enthusiasts and provide them with the tools they need to create delicious meals.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-center">Features</h2>
        <ul className="list-disc list-inside text-lg text-muted-foreground mb-6 text-center">
          <li>Explore a wide variety of recipes across different cuisines and categories.</li>
          <li>Save your favorite recipes and create personalized meal plans.</li>
          <li>Get step-by-step instructions and cooking tips.</li>
          <li>Share your own recipes with the community.</li>
        </ul>
        <div className="text-center">
          <button
            className="text-2xl font-semibold mb-4 px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition"
          >
            Join Us
          </button>
        </div>
        <p
          className="text-lg text-muted-foreground text-center cursor-pointer hover:text-primary"
        >
          Become a part of our growing community of food lovers. Sign up today to start your culinary adventure!
        </p>
      </div>
      <Footer /> {/* Add the Footer component */}
    </div>
  );
};

export default About;