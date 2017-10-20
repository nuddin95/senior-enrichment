import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component{
	constructor(){
		super();
	}

	render(){
		return(
			<ul id="mainNavigation">
				<li id="homeNavButton"><Link to="/">HOME</Link></li>
				<li id="studentNavButton"><Link to="/students">STUDENTS</Link></li>
			</ul>
			)
	}
}