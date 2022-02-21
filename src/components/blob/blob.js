import React from 'react';
import './blob.scss';

export default function Blob({ className, size, translate }) {
	const classes = `blob ${className}`;
	const sizes = `0 0 ${size} ${size}`;
	const translated = `translate(${translate}, ${translate})`;

	return (
		<svg className={classes} viewBox={sizes} xmlns="http://www.w3.org/2000/svg">
			<g transform={translated}>
				<path d="M120,-157.6C152.7,-141.5,174.3,-102.6,194.8,-58.8C215.3,-14.9,234.6,33.8,228.4,80.8C222.2,127.8,190.4,173.1,148.1,184C105.8,195,52.9,171.5,-2.4,174.8C-57.8,178.2,-115.6,208.4,-137.5,190.9C-159.3,173.3,-145.3,108,-153,56.3C-160.7,4.6,-190.2,-33.4,-178.3,-54.2C-166.4,-75.1,-113.2,-78.8,-76.6,-93.6C-40,-108.3,-20,-134.2,11.9,-150.5C43.7,-166.8,87.4,-173.6,120,-157.6Z" />
			</g>
		</svg>
	);
}
