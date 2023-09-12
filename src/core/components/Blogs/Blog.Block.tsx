import React from 'react'
import { TBlogBlock } from './Blog.interface'
import Image from 'next/image'
import Link from 'next/link'


const BlogBlock: React.FC<TBlogBlock> = ({ slug,image, title, description }) => {
    return (
        <Link href={`/blogs/${slug}`}>
            <div className="p-5 mt-3 bg-white w-full flex flex-col md:flex-row border border-black">
                <div className="w-full md:w-1/4">
                    <Image
                        width={279}
                        height={220}
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
        </Link >
    )
}

export default BlogBlock