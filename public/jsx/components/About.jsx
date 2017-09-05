import React from 'react';
import {Col, Thumbnail, Grid, Row, Image} from 'react-bootstrap';
import aboutItems from '../../js/aboutItems';
import Contact from './Contact.jsx';

function toParagraph(item, i) {
	return (
		<div key={i}>
		<p className='about-subheading'>{item['title']}</p>
		<p className='about-info'>{item['text']}</p>
		</div>
	);
}

function About() {
	const paragraphs = aboutItems.map((item, i) => toParagraph(item, i));
	return (
		<div>
		<div id='about' className='tab'>
			<div className='tab-bar'>
				<div className='icon red'></div>
				<div className='icon yellow'></div>
				<div className='icon green'></div>
			</div>
			<div className='about-content'>
				<p className='about-heading'>About Me</p>
				{paragraphs}
				<div className='button'>Visit flareUp</div>
			</div>
		</div>
	</div>
	);
}

export default About;