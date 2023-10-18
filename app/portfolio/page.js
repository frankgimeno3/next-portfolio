"use client"
import Image from 'next/image';
import Pompeia from "./projects/Pompeia.jsx"
import Colornauts from "./projects/Colornauts.jsx"
import Giru from "./projects/Giru.jsx"
import Vidrioku from "./projects/Vidrioku.jsx"
import { useState } from 'react';
import Mobiledev from './Mobiledev.jsx';

export default function Porfolio() {

  const [topic, setTopic] = useState("webs")

  const setWebs = ()=>{
    setTopic("webs")
  }
  const setApps = ()=>{
    setTopic("apps")
  }

  return (
    <div className='mt-8 relative'>
      <div className='relative z-10 '>
        <div className='mx-24 px-24 text-center pt-14'>
        <p className="font-bold text-2xl text-sky-200 transform transition duration-1000 hover:scale-105">Portfolio</p>
        <p className='text-sm'>Below you will find my finished projects, with an explanation of the technologies used in their developement, and some details</p>
        <p className='text-sm'>Most of my projects are under developement though, as you will find in my <span className="font-bold">+100 </span>github repositories</p>
        <Image src={"/ghscreen1.png"} width={400} height={400} alt="" className="rounded-lg  mx-auto my-5 transform transition duration-1000 hover:scale-150 hover:border hover:border-gray-500" />

        <p>Please choose one</p>
        <button className='py-3 w-40 bg-sky-50 m-5 text-xs rounded-lg shadow hover:scale-110 hover-bg-white text-gray-700 transition-transform duration-1000'
                onClick={setWebs}>
          Web applications                </button>
        <button className='py-3 w-40 bg-sky-50 m-5 text-xs rounded-lg shadow hover:scale-110 hover-bg-white text-gray-700 transition-transform duration-1000'
        onClick={setApps}>
          Mobile Apps
        </button>
        </div>
        {topic == "webs" && 
        <>
        <Pompeia/>
        <Giru/>
        <Vidrioku/>
        <Colornauts/>
        </>
      }
        {topic == "apps" && <Mobiledev/>}

      </div>
      <video
        autoPlay
        loop
        muted
        className='object-cover w-full h-screen fixed z-0  '
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 0,
          opacity: 0.3,
        }}
      >
        <source src="/videos/blue.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}