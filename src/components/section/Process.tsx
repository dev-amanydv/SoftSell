"use client"
import { outfit } from '@/lib/fonts'
import React from 'react'
import { FaUpload } from 'react-icons/fa'
import { MdPaid } from 'react-icons/md'
import { RiPassValidFill } from 'react-icons/ri'
import { motion } from 'motion/react'

const Process = () => {
  return (
    <section id='process' className='background-section process-section text-white  py-110 md:py-20 flex flex-col'>
      <div className='text-center w-9/10 mx-auto flex flex-col justify-center items-center'>
        <h3 className={`${outfit.className} w-fit text-center font-semibold bg-[#03045e] text-[#48cae4] rounded-full px-10 text-sm py-1`}>Process</h3>
        <h1 className='text-4xl mt-8 font-semibold'>How It Works?</h1>
        <p className='text-xl mt-4 text-neutral-400'>Our streamlined process makes selling your software licenses quick and hassle-free</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-30'>
            <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay:0.5, }}
            whileHover={{scale: 1.03, transition: { duration: 0.2}}}
            className='bg-[#1F2937] rounded-xl p-4 flex flex-col justify-center items-center h-60 '>
                <motion.div
                className='bg-blue-400 rounded-full size-20 bg-gradient-to-r from-violet-600 to-indigo-600 flex justify-center items-center'><FaUpload className='size-13'/></motion.div>
                <h3 className='text-2xl font-semibold p-3'>Upload License</h3>
                <p className='text-lg text-neutral-300'>Upload your unused or excess software license details through our secure portal</p>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay:0.5 }}
            whileHover={{scale: 1.03, transition: { duration: 0.2}}}
            className='bg-[#1F2937] rounded-xl p-4 flex flex-col justify-center items-center h-60 '>
                <motion.div
                className='bg-blue-400 rounded-full size-20 bg-gradient-to-r from-violet-600 to-indigo-600 flex justify-center items-center'><RiPassValidFill className='size-13'/></motion.div>
                <h3 className='text-2xl font-semibold p-3'>Get Valuation</h3>
                <p className='text-lg text-neutral-300'>Our experts analyze the market value and provide you with the best possible quote</p>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay:0.5 }}
            whileHover={{scale: 1.03, transition: { duration: 0.2}}}
            className='bg-[#1F2937] rounded-xl p-4 flex flex-col justify-center items-center h-60 '>
                <motion.div
                className='bg-blue-400 rounded-full size-20 bg-gradient-to-r from-violet-600 to-indigo-600 flex justify-center items-center'><MdPaid className='size-13'/></motion.div>
                <h3 className='text-2xl font-semibold p-3'>Get Paid</h3>
                <p className='text-lg text-neutral-300'>Accept our offer and receive payment within 24-48 hours via your preferred method</p>
            </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Process
