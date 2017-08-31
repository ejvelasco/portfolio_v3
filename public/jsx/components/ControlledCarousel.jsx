import React from 'react';
import {Carousel, Glyphicon, Image} from 'react-bootstrap'; 
import projectItems from '../../js/projectItems';

function toCarouselItems(item, i) {
	return (
		<Carousel.Item key = {i}>
			<Image className='carousel-img' src={item['url']} responsive />
			<Carousel.Caption>
				<h3>{item.label}</h3>
				<p>{item.desc}</p>
			</Carousel.Caption>
		</Carousel.Item>
	);
}
function ControlledCarousel() {
	const carouselItems = projectItems.map((item, i) => toCarouselItems(item, i)); 
	return (
		<Carousel id='controlled-carousel' controls={false} interval={4000} pauseOnHover={false}>
			{carouselItems}
		</Carousel>
	);
}

export default ControlledCarousel;
