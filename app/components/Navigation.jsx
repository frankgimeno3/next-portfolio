import Link from 'next/link'

const links = [{
    label: 'Home',
    route: '/'
  },{
    label: 'About',
    route: '/about'
  },{
    label: 'Projects',
    route: '/projects'
  }]
  

export function Navigation () {
    return(
        <header>
<nav className='bg-white bg-opacity-5 p-2 rounded-l-lg text-sm ml-20'>
          <ul className='flex flex-row text-white'>
            {links.map(({label, route}) => (
              <li key= {route} className='p-2 bg-white bg-opacity-5 hover:bg-opacity-10 hover:mx-2 m-1 rounded-lg hover:scale-110
              transition-transform transition-m  duration-1000'>
                <Link  className="p-1" href={route}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    )
}