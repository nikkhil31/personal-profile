import React from 'react'
import StackBlock from './Technology.StackBlock'

const StackList: React.FC = () => {

    const stacks = ['NodeJS',
        'ExpressJS',
        'TypeScript',
        'MongoDB',
        'ElectronJS',
        'CSS',
        'VitaJS',
        'AWS',
        'Prompt Engineering']

    return (
        <ul className='flex flex-wrap justify-center mt-5 gap-2 list-none'>
            {stacks.map((title, index) => (
                <StackBlock key={index} title={title} />
            ))}
        </ul>
    )
}

export default StackList