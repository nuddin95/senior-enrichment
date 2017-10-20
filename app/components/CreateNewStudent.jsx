import React, { Component } from 'react';
import axios from 'axios';

export default class CreateNewStudent extends Component{
	constructor(props){
		super(props);
		this.state={
			campusId:props.campusId,
			defaultCampus:(props.defaultCampus),
			campuses:[],
			students:{}
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
		const campusId = (event.target.Hello && event.target.Hello.value) || this.state.campusId;
		axios.post('/api/students', {
			firstName,
			lastName,
			email,
			campusId
		})
		.then((student) => axios.get('/api/students/'))
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
							<select name="Hello">
								{
									campuses.map(campus => {
										return <option key={campus.id} value={campus.id}>{campus.name}</option>	
									})
								}
							</select>) : false
					}

					<input type="submit" value="CREATE"/>
				</form>
			</div>
			)
	}
}