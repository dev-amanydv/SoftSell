"use client"
import { outfit, poppins } from "@/lib/fonts";
import { motion } from "motion/react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="pt-8 px-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <div
          className={`${poppins.className} text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-900 bg-clip-text text-transparent`}
        >
          SoftSell
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none "
          >
            {isOpen ? (
                <RxCross2 className="size-7"/>
            ) : (
                <GiHamburgerMenu className="size-7"/>
            )}
            
          </button>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <SlideTabs />
          <button className="border-1 py-2 px-3 rounded-full bg-blue-500 text-black">
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 text-center">
          <SlideTabs />
          <button className="border-1 py-2 px-4 rounded-full bg-blue-500 text-black">
            Get Started
          </button>
        </div>
      )}
    </motion.div>
  );
}

const SlideTabs = ()=>{

    return (
        <ul
        className={` flex-col md:flex md:flex-row mx-auto text-[1.3rem] md:text-[2rem]  p-1 ${outfit.className} rounded-full`}>
            <Tab ><a href="#process">How it works</a></Tab>
            <Tab ><a href="#benefits">Why Choose Us</a></Tab>
            <Tab ><a href="#testimonials">Testimonials</a></Tab>
            <Tab ><a href="#contactus">Contact Us</a></Tab>
        </ul>
    )
}

const Tab = ({children}: {
    children: React.ReactNode
})=>{
return(
    <li className="cursor-pointer  my-1 hover:text-blue-600 font-normal z-10 block text-neutral-300 mix-blend-difference px-3 py-1.5 md:text-lg md:px-5 md:py-3"
    >{children}</li>
     
)
}
