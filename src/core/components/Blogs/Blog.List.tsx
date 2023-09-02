import React from 'react'
import BlogBlock from './Blog.Block'

const BlogList = () => {
    return (
        <div className='space-y-4'>
            <BlogBlock
                image={'https://via.placeholder.com/279x220'}
                title={'This is the Blog Title'}
                description='This is a short description of the blog. It gives a quick overview of
                    what the blog is all about.'
            />


            <BlogBlock
                image={'https://via.placeholder.com/279x220'}
                title={'This is the Blog Title'}
                description='This is a short description of the blog. It gives a quick overview of
                    what the blog is all about.'
            />
        </div>
    )
}

export default BlogList