import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const router = useRouter()

	const gotoDetailPage = () => {
		router.push({
			pathname: '/posts/[postId]',
			query: {
				postId: 123,
			},
		})
	}

	return (
		<div>
			<Link href="/about">About</Link>
			<button type="button" onClick={() => gotoDetailPage}>
				Click me
			</button>
		</div>
	)
}
