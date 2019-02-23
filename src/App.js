import React, { Component } from 'react';
import Home from './screens/Home';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {

	render() {
		return (
			<Router>
			<div className='App'>
			  <Switch>
				  <Route exact path='/' component={Home} />
			  </Switch>
			</div>
			</Router>
		);
	}
}

export default App;
