import { GetStaticProps, GetStaticPropsContext } from 'next'
import * as React from 'react'

export interface IPostListPageProps {
	posts: any[]
}

export default function PostListPage(props: IPostListPageProps) {
	return (
		<div>
			Post List Page
			<ul>
				{props.posts.map((post) => {
					return <li key={post.id}>{post.title}</li>
				})}
			</ul>
		</div>
	)
}

export const getStaticProps: GetStaticProps<IPostListPageProps> = async (
	context: GetStaticPropsContext
) => {
	// server-side -> every times refresh will run method getStaticProps
	//build-time
	console.log('static props')

	const response = await fetch('https://jsonplaceholder.typicode.com/posts')
	const data = await response.json()
	console.log('data :>> ', data)

	return {
		props: {
			posts: data.map((val: any) => ({
				id: val.id,
				title: val.title,
			})),
		},
	}
}

// export async function getServerSideProps() {
// 	return {
// 	  props: {}, // will be passed to the page component as props
// 	};
//   }
