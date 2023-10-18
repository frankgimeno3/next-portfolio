 
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
    <nav className='flex flex-col justify-center bg-black  text-center p-5   text-sm   z-100 w-full bg-opacity-70'>
        <p className='font-bold text-lg'> Frank Gimeno Ruiz
        </p>
        <p className='pt-2'>frankgimeno3@gmail.com</p>
      </nav>
  )
}

export default Footer;
