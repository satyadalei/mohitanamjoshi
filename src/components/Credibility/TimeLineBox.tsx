import React from 'react'

const TimeLineBox = ({children}:{children: React.ReactNode}) => {
    return (
        <div className="w-5 h-5 bg-gray-500 rounded-full relative ">
            <p className="absolute left-10 -top-0.5 font-bold w-[280px] md:w-[300px] text-sm">
                {children}
            </p>
        </div>
    )
}

export default TimeLineBox