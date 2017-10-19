import React, { Component } from 'react';
import { Link } from 'react-router-dom';  
import axios from 'axios';
import CreateNewStudent from './CreateNewStudent';

export default class AllStudents extends Component{
	constructor(){
		super();
		this.state={
			add:false,
			students:[]
		}
		this.handleDelete = this.handleDelete.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}

	componentDidMount(){
		axios.get('api/students')
		.then(result => result.data)
		.then(students => this.setState({students}));
	}

	handleDelete(event){
		axios.delete(`/api/students/${event.target.value}`).
		then(result => result.data)
		.then(deleted => console.log(deleted));
	}

	handleAdd(event){
		this.setState({add:(!(this.state.add))});
	}

	render(){
		const students = this.state.students;
		return(
			<div>
			<table>

				<thead>
				<tr>
					<th>#</th>
					<th>NAME</th>
					<th>CAMPUS</th>
					<th>REMOVE</th>
				</tr>
				</thead>
				<tbody>
					{
						students.map(student => {
							return (
								<tr key={student.firstName}>
									<td>
										{student.id}
									</td>
									<td>
										<Link to={`/students/${student.id}`}>
											{`${student.firstName} ${student.lastName}`}
										</Link>
									</td>
									<td>
										<Link to={`/campuses/${student.campus && student.campus.id}`}>
											{student.campus && student.campus.name}
										</Link>
									</td>
									<td>
										<button onClick={this.handleDelete} value={student.id}>REMOVE</button>
									</td>
								</tr>
								)
						})
					}
				</tbody>
			</table>
			<button onClick={this.handleAdd}>ADD STUDENT</button><br/><br/>
			{this.state.add ? <CreateNewStudent defaultCampus={false}/>:false}
			</div>
			)
	}


}