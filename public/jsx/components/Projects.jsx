import React from 'react';
import ControlledCarousel from './ControlledCarousel.jsx';
import ProjectGrid from './ProjectGrid.jsx';

function Projects() {
	return (
		<div id='projects'>
			<ControlledCarousel />
			<ProjectGrid />
		</div>
	);
}

export default Projects;
