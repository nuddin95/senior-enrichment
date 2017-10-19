import React, { Component } from 'react';
import { Link, HashRouter, Route } from 'react-router-dom';  
import axios from 'axios';

export default class EditSingleComponent extends Component {
	constructor(props){
		super(props);
		this.state={
			selectedCampus:this.props.campus
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount(){
	}

	handleSubmit(event){
		event.preventDefault();
		const campus = this.state.selectedCampus;
		const name = event.target.name.value || campus.name;
		const image = event.target.image.value || campus.image;

		axios.put(`api/campuses/${campus.id}`, {
			name,
			image
		})
		.then(result => result.data)
		.then(selectedCampus => this.setState({selectedCampus}));
	}

	render(){
		const campus = this.props.campus;
		return(
			<div>
				<br/>
				<form onSubmit={this.handleSubmit}>
					Campus Name:<br/>
					<input type="text" placeholder={campus && campus.name} name="name"/><br/><br/>

					Image:<br/>
					<input type="text" placeholder={campus && campus.image} name="image"/><br/><br/>

					<input type="submit" value="SUBMIT CHANGES" />
				</form>
			</div>
			)
	}
}