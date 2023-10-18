
'use client'
import Image from 'next/image';
import Email from "./Email.jsx"



function ContactMe() {

  return (
    <div className='flex flex-row pr-24 py-10 text-sky-200 pt-16  '>
      <div className='flex-1 flex flex-col text-left pl-24 pr-14 mr-10 bg-white bg-opacity-20 pt-10 rounded-r-lg'>
        <h1 className="font-bold text-2xl text-sky-200 transform transition duration-1000 hover:scale-105">
          Contact Me
        </h1>
        <Email />

      </div>
      <div className='flex-1 flex flex-col my-auto'>
        <Image src={"/i3.png"} alt='profile i' width={300} height={300} className='mx-auto justify-center items-center px-auto rounded-full shadow-lgclassName=" hover:scale-110 transition-transform duration-1000"' />
        <div className='flex flex-row mt-1 mx-auto'>
          <a
            href="mailto:frankgimeno3@gmail.com"
            className="h-20 w-20   p-4"
          >
            <button >
              <Image src={"/social/gmail.png"} width={50} height={50} alt="" className=" hover:scale-110 transition-transform duration-1000" />
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/frankgimeno/chat"
            className="h-20 w-20   p-1 "
          >
            <button >
              <Image src={"/social/lkd.webp"} width={90} height={90} alt="" className=" hover:scale-110 transition-transform duration-1000" />
            </button>
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=+34636722518&text=Hi, I saw you portfolio and would be pleased to have a conversation with you."
            className="h-20 w-20   p-4"
          >
            <button >
              <Image src={"/social/whats.webp"} width={50} height={50} alt="" className=" hover:scale-110 transition-transform duration-1000" />
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactMe;
