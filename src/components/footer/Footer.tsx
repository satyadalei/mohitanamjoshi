"use client"
import FooterLinkColumn from "./FooterLinkColumn"

const Footer = () => {
    return (
        <div className="bg-gray-900 text-white">
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
                    <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                        <FooterLinkColumn linkCategory="Apples" links={[{ url: "", name: "Web" }, { url: "", name: "Web" }, { url: "", name: "Web" }, { url: "", name: "Web" }]} />
                        <FooterLinkColumn linkCategory="Apples" links={[{ url: "", name: "Web" }, { url: "", name: "Web" }, { url: "", name: "Web" }, { url: "", name: "Web" }]} />
                        <FooterLinkColumn linkCategory="Apples" links={[{ url: "", name: "Web" }, { url: "", name: "Web" }, { url: "", name: "Web" }, { url: "", name: "Web" }]} />
                        <FooterLinkColumn linkCategory="Apples" links={[{ url: "", name: "Web" }, { url: "", name: "Web" }, { url: "", name: "Web" }, { url: "", name: "Web" }]} />
                    </div>
                    <div className="lg:col-span-2 flex-1 mt-6 md:mt-0">
                        <p className="mb-3" >Stay up to date</p>
                        <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-x-3">
                            <div className="relative">
                                <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <button className="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow">
                                Subscribe
                            </button>
                        </form>
                        <a className="text-lg block mt-3 mb-3 text-neutral-500" href="mailto:mohitanamjoshi@gmail.com">mohitanamjoshi@gmail.com</a>
                        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                            <a
                                href="https://www.instagram.com/mohitanamjoshi/"
                                target="_blank"
                                className="transition-colors hover:text-gray-500 duration-200 hover:text-teal-accent-400"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </a>
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/mohita-namjoshi-894b11ab"
                                className="transition-colors hover:text-gray-500 duration-200 hover:text-teal-accent-400"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
                    <p className="text-sm text-gray-500">
                        © Copyright {new Date().getFullYear()} mohitanamjoshi.com <br /> All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};


export default Footer