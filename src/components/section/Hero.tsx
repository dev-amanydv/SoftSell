"use client"
import Image from 'next/image'
import React from 'react'
import Navbar from '../ui/Navbar'
import { inter, outfit } from '@/lib/fonts'
import { FaAngleDown, FaArrowRight } from 'react-icons/fa'
import { motion } from 'motion/react'
const Hero = () => {
  return (
    <section id='hero' className='background-section  hero-section'>
      <div className='w-9/10 mx-auto text-white'>
        <Navbar/>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-30'>
            <motion.div className='flex flex-col justify-center'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            >
                <div className={`${outfit.className} w-7/10 font-semibold bg-[#03045e] text-[#48cae4] rounded-full px-3 text-sm py-1`}>Transform your digital assets</div>
                <h1 className={`${inter.className} text-6xl font-bold mb-4 text-neutral-200`}>Turn Unused Software Licenses Into <span className='text-[#88B2F9]'>Cash</span></h1>
                <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                >
                    <p className={`${inter.className} text-lg text-neutral-300`}>Easily resell unused software licenses and get paid fast—100% secure and legal.</p>
                    <p className={`${inter.className} text-lg text-neutral-300`}>SoftSell helps you monetize your software assets with ease.</p>
                    <p className={`${inter.className} text-lg text-neutral-300`}>Upload your license, get a quote, and receive payment—all in one place.</p>
                </motion.div>
                
                <div className='flex gap-5 mt-8 font-semibold '>
                  <button className='bg-blue-900 text-white cursor-pointer px-4 py-3 rounded-xl'>Sell My License</button>
                  <motion.button
                    whileHover="hover"
                    className="bg-black cursor-pointer border-2 border-blue-700 text-blue-700 px-4 py-3 rounded-xl flex items-center justify-center gap-2"
                  >
                    <h1>Get a Quote</h1>
                    <motion.span
                      variants={{
                        hover: { x: 10 },
                        initial: { x: 0 }
                      }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <FaArrowRight />
                    </motion.span>
                  </motion.button>
                </div>
            </motion.div>
            <motion.div 
            className='flex justify-center ml-30 items-center'
            initial={{ opacity: 0, x: +100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            >
                <Image src={'/softwareincart.svg'} width={400} height={400} alt='hero' />
            </motion.div>
        </div>
      <motion.div
        className='mt-20 flex flex-col justify-center items-center'
        animate={{ y: [-15, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1.5,
          type: 'spring',
          stiffness: 300
        }}
      >
        <p className='text-center text-neutral-400'>Scroll to learn more!</p>
        <FaAngleDown className='text-center size-7 text-blue-400 ' />
      </motion.div>

      </div>
        
    </section>
  )
}

export default Hero
