import React, { Component } from 'react';
import axios from 'axios';

export default class CreateNewCampus extends Component{
	constructor(){
		super();
		this.state={}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event){
		event.preventDefault()
		const newCampusBody = {
			name:event.target.name.value,
			image:event.target.image.value
		}
		axios.post('/api/campuses', newCampusBody)
		.then(newCampus => newCampus)
	}

	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					Name:<br/>
					<input type="text" name="name"/><br/><br/>

					Image:<br/>
					<input type="text" name="image"/><br/>
					<br/>
					<br/>
					<input type="submit" value="CREATE"/>
				</form>
			</div>
			)
	}
}