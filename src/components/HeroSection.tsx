import React from 'react'
import Clients from './hero/Clients'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <div className="bg-neutral-900 min-h-screen max-w-7xl pl-5 pr-5 lg:pl-10 lg:pr-10">
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto px-4 xl:px-0 pt-24 lg:pt-32">
                <div>
                    <h1 className="font-semibold text-white text-5xl md:text-6xl">
                        <span className="text-[#ff0] inline-block mb-1">Voice Over Artist</span>  <br />
                    </h1>
                    <span className='font-semibold text-3xl mt-1' >Friendly, Trustworthy, Credible Voice.</span>
                    <div className="max-w-4xl">
                        <p className="mt-5 text-neutral-400 text-lg">
                            It is a creative hub where imagination meets craftsmanship to transform ideas into tangible realities. At Preline Agency, we specialize in turning conceptual visions into concrete forms, whether it be through design, artistry, or technological innovation.
                        </p>
                    </div>
                </div>

                <div className='flex justify-center items-center' >
                   <Image className='rounded-full' src="/Assets/images/Mohita_Namjoshi_pic1.jpg" alt='Mohita Namjoshi' width={400} height={300} />
                </div>
            </div>
            <Clients />
        </div>
    )
}

export default HeroSection