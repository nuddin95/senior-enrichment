import React, { Component } from 'react';
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
								<li key={campus.name}>{campus.name}</li>
							)
					})
				}
				</ul>
			</div>
			);
	}
}