import React from 'react';
import {Carousel, Glyphicon} from 'react-bootstrap'; 

const items = [
	{
		label: 'First Label',
		desc: 'Some cool stuff',
		url: '/img/placeholder.jpg'
	},
	{
		label: 'Second Label',
		desc: 'Some more cool stuff',
		url: '/img/placeholder.jpg'
	},
	{
		label: 'Third Label',
		desc: 'Last cool stuff',
		url: '/img/placeholder.jpg'
	},
];

class ControlledCarousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			direction: null
		}; 
	}
	handleSelect(selectedIndex, e) {
		this.setState({
			index: selectedIndex,
			direction: e.direction
		});
	}
	toCarouselItems(item, i) {
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
	render() {
		const carouselItems = items.map((item, i) => this.toCarouselItems(item, i)); 
		return (
			<Carousel id='controlled-carousel' activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect.bind(this)}>
				{carouselItems}
			</Carousel>
		);
	}
}

export default ControlledCarousel;
