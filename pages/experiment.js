import Layout from "../components/layout";
import Head from "next/head";
import utilStyles from '../styles/utils.module.css'


export default function Experiment(){
	return (
	<Layout>
		<Head>
			<title>experiment</title>
		</Head>
			<section className={ utilStyles.headingXL }>
				<h1>experiment</h1>

			<article>
				<h2>lorem ipsum</h2>
					<p>In semper mauris at tortor blandit, quis porttitor felis ultrices. Aenean suscipit mattis diam, ac accumsan nunc vehicula sit amet. Nam dapibus, velit in volutpat auctor, sem nulla euismod tellus, eu consequat purus velit posuere risus. Sed magna tellus, commodo eu tellus at, consequat ornare mi. Aliquam imperdiet ipsum vitae sapien tincidunt lacinia. Praesent a nibh et magna vehicula tincidunt quis nec nisl. Donec finibus, libero non euismod viverra, augue felis molestie ligula, vel aliquam magna nisi eget sem. Cras iaculis quam sed urna semper aliquam. Aliquam nec rutrum nibh, ut accumsan nibh. Vivamus faucibus luctus velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec scelerisque ut sapien eget placerat. Mauris orci nisl, maximus a maximus vitae, tristique sit amet dolor. Sed facilisis, orci a vehicula finibus, urna diam volutpat elit, vulputate laoreet nulla nulla eget ex</p>
			</article>
			</section>

		<section>
			<h2>what is the goal here</h2>
			<p>I would like to make some calls to a custom api that can't be accessed externally</p>
		<p>I would like to perform Crud operations on a list of names. Let's  start of with an empty array. I'd like to add names to that array</p>	
		</section>

	</Layout>
	)
}
