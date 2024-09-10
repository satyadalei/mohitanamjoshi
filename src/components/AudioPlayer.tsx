import React, { useEffect, useRef, useState } from "react";

const AudioPlayer: React.FC = () => {
  // Use the correct type for the audio ref
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const totalBars = 30; // Number of tiny bars

  // Toggle play/pause
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Update progress
  const updateProgress = () => {
    if (audioRef.current) {
      const { duration, currentTime } = audioRef.current;
      const percentage = (currentTime / duration) * 100;
      setProgress(percentage);
    }
  };

  // Stop playback when ended
  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  // Attach event listeners to the audio element
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", updateProgress);
      audio.addEventListener("ended", handleEnded);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", updateProgress);
        audio.removeEventListener("ended", handleEnded);
      }
    };
  }, []);

  // Generate tiny bars
  const renderBars = () => {
    const bars = [];
    for (let i = 0; i < totalBars; i++) {
      bars.push(
        <div
          key={i}
          className="bar"
          style={{
            height: `${Math.random() * 30 + 5}px`, // Random height for visual effect
            backgroundColor: i < (progress / 100) * totalBars ? "#f39c12" : "#ddd",
          }}
        ></div>
      );
    }
    return bars;
  };

  return (
    <div className="audio-player bg-black">
      <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
      <div className="bars">{renderBars()}</div>
      <audio ref={audioRef} src="/path-to-your-audio-file.mp3"></audio>

      {/* Add some styles */}
      <style jsx>{`
        .audio-player {
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 20px;
        }
        .bars {
          display: flex;
          gap: 2px;
          width: 100%;
          max-width: 300px;
        }
        .bar {
          width: 5px;
          background-color: #ddd;
          transition: background-color 0.1s ease;
        }
      `}</style>
    </div>
  );
};

export default AudioPlayer;
