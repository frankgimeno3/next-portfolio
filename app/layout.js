import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })
const links = [{
  label: 'Home',
  route: '/'
},{
  label: 'About',
  route: '/about'
}]

export const metadata = {
  title: 'Frank Gimeno',
  description: 'Frank Gimeno Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <ul>
              {links.map(({label, route}) => (
                <li key= {route}>
                  <Link href={route}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
