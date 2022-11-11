import React, { useState } from 'react';
import { BgImage } from 'gbimage-bridge';
import { Title } from 'bloomer/lib/elements/Title';
import { Link } from 'gatsby';
import './blog-listings.scss';

export default function BlogListings({ listings }) {
	const [articles, setArticles] = useState(listings);
	const [activeFilter, setActiveFilter] = useState('all');
	const filtersList = [...new Set(listings.map((article) => article.node.type.title))].sort();
	return (
		<>
			<ul className="blog-listings-filters">
				<li
					className={activeFilter === 'all' ? 'active' : ''}
					onClick={(e) => {
						setActiveFilter('all');
						setArticles(listings);
					}}
					onKeyUp={(e) => {
						if (e.keyCode === 32) {
							setActiveFilter('all');
							setArticles(listings);
						}
					}}
					role="presentation"
				>
					{'All'}
				</li>
				{filtersList.map((filter, index) => (
					<li
						key={index}
						className={filter === activeFilter ? 'active' : ''}
						onClick={(e) => {
							setActiveFilter(filter);
							setArticles(listings.filter((article) => article.node.type.title === filter));
						}}
						onKeyUp={(e) => {
							if (e.keyCode === 32) {
								setActiveFilter(filter);
								setArticles(listings.filter((article) => article.node.type.title === filter));
							}
						}}
						role="presentation"
					>
						{filter}
					</li>
				))}
			</ul>
			<div className="blog-listings">
				{articles.map((article, index) => (
					<Link to={`/blog/${article.node.slug}`} key={index}>
						<BgImage image={article.node.featuredImage.gatsbyImageData} className="blog-listing__image">
							<p className="blog-listing__type">{article.node.type.title}</p>
							<p className="blog-listing__date">{article.node.publishedDate}</p>
						</BgImage>

						<div className="blog-listing__info">
							<Title tag="h2" isSize={5}>
								{article.node.title}
							</Title>
							<p className="blog-listing__intro">{article.node.intro.intro}</p>
							<span className="vm-button vm-button--black-transparent vm-button--small">Read More</span>
						</div>
					</Link>
				))}
			</div>
		</>
	);
}
