"use client"
import React, { useEffect, useRef, useState } from 'react';
import { AudioVisualizer } from 'react-audio-visualize';
import { FaPlay } from "react-icons/fa";
import { IoMdPause } from "react-icons/io";

const HeroMusicPlayer: React.FC = () => {
    const [audioBlobUrl, setAudioBlobUrl] = useState<string | null>(null);
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
    const [isMusicPlaying, setMusicPlaying] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const togglePlayMusic = () => {
        setMusicPlaying(prev => !prev);
    }

    // Function to fetch the audio and convert it into a Blob
    const fetchAudioAsBlob = async () => {
        try {
            const response = await fetch('/Assets/songs/Toyota%20Ad%20-%20US%20Market%20-%20Neutral%20Indian%20(Demo).mp3');
            if (!response.ok) {
                throw new Error('Failed to fetch audio file');
            }
            const audioBlob = await response.blob();
            setAudioBlob(audioBlob);
            const audioBlobUrl = URL.createObjectURL(audioBlob);
            setAudioBlobUrl(audioBlobUrl);
        } catch (error) {
            console.error('Error fetching audio:', error);
        }
    };

    useEffect(() => {
        fetchAudioAsBlob();
    }, []);

    useEffect(() => {
        if (isMusicPlaying && audioBlob) {
            if (audioRef.current) {
                audioRef.current.play();
            }
        } else {
            if (audioRef.current) {
                audioRef.current.pause();
            }
        }
    }, [isMusicPlaying, audioBlob]);

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
            setDuration(audioRef.current.duration);
        }
    };

    const handleAudioEnd = () => {
        setMusicPlaying(false);
        setCurrentTime(0);
    };

    // Calculate the width percentage based on the current time and duration
    const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

    // Initial width is 10%, and during playback, reduce by 10% of the progress percentage
    // const initialWidth = 10; // 10% for initial display
    // const adjustedPercentage = progressPercentage > initialWidth ? Math.max(progressPercentage - 10, initialWidth) : initialWidth;

    return (
        <div className='mt-10'>
            <div className='w-[100%] max-w-[350px] h-16 relative rounded-full flex overflow-hidden border'>
                <div onClick={togglePlayMusic} className='z-10 absolute top-0 left-0 cursor-pointer bg-sky-500 rounded-full aspect-square h-[100%] flex justify-center items-center'>
                    {isMusicPlaying ?
                        <IoMdPause className='text-4xl text-white' />
                        :
                        <FaPlay className='text-4xl text-white' />
                    }
                </div>

                <div className='h-full'>
                    {audioBlob && audioBlobUrl ? (
                        <div className={`w-full h-full`} >
                            <audio
                                className='hidden'
                                ref={audioRef}
                                controls
                                onTimeUpdate={handleTimeUpdate}
                                onEnded={handleAudioEnd}
                            >
                                <source src={audioBlobUrl} type="audio/mp3" />
                                Your browser does not support the audio element.
                            </audio>
                            <AudioVisualizer
                                blob={audioBlob}
                                width={350}
                                height={65}
                                barWidth={1}
                                gap={0}
                                barColor={'#87878768'}
                            />
                            <div
                                className='text-white absolute h-full top-0 left-0 bg-green-300/50'
                                style={{ 
                                    width: `${progressPercentage}%`, // Set the adjusted width
                                    transition: 'width 0.1s ease' // Smooth transition effect
                                }}
                            >
                            </div>
                        </div>
                    ) : (
                        <p>Loading audio...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeroMusicPlayer;
