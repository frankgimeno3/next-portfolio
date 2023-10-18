
'use client'
import Image from 'next/image';
import Link from 'next/link';

function Vidrioku() {

  return (
    <div className='flex flex-row pr-24 py-10 text-sky-200 pt-16  '>
      <div className='flex-1 flex flex-col text-left pl-24 pr-14 mr-10 bg-white bg-opacity-20 py-10 rounded-r-lg'>
        <h1 className="font-bold text-2xl text-sky-200 transform transition duration-1000 hover:scale-105">
          Vidrioku
        </h1>

        <p className='text-sm mt-5'>
          Vidrioku is a website which connects technological companies from the Flat Glass industry with specialized technical workers.
        </p>
        <p className='text-sm mt-5'>
          Companies have a company profile, and can post job offers into a job-offer database.        </p>
        <p className='text-sm mt-5'>
          Workers can search for job offers that suit them, and send companies their CV        </p>
        <p className='text-sm mt-5'>
          Both companies and workers can search and interact with other profiles from companies and workers   </p>
      </div>
      <div className='flex-1 my-auto flex flex-row'>
        <Image src={"/projects/vidrioku1.png"} alt='profile i' width={200} height={200} className='mx-auto  justify-center items-center px-auto rounded-lg rounded-lg shadow-lg hover:scale-110 transition-transform duration-1000' />
      </div>
      <div className='flex flex-col py-10'>
        <Image src={"/projects/vidrioku2.png"} alt='profile i' width={150} height={150} className='mx-auto  justify-center items-center px-auto rounded-lg rounded-lg shadow-lg hover:scale-110 transition-transform duration-1000' />
        <Image src={"/projects/vidrioku3.png"} alt='profile i' width={150} height={150} className='mx-auto  justify-center items-center px-auto rounded-lg rounded-lg shadow-lg hover:scale-110 transition-transform duration-1000' />
      </div>
    </div>
  )
}

export default Vidrioku;
