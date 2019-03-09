import React, { Component } from 'react';
import Home from './screens/Home';
import About from './screens/About';
import FourOFour from './screens/FourOFour';
import Login from './screens/Login';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className='App'>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route path='/about' component={About} />
							<Route path='/login' component={Login} />
							<Route component={FourOFour} />
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
