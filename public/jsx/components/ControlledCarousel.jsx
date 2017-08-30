import React from 'react';
import {Carousel, Glyphicon} from 'react-bootstrap'; 

const items = [
	{
		label: 'First Label',
		desc: 'Some cool stuff',
		url: '/img/hummingbird.jpg'
	},
	{
		label: 'Second Label',
		desc: 'Some more cool stuff',
		url: '/img/hummingbird.jpg'
	},
	{
		label: 'Third Label',
		desc: 'Last cool stuff',
		url: '/img/hummingbird.jpg'
	},
];

function toCarouselItems(item, i) {
	return (
		<Carousel.Item key = {i}>
			<img className='carousel-img' src= {item.url}/>
			<Carousel.Caption>
				<h3>{item.label}</h3>
				<p>{item.desc}</p>
			</Carousel.Caption>
		</Carousel.Item>
	);
}
function ControlledCarousel() {
	const carouselItems = items.map((item, i) => toCarouselItems(item, i)); 
	return (
		<div id='projects'>
			<Carousel id='controlled-carousel' controls={false} interval={4000} pauseOnHover={false}>
				{carouselItems}
			</Carousel>
		</div>
	);
}

export default ControlledCarousel;
