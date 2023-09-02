import React from 'react'
import { MdEmail } from "react-icons/md";
import { BiLogoGithub, BiLogoLinkedinSquare, BiLogoSkype } from "react-icons/bi";
import Image from 'next/image';

const Profile: React.FC = () => {
    return (
        <div className='flex justify-center items-center my-20'>
            <div className='text-center'>
                <Image
                    src={'/profile.jpg'}
                    width={200}
                    height={200}
                    alt='profile image'
                    className='rounded-full w-48 h-48 mx-auto'
                />
                <h2 className='text-2xl font-semibold mt-4'>Nikhil Limbad</h2>
                <h3 className='text-xl font-semibold mt-1 text-[#aaa]'>India</h3>
                <ul className='flex justify-center space-x-4 mt-4 text-lg'>
                    <li>
                        <a href='mailto:nikhilimbad@gmail.com'>
                            <MdEmail size='30px' />
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/nikkhil31' target='_blank' rel='noopener noreferrer'>
                            <BiLogoGithub size='30px' />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/nikhil-limbad-a511b5182/' target='_blank' rel='noopener noreferrer'>
                            <BiLogoLinkedinSquare size='30px' />
                        </a>
                    </li>
                    <li>
                        <a href='skype:live:.cid.5a25201a6c64e049' target='_blank' rel='noopener noreferrer'>
                            <BiLogoSkype size='30px' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Profile