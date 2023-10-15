import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className='flex flex-row p-24 text-sky-200'>
        <div className='flex flex-col text-right px-24'>
          <h1 className='font-bold text-2xl text-sky-200'>Frank Gimeno Ruiz</h1>
          <h2 className="italic text-md text-sky-50 ">Full Stack Developer</h2>
          <p className='text-sm mt-5'>Hi! I'm a Full Stack Developer from Barcelona with strong business and technical skills, equipped to excel in dynamic environments. Proactive and adaptable, I thrive in solving challenges and learning new technical skills.</p>
          <div className='flex flex-col pl-24 ml-12'>
            <div className='mt-14 '>
              <button className='py-3 w-40 bg-sky-100 bg-opacity-10 text-xs rounded-lg shadow-white hover:scale-110 hover:bg-opacity-30 text-white transition-transform transition-bg-opacity transition-text duration-1000'>
                Contact me
              </button>
            </div>
            <div className='mt-5 '>
              <button className='py-3 w-40 bg-sky-100 bg-opacity-10 text-xs rounded-lg shadow hover:scale-110 hover:bg-opacity-30 text-white transition-transform transition-bg-opacity transition-text duration-1000'>
                See my portfolio
              </button>
            </div>
          </div>
        </div>
        <Image src={"/i3.png"} alt='profile i' width={300} height={300} className='rounded-full shadow-lg  hover:scale-110 transition-transform duration-1000' />
      </div>
    </div>
  )
}
