import Layout from '../components/layout/layout';
import React from 'react';
import SlimHero from '../components/slim-hero/slim-hero';
import { Container } from 'bloomer';
import VevolSection from '../components/general-components/vm-section';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import ImageWithText from '../components/general-components/image-text-simple';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import PartnersSection from '../components/partners-section/partners-section';
import partnersList from '../enums/partners';

export const data = graphql`
	query {
		imageOneQuery: file(name: { eq: "opportunity" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
		partnersQuery: allFile(filter: { relativeDirectory: { eq: "partners-network" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: DOMINANT_COLOR, height: 60, quality: 100)
				}
			}
		}
	}
`;

export default function StrategicPartnershipsPage({ data }) {
	const { imageOneQuery, partnersQuery } = data;
	const imageOne = getImage(imageOneQuery);
	const partnersLogos = partnersQuery.nodes;

	return (
		<Layout>
			<Helmet>
				<title>Succesful Partnerships Opportunities - Vevol Media</title>
				<meta
					name="description"
					content="Grow your partners network with eCommerce experts and developers. Let's build success stories together. Get in touch today!"
				/>
			</Helmet>
			<SlimHero
				heading="Strategic Partnerships"
				subheading="We offer opportunities for like-minded businesses to link up with Vevol Media to provide better, more customer-centric service packages."
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<ImageWithText
						alignRight
						image={<GatsbyImage image={imageOne} alt={'Opportunities for strategic partnerships'} />}
						title={'Always Looking To Connect'}
						textContent={[
							<p className="mt-5">
								Here at Vevol Media, we are willing to do whatever it takes to deliver the best possible services for our customers.
							</p>,
							<p className="mt-5">
								Our Strategic Partnerships Program has this ideal in mind, as we are open to collaboration with other service providers if it is in the best interest of your project.
							</p>,
							<p className="mt-5">
								Our priority is helping our clients achieve their goals. We believe in the power of many. If your company is better suited for our client's requirements, we will happily recommend you!
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<PartnersSection
						logos={partnersLogos}
						partnersList={partnersList.sort((a, b) => a.name.localeCompare(b.name))}
					/>
				</Container>
			</VevolSection>
		</Layout>
	);
}
