import './globals.css'
import {Sora} from '@next/font/google'
import Nav from './Nav'
import Header from '@/components/Header'
import TopLeftImg from '@/components/TopLeftImg'

const sora = Sora({
  subsets:['latin'],
  variable:'--font-sora',
  weight:['100','200','300','400','500','600','700','800']
})


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`page bg-site text-white bg-cover bg-no-repeat $() ${inter.className}`}>
        <TopLeftImg/>
        <Nav/>
        <Header/>
        {children}
      </body>
    </html>
  )
}
