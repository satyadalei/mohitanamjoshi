"use client";
import Image from "next/image";
import React from "react";
import image1 from "../../assets/images/mohita_namjoshi.webp";
import TimeLineBox from "./TimeLineBox";

const Credibility = () => {
  return (
    <div className="flex w-[90%] justify-between pb-10">
      <div className="w-[45%] h-[540px] rounded-lg overflow-hidden relative">
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
      <div className="w-[45%]  pl-3 flex items-center">
        <div className="w-1 h-[85%] bg-gray-500/50 rounded-lg flex flex-col justify-between items-center pt-5 pb-10">
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
