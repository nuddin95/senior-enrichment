import React, { Component } from 'react';
import { Link, HashRouter, Route } from 'react-router-dom';  
import axios from 'axios';

export default class SingleCampus extends Component{

	constructor(){
		super();
		this.state={
			selectedCampus:{}
		}
	}

	componentDidMount(){
		const campusId = this.props.match.params.id;
		axios.get(`api/campuses/${campusId}`)
		.then(res =>res.data)
		.then(selectedCampus => this.setState({selectedCampus}))
	}

	render(){
		const campus = this.state.selectedCampus;
		return (
			<div>
				<div>
					<img src={campus.image} /> 	
				</div>

				<div>
					<h1>{campus.name}</h1>
				</div>

				<div>
					<Link to={`campuses/${this.state.selectedCampus.id}/edit`}>
						<button>EDIT CAMPUS</button>
					</Link>
					<HashRouter>
						<Route path
					</HashRouter>
				</div>

				<div>
					<h2>Students</h2>
				</div>

				<div>
					{
						campus.students && campus.students.map(student => {
							return (
								<div key={student.id}>
									<h3><Link to={`/students/${student.id}`}>{student.firstName} {student.lastName}</Link></h3>
								</div>
								)
						})
					}
				</div>

			</div>
			)
	}
}