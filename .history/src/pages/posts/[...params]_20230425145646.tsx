import { useRouter } from 'next/router'
import * as React from 'react'

export interface IParamsProps {}

export default function ParamsPage(props: IParamsProps) {
	const router = useRouter()
	return (
		<div>
			<h1>Post Detail Params Page userId</h1>
			<p>Query: {JSON.stringify(router.query)}</p>
		</div>
	)
}
