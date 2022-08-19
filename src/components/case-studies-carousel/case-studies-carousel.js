import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Container, Title } from 'bloomer';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import caseStudies from '../../enums/case-studies';
import './case-studies-carousel.scss';
import '@splidejs/splide/dist/css/splide.min.css';

const images = graphql`
	query {
		allFile(filter: { relativeDirectory: { eq: "case-studies-carousel" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, height: 400, blurredOptions: { width: 125 })
				}
			}
		}
	}
`;

export default function CaseStudiesCarousel({ backgroundWhite }) {
	const backgroundModifier = backgroundWhite ? 'white' : 'black';
	const imagesData = useStaticQuery(images).allFile.nodes;
	const splideSettings = {
		rewind: true,
		perPage: 4,
		gap: '1.5rem',
		height: 400,

		breakpoints: {
			1140: {
				perPage: 3,
				wheel: false,
			},
			749: {
				perPage: 2,
				wheel: false,
			},
			480: {
				perPage: 1,
				wheel: false,
				gap: 0,
			},
		},
	};

	const carouselItems = caseStudies.map((project, index) => {
		const projectImage = imagesData.filter((image) => image.name === project.handle);

		if (projectImage.length === 0) return <></>;

		const bgImage = getImage(projectImage[0].childImageSharp.gatsbyImageData);

		return (
			<SplideSlide key={index}>
				<Link to={`/case-study/${project.handle}`}>
					<BgImage className="case-study-item" image={bgImage}>
						<div className="ml-5 mb-5">
							<p className="pb-3">{project.name}</p>
							View Case Study
							<span className="ml-1">
								<FontAwesomeIcon icon={faArrowRight} />
							</span>
						</div>
					</BgImage>
				</Link>
			</SplideSlide>
		);
	});

	return (
		<div className={`case-studies-carousel vm-section case-studies-carousel--${backgroundModifier}`}>
			<Container>
				<div className="heading-block">
					<Title tag="h2" isSize={2}>
						Our previously <span>successful</span> projects
					</Title>
					<p>Proven track record of our hard work.</p>
				</div>

				<Splide options={splideSettings}>{carouselItems}</Splide>
			</Container>
		</div>
	);
}
