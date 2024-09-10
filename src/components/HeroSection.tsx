import React from 'react';
import Image from 'next/image';

// import MusicPlayer from './MusicPlayer';
import HeroMusicPlayer from './HeroMusicPlayer';
// import MusicPlayer from './MusicPlayer';

const HeroSection: React.FC = () => {
   

    return (
        <div className="bg-white">
            <section className="bg-[#FCF8F1] bg-opacity-30 py-10">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <p className="mb-3 text-4xl lg:mt-8 font-semibold tracking-wider text-blue-600 uppercase">
                                voice Over Artist 
                            </p>
                            <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                               Delivering
                            </p>
                            <h1 className="mt-5 text-4xl font-bold text-black sm:text-6xl xl:text-7xl">
                            Friendly, Trustworthy, Credible <span className="m-0 p-0 text-blue-600" >Voice</span>.
                            </h1>
                            <HeroMusicPlayer />
                            <a
                                href="#"
                                className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                                role="button"
                            >
                                Contact
                                <svg
                                    className="w-6 h-6 ml-8 -mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </a>
                        </div>

                        <div>
                            <Image
                                className="w-full"
                                src="/Assets/Images/Mohita_Namjoshi_pic1.jpg"
                                alt="Hero Image"
                                width={500}
                                height={350}
                                priority={true}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
