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
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                        <div className='' >
                            <p className="mb-3 text-4xl font-semibold tracking-wider text-blue-600 uppercase">
                                voice Over Artist
                            </p>
                            <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                                Delivering
                            </p>
                            <h1 className="mt-5 text-4xl font-bold text-black sm:text-6xl xl:text-7xl">
                                Friendly, Trustworthy, Credible <span className="m-0 p-0 text-blue-600" >Voice</span>.
                            </h1>
                            <HeroMusicPlayer />
                            {/* <a
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
                            </a> */}
                            <div className='mt-5' >
                                <button
                                    className="mr-3 md:mr-5 relative group inline-flex items-center px-8 py-2.5 overflow-hidden text-lg font-medium text-black border-2 border-black rounded-full hover:text-white group hover:bg-gray-50">
                                    <span
                                        className="absolute left-0 w-full h-0 flex items-center justify-start transition-all bg-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease">
                                        <svg className='ml-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  >
                                            <path d="M7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V7Z" stroke="black" stroke-width="null" className="my-path"></path>
                                            <path d="M20 10V11C20 15.4183 16.4183 19 12 19C7.58172 19 4 15.4183 4 11V10" stroke="black" stroke-width="null" stroke-linecap="round" className="my-path"></path>
                                            <path d="M12 19V22" stroke="black" stroke-width="null" stroke-linecap="round" className="my-path"></path>
                                            <path d="M7 7H10" stroke="black" stroke-width="null" stroke-linecap="round" className="my-path"></path>
                                            <path d="M17 7H14" stroke="black" stroke-width="null" stroke-linecap="round" className="my-path"></path>
                                            <path d="M7 11H10" stroke="black" stroke-width="null" stroke-linecap="round" className="my-path"></path>
                                            <path d="M17 11H14" stroke="black" stroke-width="null" stroke-linecap="round" className="my-path"></path>
                                        </svg>
                                    </span>
                                    <span
                                        className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                        {/* <svg className='' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  >
                                            <path d="M7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V7Z" stroke="white" stroke-width="null" className="my-path"></path>
                                            <path d="M20 10V11C20 15.4183 16.4183 19 12 19C7.58172 19 4 15.4183 4 11V10" stroke="white" stroke-width="null" stroke-linecap="round" className="my-path"></path>
                                            <path d="M12 19V22" stroke="white" stroke-width="null" stroke-linecap="round" className="my-path"></path>
                                            <path d="M7 7H10" stroke="white" stroke-width="null" stroke-linecap="round" className="my-path"></path>
                                            <path d="M17 7H14" stroke="white" stroke-width="null" stroke-linecap="round" className="my-path"></path>
                                            <path d="M7 11H10" stroke="white" stroke-width="null" stroke-linecap="round" className="my-path"></path>
                                            <path d="M17 11H14" stroke="white" stroke-width="null" stroke-linecap="round" className="my-path"></path>
                                        </svg> */}
                                    </span>
                                    <span className="relative text-base font-semibold transition-all duration-300 ml-1 group-hover:-translate-x-3">
                                        More voice
                                    </span>
                                </button>
                                <button
                                    className="mt-5 relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-sky-500 rounded-full group">
                                    <span
                                        className="absolute w-0 h-0 transition-all duration-500 ease-out bg-sky-600/80 rounded-full group-hover:w-56 group-hover:h-56">

                                    </span>
                                    <span
                                        className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-sky-500"></span>
                                    <span className="relative text-base font-semibold">Contact</span>
                                </button>
                            </div>
                        </div>

                        <div className='hidden md:flex justify-center p-0 md:p-5' >
                            <Image
                                className="w-full rounded-full"
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
