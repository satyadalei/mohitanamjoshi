"use client";
import React from "react";
import SectionContainer from "../Common/SectionContainer";
import FancyText from "@carefully-coded/react-text-gradient";
import AnimatedGradientText from "./StyledComponent";
import Image from "next/image";
import image2 from "../../assets/images/Mohita_Namjoshi_pic1.jpg"
import SearchWindow from "./SearchWindow";

import { useAppDispatch, useAppSelector } from "@/redux-store/hooks"; 
import { toggleSearchWindow } from "@/redux-store/features/searchWindow/searchSlice";

const HeroSection = () => {

   

  return (
    <SectionContainer className="flex flex-col justify-center items-center mb-10 lg:mb-24 h-fit">
      <div className="mt-7 lg:mt-20 flex justify-between">
        <SearchWindow />
        {/* ---- Left Div --- */}
        <div className="w-full md:w-[50%] pl-5 lg:pl-0 pt-10">
          <AnimatedGradientText
            className="text-5xl md:text-7xl font-bold leading-tight lg:leading-[5rem] text-center text-gray-900 dark:text-gray-100 mb-2"
            text="Friendly, Trustworthy, Credible"
            colors={["#F858E0", "#ffdf7d", "#97f4ab", "#83e9f7", "#F858E0"]}
            gradientType="to right"
            animationDuration="5s"
            animationDelay="1s"
          /> <br />
          <span className="text-5xl block text-left mt-5 lg:text-7xl font-bold text-gray-900 dark:text-gray-100">
            Voice
          </span> <br />

          <button className="bg-gradient-to-r from-cyan-500 text-lg lg:text-xl to-blue-500 p-2 lg:p-3 pr-4 pl-4 mt-5 rounded-[10px] ">Contact Mohita</button>
        </div>

        {/* --- right Div ---- */}
        <div className="h-0 md:w-[50%] md:h-[500px] rounded-lg overflow-hidden relative">
          {/* <p>Left</p> */}
          {/* <Image width={300} height={400} src={image1} alt='Mohita Namjoshi' /> */}
          <Image
            src={image2}
            alt="Mohita Namjoshi"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="absolute inset-0"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
