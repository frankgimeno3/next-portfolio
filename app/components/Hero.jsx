
'use client'
import Image from 'next/image';
import Link from 'next/link';


function Hero() {

  return (
    <div className='flex flex-col md:flex-row md:pr-24 md:py-10 text-sky-200 pt-8 md:pt-16  '>
      <div className='flex-1 flex flex-col text-left md:pl-24 pl-10 pr-14 mr-10 bg-white bg-opacity-20 pt-10 rounded-r-lg py-5'>
        <h1 className="font-bold text-2xl text-sky-200 transform transition duration-1000 hover:scale-105">
          Frank Gimeno Ruiz
        </h1>
        <h2 className='italic text-md text-sky-50'>Full Stack Developer</h2>
        <p className='text-sm mt-5'>
          Hi! I'm a <span className='font-bold text-white'>Full Stack Developer</span> from{' '}
          <span className='font-bold text-white hover:scale-110'>Barcelona</span> with strong business and
          technical skills, equipped to excel in dynamic environments. Proactive and adaptable, I thrive in solving
          challenges and learning new technical skills.
        </p>
        <div className='flex flex-row mt-5'>
          <div className=''>
            <Link href={"https://www.linkedin.com/in/frankgimeno/"}>
              <button className='flex flex-col py-3 w-20 bg-sky-50  text-xs rounded-lg shadow-white hover:scale-110 hover:bg-white text-gray-700 transition-transform duration-1000'>
                <p className='mx-auto mt-1'>Linkedin</p> <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" /></svg>
              </button>
            </Link>
          </div>
          <div className='mx-4'>
            <Link href={"https://github.com/frankgimeno3"}>
              <button className='flex flex-col py-3 w-20 bg-sky-50   text-xs rounded-lg shadow hover:scale-110 hover-bg-white text-gray-700 transition-transform duration-1000'>
                <p className='mx-auto mt-1'>Github</p> <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" /></svg>
              </button>
            </Link>
          </div>
          <div>
            <Link href={"https://www.linkedin.com/in/frankgimeno/"}>
              <button className=' flex flex-col py-4 w-20 bg-sky-50   text-xs rounded-lg shadow hover:scale-110 hover-bg-white text-gray-700 transition-transform duration-1000'>
                <p className='mx-auto'>My CV</p>
                <svg className='mx-auto  ' width="20" height="20" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 18h-3c-.48 0-1-.379-1-1v-14c0-.481.38-1 1-1h14c.621 0 1 .522 1 1v3h3c.621 0 1 .522 1 1v14c0 .621-.522 1-1 1h-14c-.48 0-1-.379-1-1zm1.5-10.5v13h13v-13zm9-1.5v-2.5h-13v13h2.5v-9.5c0-.481.38-1 1-1z" fill-rule="nonzero"/></svg>
              </button></Link>
          </div>
        </div>
      </div>
      <div className='flex-1 '>
        <Image src={"/i3.png"} alt='profile i' width={300} height={300} className='mt-10 md:mt-1 mx-auto justify-center items-center px-auto rounded-full shadow-lg hover:scale-110 transition-transform duration-1000' />
      </div>
    </div>
  )
}

export default Hero;
