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
        <nav className='bg-white p-1'>
          <ul className='flex flex-row text-gray-800'>
            {links.map(({label, route}) => (
              <li key= {route}>
                <Link  className="p-1" href={route}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    )
}