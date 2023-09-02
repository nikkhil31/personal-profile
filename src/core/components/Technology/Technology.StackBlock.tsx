import React from 'react'
import { TStackBlock } from './Teachnology.interface'

const StackBlock: React.FC<TStackBlock> = ({ title }) => {
    return (
        <li className='bg-[#41852D] rounded px-4 py-2 text-white'>
            {title}
        </li>
    )
}

export default StackBlock