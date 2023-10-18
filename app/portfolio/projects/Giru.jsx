 
'use client'
import Image from 'next/image';


function Giru() {

   return (
    <div className='flex flex-row pl-24 py-10 text-sky-200 py-16  '>
          <div className='flex-1 '>
            <Image src={"/projects/giruking.png"} alt='profile i' width={500} height={500} className='rounded-lg shadow-lg hover:scale-110 transition-transform duration-1000' />
          </div>
          <div className='flex-1 flex flex-col text-left pl-24 pr-14 w-full bg-white bg-opacity-20 pt-10 rounded-l-lg'>
            <h1 className="font-bold text-2xl text-sky-200 transform transition duration-1000 hover:scale-105">
            Giru
            </h1>
            <p className='text-sm mt-4'>Giru is a project to get customers as a freelancer.</p>
            <p className='text-sm mt-4'>It's an original concept, based on AI generated content.</p>
            <p className='text-sm mt-4'>Its goal is to find companies willing to create an original out-of-the-box project.</p>

          </div>
        </div>
  )
}

export default Giru;
 