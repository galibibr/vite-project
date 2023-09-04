


import React from 'react'
import imgHeader from '../assets/header.jpg'
import { TypeAnimation } from 'react-type-animation'
import { FaInstagram, FaFacebook, FaLinkedinIn, FaTelegram, FaGithub } from 'react-icons/fa'

const Main = () => {
    return (
        <div id='main'>
            <img className=' w-full h-screen object-cover object-left scale-x-[-1]' src={imgHeader}
                alt="/" />
            <div className=' w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className=' max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Galib Ibragimov</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
                        <TypeAnimation
                            sequence={[
                                'Front-End Developer',
                                2000,
                                'Coder',
                                2000,
                                'Tech Enthusiast',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-between py-6 max-w-[200px] w-full'>
                        <FaFacebook className=' cursor-pointer' size={20}></FaFacebook>
                        <FaInstagram className=' cursor-pointer' size={20}></FaInstagram>
                        <FaInstagram className=' cursor-pointer' size={20}></FaInstagram>
                        <FaInstagram className=' cursor-pointer' size={20}></FaInstagram>
                        <FaTelegram className=' cursor-pointer' size={20}></FaTelegram>
                        <FaTelegram className=' cursor-pointer' size={20}></FaTelegram>
                        <FaTelegram className=' cursor-pointer' size={20}></FaTelegram>
                        <FaLinkedinIn className=' cursor-pointer' size={20}></FaLinkedinIn>
                        <FaGithub className=' cursor-pointer' size={20}></FaGithub>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main