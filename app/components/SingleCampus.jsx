import React, { Component } from 'react';
import { Link, HashRouter, Route } from 'react-router-dom';  
import axios from 'axios';
import EditSingleCampus from './EditSingleCampus';
import CreateNewStudent from './CreateNewStudent';

export default class SingleCampus extends Component{

	constructor(){
		super();
		this.state={
			edit:false,
			add:false,
			selectedCampus:{}
		}
		this.handleAdd = this.handleAdd.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}

	componentDidMount(){
		const campusId = this.props.match.params.id;
		axios.get(`api/campuses/${campusId}`)
		.then(res =>res.data)
		.then(selectedCampus => this.setState({selectedCampus}))
	}

	handleAdd(event){
		this.setState({add:(!(this.state.add))});
	}

	handleEdit(event){
		this.setState({edit:(!(this.state.edit))});
	}

	render(){
		const campus = this.state.selectedCampus;
		return (
			<HashRouter>
				<div>
					<div>
						<img src={campus && campus.image} /> 	
					</div>

					<div>
						<h1>{campus.name}</h1>
					</div>

					<div>
						<button onClick={this.handleEdit}>EDIT CAMPUS</button>
						{this.state.edit ? <EditSingleCampus campus={campus}/>:false}
					</div>

					<div>
						<div>
							<h2>
								Students 
								<button onClick={this.handleAdd}>ADD</button>
								{this.state.add ? <CreateNewStudent defaultCampus={true} campusId={campus.id}/>:false}
							</h2>
						</div>

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
			</HashRouter>
			)
	}
}