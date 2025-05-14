"use client"
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import Benefits from "@/components/section/Benefits";
import ContactUs from "@/components/section/ContactUs";
import Footer from "@/components/section/Footer";
import Hero from "@/components/section/Hero";
import Process from "@/components/section/Process";
import Testemonials from "@/components/section/Testemonials";
import Image from "next/image";
import Chatbot from "@/components/ui/Chatbot";


export default function Home() {
  return (
    <>
      <div className="">
          <Hero/>
          <Process/>
          <Benefits/>
          <Testemonials/>
          <ContactUs/>
          <Footer/>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="fixed bottom-4 right-4 w-full max-w-xs sm:max-w-sm md:max-w-md z-50"
      >
        <Chatbot />
      </motion.div>
    </>
  );
}
