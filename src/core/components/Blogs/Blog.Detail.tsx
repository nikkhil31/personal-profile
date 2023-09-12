import { FaArrowLeft } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import supabase from '@/core/utils/supabase';
import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { TBlogPost, TBlogDetail } from './Blog.interface';
import React from 'react';

const BlogDetail: React.FC<TBlogDetail> = async ({ slug }) => {
    const { data: post }: PostgrestSingleResponse<TBlogPost> = await supabase.rpc('get_blogs_with_files1').eq('blog_slug', slug).single()


    return post && (
        <div className='my-3'>
            <div className="container mx-auto p-4">
                <div className="flex justify-start items-center">
                    <Link href="/">
                        <span className="text-lg flex items-center">
                            <FaArrowLeft size={20} className="mr-1" /> <span>Home</span>
                        </span>
                    </Link>
                </div>
            </div>

            <main className="mt-20 px-4 md:px-8 mx-auto max-w-3xl">
                <div className="flex items-center border-b border-gray-400 pb-2 mb-4">
                    <h1 className="text-2xl font-bold flex-grow text-center">{post.blog_title}</h1>
                </div>
                <div className="mb-8">
                    <img src={post.thumbnail} alt={post.blog_title} className="w-full h-auto rounded" />
                </div>
                <div className="space-y-4 prose lg:prose-lg">
                    <ReactMarkdown>{post.blog_content}</ReactMarkdown>
                </div>
            </main>
        </div>
    )
}

export default BlogDetail