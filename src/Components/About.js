import React from "react";
import Doctor from "../Assets/about-final-removebg-preview.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to Health Plus, your trusted partner for accessible and
          personalized healthcare. Our expert doctors offer online consultations
          and specialized services, prioritizing your well-being. Join us on
          this journey towards a healthier you.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Book an appointment"
          
        />

        <SolutionStep
          title="Ask your queries"
          
        />

        <SolutionStep
          title="Get Your Answers"
          
        />
      </div>
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>
    </div>
  );
}

export default About;
