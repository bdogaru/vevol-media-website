import React, { useState, useEffect } from 'react';
import generalQuestions from '../../../enums/questions';
import FaqAcordion from '../faq-accordion/faq-accordion';
import './faq-questions.scss';
import { Title } from 'bloomer';
import VevolSection from '../../general-components/vm-section';
import { Container } from 'bloomer/lib/layout/Container';

const FaqQuestions = () => {
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		setQuestions(generalQuestions);
	}, []);

	return (
		<VevolSection className={'faq-list'} whiteBackground>
			<Container>
				<Title tag="h2" className="faq-list__heading">
					Our clients have asked
				</Title>
				<div className="faq-list__block">
					{questions.map((question, index) => {
						return <FaqAcordion key={index} {...question} />;
					})}
				</div>
			</Container>
		</VevolSection>
	);
};

export default FaqQuestions;
