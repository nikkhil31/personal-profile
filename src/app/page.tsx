import { About } from '@/core/components/About'
import { Blog } from '@/core/components/Blogs'
import { Footer } from '@/core/components/Footer'
import { Profile } from '@/core/components/Profile'
import { Technology } from '@/core/components/Technology'

export default function Home() {
  return <>
    <Profile />
    <About />
    <Technology />
    {/* <Blog /> */}
    <Footer />
  </>
}
