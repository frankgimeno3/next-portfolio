 
'use client'
import Image from 'next/image';


function Aboutme() {

   return (
    <div className='flex flex-row pl-24 py-10 text-sky-200 pt-16  '>
          <div className='flex-1 '>
            <Image src={"/i3.png"} alt='profile i' width={300} height={300} className='mx-auto justify-center items-center px-auto rounded-full shadow-lg hover:scale-110 transition-transform duration-1000' />
          </div>
          <div className='flex-1 flex flex-col text-left pl-24 pr-14 w-full bg-white bg-opacity-20 pt-10 rounded-l-lg'>
            <h1 className="font-bold text-2xl text-sky-200 transform transition duration-1000 hover:scale-105">
              About me
            </h1>
            <h2 className='italic text-md text-sky-50 mt-2'>My studies</h2>
            <p className='text-sm mt-1'>
              I studied <span className='font-bold text-white'>business management</span> in the 
              <span className='font-bold text-white'> University of Barcelona</span>, simultaneously working as a sales 
              agent for a media company. I successfully finished my degree in 2020.
            </p>
            <p className='text-sm mt-4'>
              Since then, I started learning coding online, watchin <span className='font-bold text-white'>Youtube</span> and 
              in <span className='font-bold text-white'>Udemy.com</span>. 
              I started with <span className='font-bold text-white'>HTML</span>, following with 
              <span className='font-bold text-white'> CSS</span> and <span className='font-bold text-white'>JavaScript</span>.
            </p>
            <p className='text-sm mt-4'>
              In 2022, I attended <span className='font-bold text-white'>Ironhack Barcelona</span>. I successfully finished the 
              course, participating in several group projects, and learning <span className='font-bold text-white'>React</span>,
               <span className='font-bold text-white'> Express</span>, becomening a Junior Fullstack developer, capable of using 
               the full <span>MERN</span> stack.
            </p>
            <p className='text-sm mt-4'>
              Since then, I have taken several online courses to improve my knowledge, complementing with documentation, stack
              overflow and ChatGPT.
            </p>
          </div>
        </div>
  )
}

export default Aboutme;
