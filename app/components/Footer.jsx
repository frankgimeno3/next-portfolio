 
'use client'
import Link from 'next/link'

const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'Portfolio',
  route: '/portfolio'
}, {
  label: 'Contact',
  route: '/contact'
}]

function Footer() {

   return (
    <nav className='flex justify-center bg-black  p-1   text-sm   z-100 w-full bg-opacity-70'>
        <ul className='flex flex-row text-white'>
          {links.map(({ label, route }) => (
            <li key={route} className='p-2   hover:bg-opacity-10  m-1 rounded-lg hover:scale-110
              transition-transform transition-m  duration-1000'>
              <Link className="p-1" href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
  )
}

export default Footer;
