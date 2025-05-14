"use client"
import { outfit } from '@/lib/fonts'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Testemonials = () => {

    const testemonials = [{
        quote: "SoftSell made it so easy to sell my unused software licenses. The process was quick and the payment was prompt. Highly recommend!",
        name: "Emily Johnson",
        company: "Tech Innovations",
        position: "CTO",
        image: "/girl1.webp"
    },
    {
        quote: "I was skeptical at first, but SoftSell delivered on their promises. I got a great price for my licenses and the customer service was top-notch.",
        name: "David Smith",
        company: "Creative Solutions",
        position: "CEO",
        image: "/boy1.jpg"
    },
    {
        quote: "SoftSell helped us recover over 75% of our investment on unused enterprise licenses. The process was quick and their valuation was fair and transparent.",
        name: "Sarah Brown",
        company: "Global Enterprises",
        position: "CFO",
        image: "/girl2.jpg"
    }
];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testemonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [testemonials.length])

  return (
    <section id='testimonials' className='pt-20 background-section testemonial-section'>
        <div className='flex flex-col w-9/10 mx-auto items-center'>
            <h3 className={`${outfit.className} w-fit text-center font-semibold bg-[#03045e] text-[#48cae4] rounded-full px-10 text-sm py-1`}>Testemonials</h3>
            <h1 className='text-4xl mt-8 font-semibold text-white'>What Our Clients Say?</h1>
            <p className='text-xl text-center mt-4 text-neutral-400'>Discover why businesses trust SoftSell for their software license reselling needs</p>
            <div className='bg-[#1F2937] rounded-xl p-4 flex flex-col justify-center h-70 md:h-40 mt-10 w-9/10 md:5/10'>
                <p className='text-neutral-400 font-light italic'> &quot; <span className='italic'>{testemonials[current].quote}</span> &quot; </p>
                <div className='flex gap-5 mt-5'>
                    <div className='rounded-full overflow-hidden'>
                        <Image src={`${testemonials[current].image}`} alt='testemonial-image' width={50} height={50}   />
                    </div>
                    <div>
                        <h3 className='text-neutral-200 text-[1.1rem]'>{testemonials[current].name}</h3>
                        <div className='flex gap-2'>
                            <p className='text-neutral-400 text-sm'>{testemonials[current].position}, </p>
                            <p className='text-neutral-400 text-sm'>{testemonials[current].company}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
          {testemonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current ? 'bg-white scale-110' : 'bg-gray-600'
              }`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
        </div>
    </section>
  )
}

export default Testemonials
