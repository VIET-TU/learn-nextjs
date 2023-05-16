import { useRouter } from 'next/router'
import * as React from 'react'

export interface IPostDetailPorpsProps {}

export default function PostDetailPage(props: IPostDetailPorpsProps) {
	const router = useRouter()
	const { postId } = router.query
	console.log('router.query :>> ', router)
	return (
		<div>
			<h1>Post Detail Page</h1>
			<p>Query: {postId}</p>
		</div>
	)
}
