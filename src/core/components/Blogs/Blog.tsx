import React from 'react'
import { Heading } from '../Common'
import BlogList from './Blog.List'
import supabase from '@/core/utils/supabase'

const Blog = async () => {

    return (
        <Heading title={'Blog'}>
            <BlogList />
        </Heading>
    )
}

export default Blog