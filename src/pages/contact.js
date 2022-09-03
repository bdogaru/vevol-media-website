import Layout from '../components/layout/layout';
import React from 'react';
import SlimHero from '../components/slim-hero/slim-hero';
import { Container } from 'bloomer';

export default function ContactPage() {
	return (
		<Layout>
			<SlimHero
				heading="Get in touch"
				subheading="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
			/>
			<Container></Container>
		</Layout>
	);
}
