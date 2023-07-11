import Layout from "../../components/layout.js";

import { getAllPostIds, getPostData } from "../../lib/posts.js";

export default function Post({ postData }) {
	return (
		<Layout>
			{postData.title}	
			<br/>
			{postData.id}
			<br/>
			{postData.date}
			<br/>
		</Layout> 
			)
}

export async function getStaticPaths() {
	//return a list of possible values for id
	console.log('getStaticPaths')	
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	// Fetch necessary data for the blog post using params.id
	console.log('getStaticProps')	
	const postData = getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}
