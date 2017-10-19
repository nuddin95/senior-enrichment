import React, { Component } from 'react';
import { Link } from 'react-router-dom';  
import axios from 'axios';

export default class Home extends Component {
	constructor(){
		super();
		this.state={
			campuses:[]
		}
	}

	componentDidMount(){
		axios.get('/api/campuses')
		.then(res => res.data)
		.then(campuses => this.setState({campuses}));
	}

	render(){
		const campuses = this.state.campuses;
		return(
			<div>
				<ul>
				{
					campuses.map(campus => {
						return (
							<div key={campus.id}>
							<img className="campusImage" src={campus.image} />
							<li key={campus.name} className="campusTitle"><Link to={`/campuses/${campus.id}`} >{campus.name}</Link></li>
							</div>
							)
					})
				}
				</ul>
			</div>
			);
	}
}