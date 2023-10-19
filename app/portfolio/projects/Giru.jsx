
'use client'
import Image from 'next/image';


function Giru() {

  return (
    <div className='flex  flex-col md:flex-row md:pl-24 py-10 text-sky-200 py-16  '>
         <div className='flex flex-row md:py-10 md:mx-14'>
          <Image src={"/projects/giru1.png"} alt='profile i' width={120} height={120} className='mx-auto  justify-center items-center md:px-auto rounded-lg rounded-lg shadow-lg md:hover:scale-110 transition-transform duration-1000' />
          <Image src={"/projects/giru2.png"} alt='profile i' width={120} height={120} className='mx-auto  justify-center items-center md:px-auto rounded-lg rounded-lg shadow-lg md:hover:scale-110 transition-transform duration-1000' />
          <Image src={"/projects/giru3.png"} alt='profile i' width={120} height={120} className='mx-auto  justify-center items-center md:px-auto rounded-lg rounded-lg shadow-lg md:hover:scale-110 transition-transform duration-1000' />
        </div>          
      <div className='flex-1 flex flex-col text-left pd:pl-24 pd:pr-14   px-10  w-full bg-white bg-opacity-20 py-10 md:rounded-l-lg'>
        <h1 className="font-bold text-2xl text-sky-200 transform transition duration-1000 hover:scale-105">
          Giru
        </h1>
        <p className='text-sm mt-2'>Giru is a project to get customers as a freelancer.</p>
        <p className='text-sm '>It's an original concept, based on AI generated content.</p>
        <p className='text-sm mt-4'>All of the pictures of the website have been created using Midjourney, an state-of-the-art
          technology which enables users to generate images out of a text prompt. I created a topic for the website based on "chimps
          doing human activities", so that users could see all of those are AI generated and not taken of the internet. I also chose to
          give all the images a white background, so that they are also similar within themselves</p>
        <p className='text-sm mt-4'>The main idea of the website is to prove that best websites are those which are visual, but it's not
          anymore required to spend great amounts of money with professional photography... current technology can save a lot of work an money already!</p>
        <p className='text-sm mt-2'>Its goal is to find companies willing to create an original out-of-the-box project.</p>

      </div>
    </div>
  )
}

export default Giru;
