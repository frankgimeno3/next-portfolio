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
       <Navigation />
      <div class="bg-gradient-to-r from-blue-950 to-slate-950 py-4  min-h-screen ">
        {children}
        </div>
      </body>
    </html>
  )
}
