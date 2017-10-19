import React, { Component } from 'react';
import { Link, HashRouter, Route } from 'react-router-dom';  
import axios from 'axios';

export default class CreateNewStudent extends Component{
	constructor(props){
		super(props);
		this.state={
			campusId:props.campusId,
			defaultCampus:(props.defaultCampus),
			campuses:[]
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount(){
		axios.get('/api/campuses/')
		.then(result => result.data)
		.then(campuses => this.setState({campuses}));
	}

	handleSubmit(event){
		event.preventDefault();
		const firstName = event.target.firstName.value;
		const lastName = event.target.lastName.value; 
		const email = event.target.email.value;
		const campusId = this.props.campusId;

		axios.post('/api/students', {
			firstName,
			lastName,
			email,
			campusId
		})
	}

	render(){
		const campuses = this.state.campuses;
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					First Name:<br/>
					<input type="text" name="firstName"/><br/><br/>

					Last Name:<br/>
					<input type="text" name="lastName"/><br/><br/>

					E-mail:<br/>
					<input type="text" name="email"/><br/>
					<br/>
					{

							!(this.props.defaultCampus) ? (
							<select>
								{
									campuses.map(campus => {
										return <option key={campus.id}>{campus.name}</option>	
									})
								}
							</select>) : false
					}
					<br/>
					<br/>
					<input type="submit" value="CREATE"/>
				</form>
			</div>
			)
	}
}