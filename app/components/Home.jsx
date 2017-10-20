import React, { Component } from 'react';
import { Link } from 'react-router-dom';  
import axios from 'axios';
import CreateNewCampus from './CreateNewCampus'

export default class Home extends Component {
	constructor(){
		super();
		this.state={
			campuses:[],
			newCampus:false
		}
		this.handleNewCampus = this.handleNewCampus.bind(this);
		this.handleDeleteCampus = this.handleDeleteCampus.bind(this);
	}

	componentDidMount(){
		axios.get('/api/campuses')
		.then(res => res.data)
		.then(campuses => this.setState({campuses}));
	}

	handleNewCampus(event){
		this.setState({newCampus:!(this.state.newCampus)})
	}

	handleDeleteCampus(event){
		campusId = event.target.value;
		axios.delete(`/api/campuses`)
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
							<button onClick={this.handleDeleteCampus} value={campus.id}>Delete</button>
							</div>
							)
					})
				}
				</ul>
				<button onClick={this.handleNewCampus}>ADD CAMPUS</button>
				{
					this.state.newCampus ? <CreateNewCampus />:false
				}
			</div>
			);
	}
}