"use client";
import React from "react";

const ExperienceSection = () => {
  return (
    <div 
      className="hero]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <h1 className="text-4xl font-bold py-5 text-[#5297cb]">Experience</h1>
          <p className="py-1 font-semibold text-lg">Intern at CloudEye Technologies</p>
          <p className="text-[#294457] text-lg lg:mt-2">Surrounded by talented developers, gained valuable experience while contributing to the solutions. The experience solidified my passion for web development, and I &apos m eager to see where this path takes me next.</p>
        </div>
        <img
          src="/images/cloudeye.png"
          className="bg-white max-w-96px rounded-lg shadow-xl lg:absolute lg:right-52 lg:mb-12"
          alt="CloudEye Technologies Logo"
        />
      </div>
    </div>
  );
};

export default ExperienceSection;
