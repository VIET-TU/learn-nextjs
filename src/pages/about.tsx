import { useRouter } from 'next/router'
import * as React from 'react'

export interface IAboutPageProps {}

export default function AboutPage(props: IAboutPageProps) {
	const router = useRouter()
	console.log('About query: ', router.query)
	return <div>day la trang about</div>
}

export async function getServerSideProps() {
	return {
		props: {}, // will be passed to the page component as props
	}
}
