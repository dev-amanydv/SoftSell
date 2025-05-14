"use client"
import { outfit } from '@/lib/fonts'
import { motion } from 'motion/react'
import React from 'react'
import { IoTimerSharp } from 'react-icons/io5'
import { MdOutlinePaid } from 'react-icons/md'
import { RiCustomerService2Line, RiSecurePaymentFill } from 'react-icons/ri'

const Benefits = () => {
  return (
    <section id='benefits'  className='pt-150 md:pt-0 bg-[#101827]'>
      <div className='text-center flex w-9/10 py-25 mx-auto flex-col justify-center items-center'>
              <h3 className={`${outfit.className} w-fit px-10 py-1 text-center font-semibold bg-[#03045e] text-[#48cae4] rounded-full text-sm`}>Benefits</h3>
              <h1 className='text-4xl mt-8 font-semibold text-white'>Why Choose Us?</h1>
              <p className='text-xl mt-4 text-neutral-400'>SoftSell provides unmatched value and service in the software license resale market</p>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10'>
                  <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay:0.5 }}
                    className='bg-[#1F2937] rounded-xl p-4 flex flex-col h-60 '>
                      <div className=' rounded-xl size-13 bg-blue-950 flex justify-center items-center'><MdOutlinePaid className='text-white size-9'/></div>
                      <h3 className='text-2xl font-semibold text-left text text-white py-3'>Best Market Rates</h3>
                      <p className='text-lg text-neutral-300 text-left'>Upload your unused or excess software license details through our secure portal</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay:0.5 }}
                    className='bg-[#1F2937] rounded-xl p-4 flex flex-col  h-60 '>
                      <div className=' rounded-xl size-13 bg-blue-950 flex justify-center items-center'><IoTimerSharp className='text-white size-9'/></div>
                      <h3 className='text-2xl font-semibold text-left text text-white py-3'>Fast Processing</h3>
                      <p className='text-lg text-neutral-300 text-left'>Our experts analyze the market value and provide you with the best possible quote</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay:0.5 }}
                    className='bg-[#1F2937] rounded-xl p-4 flex flex-col  h-60 '>
                      <div className=' rounded-xl size-13 bg-blue-950 flex justify-center items-center'><RiSecurePaymentFill className='text-white size-9'/></div>
                      <h3 className='text-2xl font-semibold text-left text text-white py-3'>Secure Transfers</h3>
                      <p className='text-lg text-neutral-300 text-left'>Accept our offer and receive payment within 24-48 hours via your preferred method</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay:0.5 }}
                    className='bg-[#1F2937] rounded-xl p-4 flex flex-col  h-60 '>
                      <div className=' rounded-xl size-13 bg-blue-950 flex justify-center items-center'><RiCustomerService2Line className='text-white size-9'/></div>
                      <h3 className='text-2xl font-semibold text-left text text-white py-3'>Expert Support</h3>
                      <p className='text-lg text-neutral-300 text-left'>Accept our offer and receive payment within 24-48 hours via your preferred method</p>
                  </motion.div>
              </div>
      
            </div>
    </section>
  )
}

export default Benefits
