import './globals.css'
import { Inter } from 'next/font/google'
import {Navigation} from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Frank Gimeno',
  description: 'Frank Gimeno Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='p-5'>
       <Navigation/>
        {children}
        </div>
      </body>
    </html>
  )
}
