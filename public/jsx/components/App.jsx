import React from 'react';
import About from './About.jsx';
import Cover from './Cover.jsx';
import MenuToggle from './MenuToggle.jsx';
import Menu from './Menu.jsx';
import Projects from './Projects.jsx';

function App() {
	return (
		<div>
			<MenuToggle />
			<Menu />			
			<Cover />
			<Projects />
			<About />
			<div id ='screen'>
			</div>
		</div>
	);
}

export default App;