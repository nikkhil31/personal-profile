import React from 'react'
import { Heading } from './Common.interface'



const Heading: React.FC<Heading> = ({ title, description, children }) => {
    return (
        <div className='mt-20 px-4 md:px-8 mx-auto max-w-3xl'>
            <div className='flex items-center border-b border-gray-400 pb-2 mb-4'>
                <h1 className='text-2xl font-bold flex-grow text-center'>{title}</h1>
            </div>
            <div className='space-y-2'>
            {description?.split('\n').map(text => (
                <p className='px-2'>
                    {text}
                </p>
            ))}
            </div>
            {children}
        </div>
    )
}

export default Heading