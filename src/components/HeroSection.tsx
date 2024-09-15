import React from "react";
import Image from "next/image";

// import MusicPlayer from './MusicPlayer';
import HeroMusicPlayer from "./HeroMusicPlayer";
// import MusicPlayer from './MusicPlayer';

const HeroSection: React.FC = () => {
    return (
        <div className="bg-white">
            <section className="bg-[#FCF8F1] bg-opacity-30 py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                        <div className="">
                            <p className="mb-3 text-4xl font-semibold uppercase tracking-wider text-blue-600">
                                voice Over Artist
                            </p>
                            <p className="text-base font-semibold uppercase tracking-wider text-blue-600">
                                Delivering
                            </p>
                            <h1 className="mt-5 text-4xl font-bold text-black sm:text-6xl xl:text-7xl">
                                Friendly, Trustworthy, Credible{" "}
                                <span className="m-0 p-0 text-blue-600">Voice</span>.
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
                            <div className="mt-5">
                                <button className="group relative mr-3 inline-flex items-center overflow-hidden rounded-full border-2 border-black px-8 py-2.5 text-lg font-medium text-black hover:bg-gray-50 hover:text-white md:mr-5">
                                    <span className="duration-400 ease absolute left-0 top-1/2 flex h-0 w-full items-center justify-start bg-black opacity-100 transition-all group-hover:top-0 group-hover:h-full">
                                        <svg
                                            className="ml-2"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V7Z"
                                                stroke="black"
                                                strokeWidth="null"
                                                className="my-path"
                                            ></path>
                                            <path
                                                d="M20 10V11C20 15.4183 16.4183 19 12 19C7.58172 19 4 15.4183 4 11V10"
                                                stroke="black"
                                                strokeWidth="null"
                                                strokeLinecap="round"
                                                className="my-path"
                                            ></path>
                                            <path
                                                d="M12 19V22"
                                                stroke="black"
                                                strokeWidth="null"
                                                strokeLinecap="round"
                                                className="my-path"
                                            ></path>
                                            <path
                                                d="M7 7H10"
                                                stroke="black"
                                                strokeWidth="null"
                                                strokeLinecap="round"
                                                className="my-path"
                                            ></path>
                                            <path
                                                d="M17 7H14"
                                                stroke="black"
                                                strokeWidth="null"
                                                strokeLinecap="round"
                                                className="my-path"
                                            ></path>
                                            <path
                                                d="M7 11H10"
                                                stroke="black"
                                                strokeWidth="null"
                                                strokeLinecap="round"
                                                className="my-path"
                                            ></path>
                                            <path
                                                d="M17 11H14"
                                                stroke="black"
                                                strokeWidth="null"
                                                strokeLinecap="round"
                                                className="my-path"
                                            ></path>
                                        </svg>
                                    </span>
                                    <span className="ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-300 group-hover:translate-x-0">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            ></path>
                                        </svg>
                                        {/* <svg className='' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  >
                                            <path d="M7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V7Z" stroke="white" strokeWidth="null" className="my-path"></path>
                                            <path d="M20 10V11C20 15.4183 16.4183 19 12 19C7.58172 19 4 15.4183 4 11V10" stroke="white" strokeWidth="null" strokeLinecap="round" className="my-path"></path>
                                            <path d="M12 19V22" stroke="white" strokeWidth="null" strokeLinecap="round" className="my-path"></path>
                                            <path d="M7 7H10" stroke="white" strokeWidth="null" strokeLinecap="round" className="my-path"></path>
                                            <path d="M17 7H14" stroke="white" strokeWidth="null" strokeLinecap="round" className="my-path"></path>
                                            <path d="M7 11H10" stroke="white" strokeWidth="null" strokeLinecap="round" className="my-path"></path>
                                            <path d="M17 11H14" stroke="white" strokeWidth="null" strokeLinecap="round" className="my-path"></path>
                                        </svg> */}
                                    </span>
                                    <span className="relative ml-1 text-base font-semibold transition-all duration-300 group-hover:-translate-x-3">
                                        More voice
                                    </span>
                                </button>
                                <button className="group relative mt-5 inline-flex items-center justify-center overflow-hidden rounded-full bg-sky-500 px-8 py-2.5 tracking-tighter text-white">
                                    <span className="absolute h-0 w-0 rounded-full bg-sky-600/80 transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56"></span>
                                    <span className="absolute inset-0 -mt-1 h-full w-full rounded-lg bg-gradient-to-b from-transparent via-transparent to-sky-500 opacity-30"></span>
                                    <span className="relative text-base font-semibold">
                                        Contact
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="hidden justify-center p-0 md:flex md:p-5">
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
