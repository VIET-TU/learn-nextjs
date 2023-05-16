import Image from 'next/image'
import { Inter } from 'next/font/google'
import About from './About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return <About></About>
}
