
'use client'
import Link from 'next/link';
import Image from 'next/image';


function Colornauts() {

  return (
    <div className='flex flex-row pl-24 py-10 text-sky-200 py-16  '>
      <div className='flex-1 '>
        <Image src={"/colornauts.png"} height={600} width={600} alt="" className='m-4 my-6  rounded-lg transform transition duration-1000 hover:scale-105'

        />          </div>
      <div className='flex-1 flex flex-col text-left pl-24 pr-14 w-full bg-white bg-opacity-20 py-10 rounded-l-lg'>
        <h1 className="font-bold text-2xl text-sky-200 transform transition duration-1000 hover:scale-105">
          Colornauts
        </h1>
        <p className='text-sm mt-1'>
          Colornauts was my first collaborative project, and eventhough it's a bit ugly, I still love it
        </p >
        <p className='text-sm mt-4'>It's created with HTML, CSS and simple JavaScript, but it's "Doom" heavy metal soundtrack gets me every single time.</p>
        <p className='text-sm mt-4'>It's a survival game, in which an astronaut has to dodge lasers and meteors</p>
        <p className='text-sm mt-4'>Use the arrows to move and swap colors. Try to cross lasers turning into their color to avoid damage</p>
        <Link href="https://colornaut.vercel.app/" className='text-white mt-4 font-bold'>Click here to play</Link>
      </div>
    </div>
  )
}

export default Colornauts;
