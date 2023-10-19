
'use client'
import Image from 'next/image';


function MyCustomers() {

  return (
    <div className='md:mx-24 md:px-24'>
    <div className='md:mx-24 md:px-24 mx-5'>
      <div className='px-12 flex flex-col text-center  bg-white bg-opacity-20 pt-10 rounded-lg'>
        <h1 className="font-bold text-2xl text-sky-200 transform transition duration-1000 hover:scale-105">
          My Customers
        </h1>
        <p className='text-sm mt-1'>
          I have developed software for the following companies:
        </p>
        <div className='flex flex-col mx-auto my-10'>
          <div className='flex flex-row'>
            <Image src={"/companies/vpf.jpg"} width={100} height={100} alt="" className='rounded-lg m-2 hover:scale-110'/>
            <Image src={"/companies/se.jpg"} width={100} height={100} alt="" className='rounded-lg m-2 hover:scale-110'/>
          </div>
          <div className='flex flex-row'>
            <Image src={"/companies/ssse.png"} width={100} height={100} alt="" className='rounded-lg m-2 hover:scale-110'/>
            <Image src={"/companies/itbrings.jpg"} width={100} height={100} alt="" className='rounded-lg m-2 hover:scale-110'/>
          </div>
        </div>
      </div>
      </div>
      </div>

  )
}

export default MyCustomers;
