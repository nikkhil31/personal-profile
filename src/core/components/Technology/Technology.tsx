import React from 'react'
import { Heading } from '../Common'
import StackList from './Technology.StackList'

const Technology: React.FC = () => {
    return (
        <Heading
            title='Technology'
            description={'In the realm of technology, my core specializations focus on delivering versatile and cutting-edge solutions.'}>
            <StackList />
        </Heading>
    )
}

export default Technology