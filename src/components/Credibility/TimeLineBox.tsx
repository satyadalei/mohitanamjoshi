import React from 'react'

const TimeLineBox = ({children}:{children: React.ReactNode}) => {
    return (
        <div className="w-5 h-5 bg-gray-500 rounded-full relative">
            <p className="absolute left-10 -top-0.5 w-[480px] text-xl font-bold">
                {children}
            </p>
        </div>
    )
}

export default TimeLineBox