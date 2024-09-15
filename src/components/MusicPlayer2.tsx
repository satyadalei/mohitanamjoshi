"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";

import { FaPlay } from "react-icons/fa";
import { IoMdPause } from "react-icons/io";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { RxSpeakerLoud } from "react-icons/rx";

const AudioPlayer = () => {
  const currentAudio = useRef<HTMLAudioElement | null>(null);
  const [currentMusicDetails, setCurrentMusicDetails] = useState({
    songName: "Toyota Ad",
    songArtist: "Mohita Namjoshi",
    songSrc: "/Assets/songs/Toyota Ad - US Market - Neutral Indian (Demo).mp3",
    songAvatar: "/Assets/Images/Mohita_Namjoshi_pic1.jpg",
  });
  const [audioProgress, setAudioProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);
  const [musicTotalLength, setMusicTotalLength] = useState<string>("04:38");
  const [musicCurrentTime, setMusicCurrentTime] = useState<string>("00:00");
  const [volume, setVolume] = useState(0.5); // Initial volume (50%)

  // Update the progress bar based on audio progress
  let isSeeking = false; // A flag to track if we are manually seeking the audio.

const handleMusicProgressBar = (e: ChangeEvent<HTMLInputElement>) => {
  const progress = parseInt(e.target.value);
  setAudioProgress(progress);

  if (currentAudio.current) {
    isSeeking = true; // Set the flag when manually seeking

    currentAudio.current.currentTime = (progress * currentAudio.current.duration) / 100;

    // If the audio is paused, don't auto-play it while seeking
    if (!isAudioPlaying) {
      return;
    }

    // Ensure the audio plays from the updated position only if it was already playing
    currentAudio.current.play();
  }
};


  // Play/pause the audio
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

  // Handle playing the next song
  const handleNextSong = () => {
    const nextIndex = (musicIndex + 1) % musicAPI.length;
    setMusicIndex(nextIndex);
    updateCurrentMusicDetails(nextIndex);
  };

  // Handle playing the previous song
  const handlePrevSong = () => {
    const prevIndex = (musicIndex - 1 + musicAPI.length) % musicAPI.length;
    setMusicIndex(prevIndex);
    updateCurrentMusicDetails(prevIndex);
  };

  // Update song details when switching songs
  const updateCurrentMusicDetails = (index: number) => {
    const musicObject = musicAPI[index];
    if (currentAudio.current) {
      // Pause the current audio before changing the source
      currentAudio.current.pause();

      // Update the source of the audio element
      currentAudio.current.src = musicObject.songSrc;

      // Wait for the audio to load before playing it
      currentAudio.current.onloadeddata = () => {
        currentAudio.current
          ?.play()
          .then(() => {
            setIsAudioPlaying(true);
          })
          .catch((error) => {
            console.error("Error playing audio:", error);
          });
      };
    }

    setCurrentMusicDetails(musicObject);
  };

  // Update audio duration and progress
  const handleAudioUpdate = () => {
    if (currentAudio.current && !isSeeking) { // Only update progress if not seeking
      const duration = currentAudio.current.duration || 0;
      const currentTime = currentAudio.current.currentTime;
  
      const minutes = Math.floor(duration / 60);
      const seconds = Math.floor(duration % 60);
      setMusicTotalLength(
        `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`,
      );
  
      const currentMin = Math.floor(currentTime / 60);
      const currentSec = Math.floor(currentTime % 60);
      setMusicCurrentTime(
        `${currentMin < 10 ? `0${currentMin}` : currentMin}:${currentSec < 10 ? `0${currentSec}` : currentSec}`,
      );
  
      const progress = (currentTime / duration) * 100;
      setAudioProgress(isNaN(progress) ? 0 : progress);
    } else {
      isSeeking = false; // Reset the flag after seeking
    }
  };
  

  // Ensure metadata is loaded before updating times
  const handleMetadataLoaded = () => {
    if (currentAudio.current) {
      const duration = currentAudio.current.duration;

      if (isNaN(duration)) {
        setMusicTotalLength("00:00");
        return;
      }

      const minutes = Math.floor(duration / 60);
      const seconds = Math.floor(duration % 60);
      setMusicTotalLength(
        `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`,
      );
    }
  };

  useEffect(() => {
    // Store the current value of currentAudio.current in a variable
    const audioElement = currentAudio.current;

    if (audioElement) {
      audioElement.addEventListener("loadedmetadata", handleMetadataLoaded);
      audioElement.addEventListener("timeupdate", handleAudioUpdate);
    }

    return () => {
      // Use the stored value in the cleanup function
      if (audioElement) {
        audioElement.removeEventListener(
          "loadedmetadata",
          handleMetadataLoaded,
        );
        audioElement.removeEventListener("timeupdate", handleAudioUpdate);
      }
    };
  }, [currentMusicDetails]);

  // useEffect(() => {
  //   if (currentAudio.current) {
  //     currentAudio.current.addEventListener(
  //       "loadedmetadata",
  //       handleMetadataLoaded,
  //     );
  //     currentAudio.current.addEventListener("timeupdate", handleAudioUpdate);
  //   }
  //   return () => {
  //     if (currentAudio.current) {
  //       currentAudio.current.removeEventListener(
  //         "loadedmetadata",
  //         handleMetadataLoaded,
  //       );
  //       currentAudio.current.removeEventListener(
  //         "timeupdate",
  //         handleAudioUpdate,
  //       );
  //     }
  //   };
  // }, [currentMusicDetails]);

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const volumeValue = parseFloat(e.target.value);
    setVolume(volumeValue);
    if (currentAudio.current) {
      currentAudio.current.volume = volumeValue;
    }
  };

  // Select a song from the list
  const selectSongFromList = (index: number) => {
    setMusicIndex(index);
    updateCurrentMusicDetails(index);
  };

  const musicAPI = [
    {
      songName: "Toyota Ad",
      songArtist: "Mohita Namjoshi",
      songSrc:
        "/Assets/songs/Toyota Ad - US Market - Neutral Indian (Demo).mp3",
      songAvatar: "/Assets/Images/Mohita_Namjoshi_pic1.jpg",
    },
    {
      songName: "Canara-Deloitte Explainer-Neutral Indian (Demo)",
      songArtist: "Mohita Namjoshi",
      songSrc:
        "/Assets/songs/Canara-Deloitte Explainer-Neutral Indian (Demo).mp3",
      songAvatar: "/Assets/Images/Mohita_Namjoshi_pic1.jpg",
    },
    {
      songName: "SAP Ariba North American Explainer",
      songArtist: "Mohita Namjoshi",
      songSrc: "/Assets/songs/SAP Ariba North American Explainer.mp3",
      songAvatar: "/Assets/Images/Mohita_Namjoshi_pic1.jpg",
    },
    {
      songName: "Hindi Product Explainer",
      songArtist: "Mohita Namjoshi",
      songSrc: "/Assets/songs/Hindi Product Explainer.mp3",
      songAvatar: "/Assets/Images/Mohita_Namjoshi_pic1.jpg",
    },
    {
      songName: "Maruti Baleno Hindi E-learning",
      songArtist: "Mohita Namjoshi",
      songSrc: "/Assets/songs/Maruti Baleno Hindi E-learning.mp3",
      songAvatar: "/Assets/Images/Mohita_Namjoshi_pic1.jpg",
    },
  ];

  return (
    <div className="inset-0 mx-auto h-full w-full max-w-6xl rounded-lg bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] p-8 [background-size:16px_16px]">
      {/* <h1 className="text-3xl font-bold mb-4">Music Player</h1> */}

      <div className="flex flex-col items-center justify-center sm:flex-row">
        <div className="relative mb-3 flex h-44 w-44 flex-col items-center sm:m-0 md:mb-5">
          <Image
            src={currentMusicDetails.songAvatar}
            alt="Artist"
            // width={150}
            // height={150}
            fill={true}
            className="rounded-full shadow-lg"
          />
        </div>

        <div className="w-full flex-grow p-3 pl-5 sm:w-auto">
          <div className="mb-2 flex">
            <div className="mr-5 flex w-20 items-center justify-center">
              <button
                onClick={handleAudioPlay}
                className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 px-4 py-2 text-white shadow-md transition hover:bg-blue-600"
              >
                {isAudioPlaying ? <IoMdPause /> : <FaPlay />}
              </button>
            </div>
            <div>
              {/* --- Music Details --- */}
              <p className="font-bold">
                Dura. :{" "}
                {currentAudio.current !== null &&
                  currentAudio.current.duration.toString().split(".")[0]}{" "}
                <span className="text-sky-300">sec</span>
              </p>
              <p className="text-xl font-semibold">
                {currentMusicDetails.songName}
              </p>
              <p className="text-sm text-gray-400">
                {currentMusicDetails.songArtist}
              </p>
            </div>
          </div>

          <div className="mb-2 flex w-full items-center justify-center">
            {/* --- Prev & Next Button --- */}
            <div className="mr-5 flex w-20 items-center justify-around gap-5 text-xl text-green-600 md:text-4xl">
              <TbPlayerTrackPrevFilled className="cursor-pointer" onClick={handlePrevSong} />
              <TbPlayerTrackNextFilled className="cursor-pointer" onClick={handleNextSong} />
            </div>

            {/* --- Music Progress Bar --- */}
            <div className="mr-3 flex flex-1 pr-3">
              <div className="flex flex-1 flex-col items-center">
                <input
                  type="range"
                  value={audioProgress}
                  onChange={handleMusicProgressBar}
                  className="w-full flex-1"
                />
                <div className="flex w-full justify-between">
                  <span>{musicCurrentTime}</span>
                  <span>{musicTotalLength}</span>
                </div>
              </div>

              {/* ---- Volume Control ---- */}
              <div className="group/volume relative ml-3 flex w-fit cursor-pointer items-center justify-between">
                <RxSpeakerLoud className="text-2xl" />
                <div className="invisible absolute -top-20 left-0 flex h-20 w-5 items-center group-hover/volume:visible">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="h-full w-full cursor-pointer"
                    style={{
                      writingMode: "vertical-rl", // This changes the slider to vertical
                      transform: "rotate(180deg)", // Rotates the slider for correct orientation
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---- Audio ---- */}
      <audio
        className="hidden"
        src={currentMusicDetails.songSrc}
        ref={currentAudio}
        onEnded={handleNextSong}
        onTimeUpdate={handleAudioUpdate}
      />

      {/* ---- Song List ---- */}
      <div className="mt-3 w-full">
        <ul className="space-y-2 rounded-lg">
          {musicAPI.map((song, index) => (
            <li
              key={index}
              className={`cursor-pointer rounded-lg border border-gray-300 p-2 shadow-lg transition-colors ${
                musicIndex === index
                  ? "border-b-0 border-l-4 border-r-0 border-t-0 border-sky-500 bg-sky-100" // Selected song
                  : "bg-white hover:bg-gray-200/65" // Default and hover
              }`}
              onClick={() => selectSongFromList(index)}
            >
              <p className="text-sm font-medium text-gray-900">
                {song.songName}
              </p>
              <p className="text-xs text-gray-500">{song.songArtist}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AudioPlayer;
