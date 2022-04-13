import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Container, Title } from 'bloomer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from "../../images/logo-vevol-media.svg";
import './footer.scss';

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer>
			<div className="footer-content">

				<Link to="/" className="footer-logo">
                    <img src={logo} alt="Vevol Media Logo" />
                </Link>


				<div className="footer-column">
					<Title tag="h4" isSize={4}>
						Services
					</Title>
					<Link to="/">Digital Marketing</Link>
					<Link to="/">Website Development</Link>
					<Link to="/">Branding & Creative</Link>
					<Link to="/">Email & SMS Marketing</Link>
				</div>

				<div className="footer-column">
					<Title tag="h4" isSize={4}>
						Company
					</Title>
					<Link to="/">Story</Link>
					<Link to="/">Work</Link>
					<Link to="/">Contact Us</Link>
				</div>

				<div className="footer-column">
					<Title tag="h4" isSize={4}>
						Extras
					</Title>
					<Link to="/">Client Portal</Link>
					<Link to="/">Careers</Link>
					<Link to="/">Limodify</Link>
					<Link to="/">FAQ</Link>
				</div>

				<div className="footer-column">
					<Title tag="h4" isSize={4}>
						Social
					</Title>
					<div className="footer-row">
						<a
							href="https://m.facebook.com/vevolmediaweb"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faFacebookF} />
						</a>
						<a
							href="https://www.instagram.com/vevolmedia"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faInstagram} />
						</a>
						<a
							href="https://mobile.twitter.com/vevolmedia"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faTwitter} />
						</a>
						<a href="#" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faYoutube} />
						</a>
					</div>
				</div>
			</div>

			<div className="footer-copyright">
				<Link to="/"> © {year} Vevol Media | All Rights Reserved </Link>
			</div>
		</footer>
	);
}
