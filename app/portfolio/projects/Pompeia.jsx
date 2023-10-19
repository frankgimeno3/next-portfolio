
'use client'
import Image from 'next/image';
import Link from 'next/link';

function Pompeia() {

  return (
    <div className='flex  flex-col flex-col'>
      <div className='flex  flex-col md:flex-row md:pr-24 py-10 text-sky-200 pt-16  '>
        <div className='flex-1 flex flex-col text-left md:pl-24 md:pr-14 px-10 md:mr-10 bg-white bg-opacity-20 py-10 md:rounded-r-lg'>
          <h1 className="font-bold text-2xl text-sky-200 transform transition duration-1000 hover:scale-105">
            Pompeia Totem Project
          </h1>
          <h2 className='italic text-md text-sky-50'>2 full stack web projects</h2>
          <p className='text-sm mt-5'>
            Pompeia totem was a project for ItBringsArt, created as an interactive game for the immersive exhibition "Los últimos días de Pompeya".</p>
          <Link href="https://www.mataderomadrid.org/programacion/los-ultimos-dias-de-pompeya" className='text-sm font-bold  text-white underline'>The exhibition is still on, you can buy tickets here</Link>
          <p className='text-sm mt-5'>The project consisted on two different websites:</p>
          <ul className='flex flex-col text-sm m-2'>
            <li className='my-1'>· Tablet UI project: Containing a short interactive test, for visitors to be able to find out to which God of Olimpus they are more alike
              by answering some questions. The game is presented in a tablet, attached to a decorated totem-shaped table. </li>
            <li className='my-1'>· Printer: Website to receive all the results of the test, and print a merchandising souvenir for the visitors </li>
            <li className='my-1'>It also contained a shared backend project to manage the databases and users</li>
          </ul>

        </div>
        <div className='flex-1 my-auto'>
          <Image src={"/projects/pompeiamain.webp"} alt='profile i' width={500} height={500} className='mx-auto  justify-center items-center px-auto  md:rounded-lg shadow-lg hover:scale-110 transition-transform duration-1000' />
          <p className='text-xs text-center mt-3 italic mx-10'>Picture of the inmersive exhibition "Los últimos días de Pompeya"</p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row md:px-24 md:mx-24 '>
      <Image src={"/projects/totem1.png"} alt='profile i' width={500} height={500} className='my-1 md:my-0 ml-20 rounded-lg shadow-lg hover:scale-110 transition-transform duration-1000' />
      <Image src={"/projects/totem2.png"} alt='profile i' width={500} height={500} className='my-1 md:my-0 ml-20 rounded-lg shadow-lg hover:scale-110 transition-transform duration-1000' />
      </div>
      <div className='flex flex-col md:flex-row md:px-24 md:mx-24 '>
      <Image src={"/projects/totem3.png"} alt='profile i' width={500} height={500} className='my-1 md:my-0 ml-20 rounded-lg shadow-lg hover:scale-110 transition-transform duration-1000' />
      <Image src={"/projects/printer1.png"} alt='profile i' width={500} height={500} className='my-1 md:my-0 ml-20 rounded-lg shadow-lg hover:scale-110 transition-transform duration-1000' />
      </div>
    </div>
  )
}

export default Pompeia;
