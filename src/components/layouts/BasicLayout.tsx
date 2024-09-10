import React, { FC } from 'react'
import Navbar from '../navbar/Navbar'
import { IChildren } from '@/types/ui/IChildren'
import Footer from '../footer/Footer'


const BasicLayout: FC<IChildren> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default BasicLayout