 'use strict'
import React, {Component} from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom';
import store from './store'
import Home from './components/Home'
import Navbar from './components/Navbar'
import AllStudents from './components/AllStudents'
import SingleStudent from './components/SingleStudent'
import SingleCampus from './components/SingleCampus'

render (
  <Provider store={store}>
    
    <HashRouter>	
    	<div className="master-container">
    		<Navbar />
	    	<Route exact path="/" component={Home} />
	    	<Route exact path="/students" component={AllStudents} />
	    	<Route path ="/students/:id" component={SingleStudent} />
	    	<Route path="/campuses/:id" component={SingleCampus} />
    	</div>
    </HashRouter>
  </Provider>,
  document.getElementById('main')
)