"use client";
import React, { ChangeEvent } from "react";
import { useRef, useState } from "react";

const AudioPlayer = () => {
  const currentAudio = useRef<HTMLAudioElement>(null);
  const [currentMusicDetails, setCurrentMusicDetails] = useState({
    songName: "Toyota Ad",
    songArtist: "Mohita Namjoshi",
    songSrc: "./Assets/songs/Toyota Ad - US Market - Neutral Indian (Demo).mp3",
    songAvatar: "./Assets/Images/Mohita_Namjoshi_pic1.jpg",
  });
  const [audioProgress, setAudioProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);
  const [musicTotalLength, setMusicTotalLength] = useState<string>("04:38");
  const [musicCurrentTime, setMusicCurrentTime] = useState<string>("00:00");

  const handleMusicProgressBar = (e: ChangeEvent<HTMLInputElement>) => {
    const progress = parseInt(e.target.value);
    console.log("Music progress", progress);
    setAudioProgress(progress);
    if (currentAudio.current) {
      currentAudio.current.currentTime =
        (progress * currentAudio.current.duration) / 100;
    }
  };

  const handleAudioPlay = () => {
    if (currentAudio.current) {
      if (currentAudio.current.paused) {
        currentAudio.current.play();
        setIsAudioPlaying(true);
      } else {
        currentAudio.current.pause();
        setIsAudioPlaying(false);
      }
    }
  };

  const handleNextSong = () => {
    const nextIndex = (musicIndex + 1) % musicAPI.length;
    setMusicIndex(nextIndex);
    updateCurrentMusicDetails(nextIndex);
  };

  const handlePrevSong = () => {
    const prevIndex = (musicIndex - 1 + musicAPI.length) % musicAPI.length;
    setMusicIndex(prevIndex);
    updateCurrentMusicDetails(prevIndex);
  };

  const updateCurrentMusicDetails = (index: number) => {
    const musicObject = musicAPI[index];
    if (currentAudio.current) {
      currentAudio.current.src = musicObject.songSrc;
      currentAudio.current.play();
    }
    setCurrentMusicDetails(musicObject);
    setIsAudioPlaying(true);
  };

  const handleAudioUpdate = () => {
    if (currentAudio.current) {
      const duration = currentAudio.current.duration;
      const currentTime = currentAudio.current.currentTime;

      const minutes = Math.floor(duration / 60);
      const seconds = Math.floor(duration % 60);
      setMusicTotalLength(
        `${minutes < 10 ? `0${minutes}` : minutes} : ${
          seconds < 10 ? `0${seconds}` : seconds
        }`
      );

      const currentMin = Math.floor(currentTime / 60);
      const currentSec = Math.floor(currentTime % 60);
      setMusicCurrentTime(
        `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${
          currentSec < 10 ? `0${currentSec}` : currentSec
        }`
      );

      const progress = (currentTime / duration) * 100;
      setAudioProgress(isNaN(progress) ? 0 : progress);
    }
  };

  const musicAPI = [
    {
      songName: "Toyota Ad",
      songArtist: "Mohita Namjoshi",
      songSrc: "./Assets/songs/Toyota Ad - US Market - Neutral Indian (Demo).mp3",
      songAvatar: "./Assets/Images/Mohita_Namjoshi_pic1.jpg",
    },
    {
      songName: "Canara-Deloitte Explainer-Neutral Indian (Demo)",
      songArtist: "Mohita Namjoshi",
      songSrc: "./Assets/songs/Canara-Deloitte Explainer-Neutral Indian (Demo).mp3",
      songAvatar: "./Assets/Images/Mohita_Namjoshi_pic1.jpg",
    },
    {
      songName: "SAP Ariba North American Explainer",
      songArtist: "Mohita Namjoshi",
      songSrc: "./Assets/songs/SAP Ariba North American Explainer.mp3",
      songAvatar: "./Assets/Images/Mohita_Namjoshi_pic1.jpg",
    },
    {
      songName: "Hindi Product Explainer",
      songArtist: "Mohita Namjoshi",
      songSrc: "./Assets/songs/Hindi Product Explainer.mp3",
      songAvatar: "./Assets/Images/Mohita_Namjoshi_pic1.jpg",
    },
  ];

  return (
    <div className="mt-36">
      <h1>AudioPlayer</h1>

      {/* ---- Music Time details ---- */}
      <div className="">
        <p className="">{musicCurrentTime}</p>
        <p className="">{musicTotalLength}</p>
      </div>

      {/* ---- Music Details --- */}
      <div className="border border-red-400" >
        <p className="musicPlayer">Music Player</p>
        <p className="music-Head-Name">{currentMusicDetails.songName}</p>
        <p className="music-Artist-Name">{currentMusicDetails.songArtist}</p>
      </div>

      {/* --- Audio --- */}
      <audio
        src="./Assets/songs/Toyota Ad - US Market - Neutral Indian (Demo).mp3"
        ref={currentAudio}
        onEnded={handleNextSong}
        onTimeUpdate={handleAudioUpdate}
      />
      {/* --- Music Range ----- */}
      <input
        type="range"
        name="musicProgressBar"
        className=""
        value={audioProgress}
        onChange={handleMusicProgressBar}
      />
      {/* ---- Music Controls --- */}
      <div className="">
        <p className="text-white" onClick={handlePrevSong}>
          Prev
        </p>
        <p className="" onClick={handleAudioPlay}>
          {isAudioPlaying ? "Pause" : "Play"}
        </p>
        <p className="text-white" onClick={handleNextSong}>
          Next
        </p>
      </div>
    </div>
  );
};

export default AudioPlayer;
