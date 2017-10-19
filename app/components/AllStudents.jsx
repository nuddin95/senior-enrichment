import React, { Component } from 'react';
import { Link } from 'react-router-dom';  
import axios from 'axios';

export default class AllStudents extends Component{
	constructor(){
		super();
		this.state={
			students:[]
		}
		this.handleDelete = this.handleDelete.bind(this);
	}

	componentDidMount(){
		axios.get('api/students')
		.then(result => result.data)
		.then(students => this.setState({students}));
	}

	handleDelete(event){
		console.log(event);
	}

	render(){
		const students = this.state.students;
		return(
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
										<Link to={`/campuses/${student.campus.id}`}>
											{student.campus.name}
										</Link>
									</td>
									<td>
										<button onClick={this.handleDelete}>REMOVE</button>
									</td>
								</tr>
								)
						})
					}
				</tbody>
			</table>
			)
	}


}