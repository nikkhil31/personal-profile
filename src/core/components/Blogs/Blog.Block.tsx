import React from 'react'
import { TBlogBlock } from './Blog.interface'
import Image from 'next/image'


const BlogBlock: React.FC<TBlogBlock> = ({ image, title, description }) => {
    return (
        <div className="p-5 bg-white w-full flex flex-col md:flex-row border border-black">
            {/* Blog Image */}
            <div className="w-full md:w-1/4">
                <Image
                    width={200}
                    height={200}
                    src={image}
                    alt="Blog"
                    className="w-full object-cover h-40 md:h-auto" // Make the image responsive
                />
            </div>

            {/* Blog Content */}
            <div className="w-full md:w-3/4 mt-4 md:mt-0 md:ml-4">
                {/* Blog Title */}
                <h2 className="text-2xl font-semibold">
                    {title}
                </h2>

                {/* Blog Description */}
                <p className="text-gray-600 mt-2">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default BlogBlock