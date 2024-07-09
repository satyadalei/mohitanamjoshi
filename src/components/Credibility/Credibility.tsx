"use client";
import Image from "next/image";
import React from "react";
import image1 from "../assets/images/Mohita_Namjoshi_pic1.jpg";
import TimeLineBox from "./TimeLineBox";

const Credibility = () => {
  return (
    <div className="flex flex-col md:flex-row w-[90%] justify-between pb-10">

      {/* --- Left div --- */}
      <div className="w-full md:w-[45%] mb-3 md:mb-0 h-[400px] md:h-[500px] rounded-lg overflow-hidden relative">
        {/* <p>Left</p> */}
        {/* <Image width={300} height={400} src={image1} alt='Mohita Namjoshi' /> */}
        <Image
          src={image1}
          alt="Mohita Namjoshi"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="absolute inset-0"
        />
      </div>

      {/* --- Right div --- */}
      <div className="w-full md:w-[45%] lg:w-[50%] flex-col pl-3 flex mt-5 md:mt-0">
        <p>Hi! I am Mohita Namjoshi, a professional voice over artists with 9 years of experience.</p>
        <ul className="list-dash text-white/50 mt-5 text-lg mb-3 lg:mb-5">
          <li>Specializing in Indian, Indian-American and British-Indian voiceover.</li>
          <li>Native speaker of Hindi, Marathi and Gujarati.</li>
        </ul>
        <div className="w-1 h-[250px] bg-gray-500/50 rounded-lg flex flex-col justify-between items-center pt-5 pb-10 ">
          <TimeLineBox>
            Providing{" "}
            <span className="text-sky-500">
              end-to-end voiceover <br /> solutions.{" "}
            </span>
          </TimeLineBox>
          <TimeLineBox>
            <span className="text-sky-500">24 Hour</span> Turnaround
          </TimeLineBox>
          <TimeLineBox>
            Serving <span className="text-sky-500">clients worldwide.</span>
          </TimeLineBox>
          <TimeLineBox>
            Professional member at <br />{" "}
            <span className="text-sky-500">WORLD-VOICES.ORG</span>
          </TimeLineBox>
        </div>
      </div>

    </div>
  );
};

export default Credibility;
