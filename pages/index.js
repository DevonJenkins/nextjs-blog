import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {

	const allPostsData = getSortedPostsData();

	return {
		props: {
			allPostsData,
		},
	};
}

export default function Home({ allPostsData }) {
	console.log("Home")
  return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
				<section className={utilStyles.headingMd}>
					<p>Hello I am Devon...</p>
					<p>This will be a description</p>
				</section>
				<section>
					<h2 className='utilStyles.headingLg'>Blog</h2>
					<ul>
						{allPostsData.map(({ id, date, title }) => (
							<li key={id}>
								<Link href={`/posts/${id}`}>
									{title}
								</Link>
								<br />
								<small className={utilStyles.lightText}>
									<Date dateString={date}/>
								</small>
								<br />
							</li>
						))}
					</ul>
				</section>
		</Layout>
  );
}
