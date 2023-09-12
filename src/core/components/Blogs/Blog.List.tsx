import React from 'react'
import BlogBlock from './Blog.Block'
import supabase from '@/core/utils/supabase'
import { TBlogPost } from './Blog.interface'
import { PostgrestSingleResponse } from '@supabase/supabase-js'

const BlogList: React.FC = async () => {

    // const { data: blogs } = await supabase.from('blogs').select(`id,title,short_desc`)
    // const { data: thumbanil } = await supabase.from('files_related_morphs').select(`file_id (
    //     url
    // )`).match({ related_id:blogs }).single()

    const { data: blogs }:PostgrestSingleResponse<TBlogPost[]> = await supabase.rpc('get_blogs_with_files1')



    return blogs && (
        <div className='space-y-4'>
            {blogs.map((blog) => (
                <BlogBlock
                    key={blog.blog_id}
                    slug={blog.blog_slug}
                    image={blog.thumbnail}
                    title={blog.blog_title}
                    description={blog.blog_short_desc}
                />
            ))}
        </div>
    )
}

export default BlogList