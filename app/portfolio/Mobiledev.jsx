
'use client'
import Link from 'next/link';
import Image from 'next/image';


function Mobiledev() {

  return (
    <div className='flex flex-col md:flex-row pl-24 py-10 text-sky-200 py-16  '>
      <div className='flex-1 flex flex-row '>
        <Image src={"/projects/dados.png"} height={150} width={150} alt="" className='m-4 my-6  rounded-lg transform transition duration-1000 hover:scale-105' />
        <Image src={"/projects/xilofono.png"} height={150} width={150} alt="" className='m-4 my-6  rounded-lg transform transition duration-1000 hover:scale-105' />
        <Image src={"/projects/presentacion.png"} height={150} width={150} alt="" className='m-4 my-6  rounded-lg transform transition duration-1000 hover:scale-105' />
      </div>
      <div className='flex-1 flex flex-col text-left pl-24 pr-14 w-full bg-white bg-opacity-20 py-10 rounded-l-lg'>
        <h1 className="font-bold text-2xl text-sky-200 transform transition duration-1000 hover:scale-105">
          Mobile apps
        </h1>
        <p className='text-sm mt-1'>
          I am currently learning how to create mobile apps using Flutter (Dart).
        </p>
        <p className='text-sm mt-1'>
          I am not yet doing this kind of coding in professional gigs, but I will be capable soon.
        </p>
        <p className='text-sm mt-1'>
          In the meanwhile, here you will find some screenshots of my apps.
        </p>
        <p className='text-sm mt-4'>
          As said, I am using Flutter in Android Studio, and I am cappable of performing HTTP requests to a backend.
        </p>        
        <p className='text-sm mt-4'>
          As a backend, I can access public API's, or I can create my own using Express, connecting to my own databases, or with Next,
          connecting to Firebase an creating a NextAuth authentication.
        </p>
      </div>
    </div>
  )
}

export default Mobiledev;
