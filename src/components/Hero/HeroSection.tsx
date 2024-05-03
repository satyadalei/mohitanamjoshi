"use client";
import React from "react";
import SectionContainer from "../common/SectionContainer";
import FancyText from "@carefully-coded/react-text-gradient";
import AnimatedGradientText from "./StyledComponent";

const HeroSection = () => {
  return (
    <SectionContainer className="flex flex-col justify-center items-center mb-24">
      <div className="mt-28 flex flex-col items-center">
        <AnimatedGradientText
          className="text-7xl font-bold text-center text-gray-900 dark:text-gray-100 mb-2 "
          text="Friendly, Trustworthy, Credible"
          colors={["#F858E0", "#ffdf7d", "#97f4ab", "#83e9f7", "#F858E0"]}
          gradientType="to right"
          animationDuration="5s"
          animationDelay="1s"
        />
        <h1 className="text-6xl font-bold text-center text-gray-900 dark:text-gray-100 mb-2">
          Voice
        </h1>
        <p className="text-center text-white/50 mt-5 text-lg w-[55%]">
          Specializing in &nbsp;
          <span className=" text-white/90 border-b border-sky-500">
            Indian, Indian-American and British-Indian voiceover.
          </span> &nbsp;
          Native speaker of &nbsp;
          <span className=" text-white/90 border-b border-sky-500">
            Hindi, Marathi and Gujarati. 
          </span> &nbsp;
          Providing end-to-end voiceover solutions.
        </p>

        <button className="gradient-border p-2 mt-10" >Contact</button>
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
