import Image from 'next/image';
import React from 'react';
import { RiUserVoiceFill, Ri24HoursFill } from "react-icons/ri";
import { FaMicrophoneLines } from "react-icons/fa6";
import { IoEarth } from "react-icons/io5";

interface ServiceItemProps {
  Icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ Icon, title, description }) => (
  <div className="flex items-start gap-x-4 md:gap-x-6">
    {/* Added shrink-0 to prevent the icon container from shrinking */}
    <span className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 bg-white text-gray-800 shadow-sm">
      <Icon size={24} />
    </span>
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  </div>
);

const serviceItems = [
  {
    Icon: RiUserVoiceFill,
    title: "Native speaker of Hindi, Marathi, and Gujarati.",
    description: "Experience in delivering high-quality voiceovers in multiple languages.",
  },
  {
    Icon: FaMicrophoneLines,
    title: "Providing end-to-end voiceover solutions.",
    description: "Complete voiceover services tailored to your project needs.",
  },
  {
    Icon: Ri24HoursFill,
    title: "24-Hour Turnaround",
    description: "Fast, efficient delivery for all your voiceover projects.",
  },
  {
    Icon: IoEarth,
    title: "Serving clients worldwide.",
    description: "Providing voiceover services for clients globally, across different industries.",
  },
];


const Services: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

          {/* Image Section */}
          <div className="flex justify-center relative w-full min-h-80 ">
            <Image
              fill={true}
              src="/Assets/Images/mohita namjoshi smile_.jpg"
              alt="Mohita Namjoshi"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>

          {/* Text Section */}
          <div className="sm:col-span-2 pl-0 sm:pl-5 md:mt-5 sm:mt-0">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Specializing in
              <span className="text-teal-500 font-bold"> Indian</span>,
              <span className="text-teal-500 font-bold"> Indian-American</span>, and
              <span className="text-teal-500 font-bold"> British-Indian</span> voiceovers.
            </h1>


            {/* Services List */}
            <div className="space-y-8 mt-8">
              {serviceItems.map((item, index) => (
                <ServiceItem
                  key={index}
                  Icon={item.Icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;