import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const router = useRouter()
	return (
		<div>
			<Link href="/about">
				<a> About</a>
			</Link>
			<button type="button" onClick={() => router.push('/about')}>
				Click me
			</button>
		</div>
	)
}
