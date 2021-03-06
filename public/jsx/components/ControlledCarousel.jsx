import React from 'react';
import {Carousel, Glyphicon, Image} from 'react-bootstrap'; 
import carouselItems from '../../js/carouselItems';
import open from '../../js/open'; 

function toCarouselComp(item, i) {
	return (
		<Carousel.Item key = {i}>
			<Image className='carousel-img' src={item['img']} responsive />
			<Carousel.Caption>
				<h3>{item['label']}</h3>
				<p>{item['desc']}</p>
				<div className='button' onClick={open(item['url'])}>View</div>
			</Carousel.Caption>
		</Carousel.Item>
	);
}
function ControlledCarousel() {
	const carouselComps = carouselItems.map((item, i) => toCarouselComp(item, i)); 	
	return (
		<Carousel id='controlled-carousel' controls={false} interval={4000} pauseOnHover={false}>
			{carouselComps}
		</Carousel>
	);
}

export default ControlledCarousel;
