import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component{
	constructor(){
		super();
	}

	render(){
		return(
			<div id="mainNavigation">
				<div id="homeNavButton"><Link to="/">HOME</Link></div>
				<div id="studentNavButton"><Link to="/students">STUDENTS</Link></div>
			</div>
			)
	}
}