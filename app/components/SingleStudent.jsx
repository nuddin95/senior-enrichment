import React, { Component } from 'react';
import { Link, HashRouter, Route} from 'react-router-dom';  
import axios from 'axios';
import EditSingleStudent from'./EditSingleStudent';


export default class SingleStudent extends Component{
	constructor(){
		super();
		this.state={
			selectedStudent:{}
		}
	}

	componentDidMount(){
		const id=this.props.match.params.id
		axios.get(`api/students/${id}`)
		.then(result => result.data)
		.then(selectedStudent => this.setState({selectedStudent}))
	}

	render(){
		const student = this.state.selectedStudent;
		return(
			<div>
				<div>
					<h1>Name: {student && `${student.firstName} ${student.lastName}`}</h1>	
				</div>
				<div>
					<h2>School:<Link to={`/campuses/${student.campus && student.campus.id}`}> {student.campus && student.campus.name}</Link></h2>
				</div>
				<div>
					<h3>E-mail: {student && student.email}</h3>
				</div>
				<div>
					<Link to={`/students/${student.id}/edit`}>
						<button>EDIT</button>
					</Link>
					<HashRouter>
						<Route path={`/students/${student.id}/edit`} render={() => <EditSingleStudent student={student}/>}/>
					</HashRouter>
				</div>
			</div>
			)
	}
}