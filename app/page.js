import Image from 'next/image';
import MainSkills from './components/skills/mainSkills';

export default function Home() {
  return (
    <div className='mt-8 relative'>
      <div className='relative z-10'>
        <div className='flex flex-row pr-24 py-10 text-sky-200 pt-16  '>
          <div className='flex-1 flex flex-col text-left pl-24 pr-14 mr-10 bg-white bg-opacity-20 pt-10 rounded-r-lg'>
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
                <button className='py-3 w-40 bg-sky-50  text-xs rounded-lg shadow-white hover:scale-110 hover:bg-white text-gray-700 transition-transform duration-1000'>
                  Contact me
                </button>
              </div>
              <div className='mx-4'>
                <button className='py-3 w-40 bg-sky-50   text-xs rounded-lg shadow hover:scale-110 hover-bg-white text-gray-700 transition-transform duration-1000'>
                  My Skills
                </button>
              </div>
              <div>
                <button className='py-3 w-40 bg-sky-50   text-xs rounded-lg shadow hover:scale-110 hover-bg-white text-gray-700 transition-transform duration-1000'>
                  Portfolio
                </button>
              </div>
            </div>
          </div>
          <div className='flex-1 '>
            <Image src={"/i3.png"} alt='profile i' width={300} height={300} className='mx-auto justify-center items-center px-auto rounded-full shadow-lg hover:scale-110 transition-transform duration-1000' />
          </div>
        </div>
        <MainSkills />

      </div>
      <video
        autoPlay
        loop
        muted
        className='object-cover w-full h-screen fixed z-0  '
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 0,
          opacity: 0.3,
        }}
      >
        <source src="/videos/blue.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}