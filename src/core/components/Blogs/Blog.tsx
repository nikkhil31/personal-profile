import React from 'react'
import { Heading } from '../Common'
import BlogList from './Blog.List'

const Blog = () => {
    return (
        <Heading title={'Blog'}>
            <BlogList />
        </Heading>
    )
}

export default Blog