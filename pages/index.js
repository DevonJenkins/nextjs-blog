import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();

	return {
		props: {
			allPostsData,
		},
	};
}

export default function Home({ allPostsData }) {
  return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
				<section className={utilStyles.headingMd}>
					<p>This will be a description</p>
				</section>
		<div className='border-2 border-sky-500'>
					<Link href={`/experiment`} className='p-2.5 border-1 border-sky-500 bg-slate-500 text-white'> Experiment </Link>
		</div>
				<section>
					<h2 className='utilStyles.headingLg'>Blog</h2>
					<div className='bg-white p-6 shadow-lg rounded-lg'>
						<ul>
							{allPostsData.map(({ id, date, title }) => (
								<li className={utilStyles.listItem} key={id}>
									<Link href={`/posts/${id}`}> {title} </Link>
									<br />
									<small className={utilStyles.lightText}>
										<Date dateString={date} />
									</small>
								</li>
							))}
						</ul>
						<div className='bg-red-500 shadow-lg rounded-lg border-4m border-slate-500 hover:bg-red-300'>
							<p className='text-slate-500 text-3xl font-bold underline text-center hover:text-white'>I am Devon...</p>
						</div>
					</div>
				</section>
		</Layout>
  );
}
