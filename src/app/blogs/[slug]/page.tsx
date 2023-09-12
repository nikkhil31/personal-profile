import BlogDetail from "@/core/components/Blogs/Blog.Detail";
import { TBlogDetail, TBlogPost } from "@/core/components/Blogs/Blog.interface";
import { Footer } from "@/core/components/Footer";
import supabase from "@/core/utils/supabase";
import { PostgrestSingleResponse } from "@supabase/supabase-js";



export async function generateStaticParams() {
    const { data: posts = [] }: PostgrestSingleResponse<TBlogPost[]> = await supabase.rpc('get_blogs_with_files1')

    return posts?.map(posts => ({
        slug: posts.blog_slug,
    })) ?? []
}



export default async function Blog({ params }: { params: TBlogDetail }) {

    return <>
        <BlogDetail slug={params.slug} />
        <Footer />
    </>
}