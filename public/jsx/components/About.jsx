import React from 'react';
import {Col, Thumbnail, Grid, Row} from 'react-bootstrap';
import aboutTextItems from '../../js/aboutTextItems';
import aboutItems from '../../js/aboutItems';
import Contact from './Contact.jsx';
function toParagraph(item, i) {
	return (
		<p className='about-info' key={i}>{item}</p>
	);
}

function toThumb(item, i) {
	return (
		<Col xs={10} sm={10} md={4} key={i}>
			<img className='about-img' src={item['img']} />
		</Col>
	);
}


function About() {
	const aboutParagraphs = aboutTextItems.map((item, i) => toParagraph(item, i));
	const aboutThumbs = aboutItems.map((item, i) => toThumb(item, i)); 
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
				{aboutParagraphs}
			</div>
		</div>
	</div>
	);
}

export default About;