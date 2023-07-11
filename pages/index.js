import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css'

export default function Home() {
	console.log("Home")
  return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
				<section className={utilStyles.headingMd}>
					<p>Hello I am Devon...</p>
					<p>This will be a description</p>
					<Link href="/posts/first-post">First Post</Link>
				</section>
		</Layout>
  );
}
