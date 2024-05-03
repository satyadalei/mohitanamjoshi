import React from 'react'
interface ISectionContainer{
    children?:React.ReactNode;
    className?:string;
}
const SectionContainer:React.FC<ISectionContainer> = ({children,className}) => {
  return (
    <div className={`pt-16 ${className}`} >
        {children}
    </div>
  )
}

export default SectionContainer