import React, { Component } from 'react';
import { Link, HashRouter, Route } from 'react-router-dom';  
import axios from 'axios';

export default class EditSingleStudent extends Component{

	constructor(props){
		super(props);
		this.state={
			selectedStudent:this.props.student,
			campuses:[],
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount(){
		axios.get('/api/campuses')
		.then(result => result.data)
		.then(campuses => this.setState({campuses}))
	}

	handleSubmit(event){
		event.preventDefault();
		console.log("YOU SUBMITTED!!!");
		const firstName = event.target.firstName.value || this.state.selectedStudent.firstName;
		const lastName = event.target.lastName.value || this.state.selectedStudent.lastName;
		const email = event.target.email.value || this.state.selectedStudent.email;
		const selectedCampus = event.target.campusId.value || this.state.selectedStudent.campusId;
		
		const campusId = (this.state.campuses).map(campus => {
			let id = campus.id;
			let campusName = String(campus.name);
			let obj={};
			obj[campusName]=id;
			return obj;
		});

		const trueId=  
		axios.put(`/api/students/${this.state.selectedStudent.id}`, {
			firstName,
			lastName,
			email,
			campusId:(campusId[selectedCampus])
		})
		.then(res => res.data)
		.then(student => console.log(student));
	}

	render(){
		const student = this.state.selectedStudent;
		const campuses = this.state.campuses;
		return(
			<div>
				<br/>
				<form onSubmit={this.handleSubmit}>
					First Name:<br/>
					<input type="text" placeholder={student.firstName} name="firstName"/><br/><br/>

					Last Name:<br/>
					<input type="text" placeholder={student.lastName} name="lastName"/><br/><br/>

					E-mail:<br/>
					<input type="text" placeholder={student.email} name="email"/><br/><br/>

					<select name="campusId">
						{
							campuses.map(campus => {
								return <option key={campus.id}>{campus.name}</option>	
							})
						}
					</select><br/><br/>

					<input type="submit" value="SUBMIT CHANGES" />
				</form>
			</div>
			)
	}
}