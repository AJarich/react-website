import React from 'react';
import "./HeroSection.css";
import "../App.css";
import { Button } from './Button';

function HeroSection() {
  return(
    <div className="hero-container">
    <video src='videos/Milky Way Glowing At Night.mp4' autoPlay loop muted />
      <h1>Adventure Awaits</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
