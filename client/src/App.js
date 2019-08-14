import React, {Component} from 'react';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Motion, spring} from 'react-motion';
import navigationPanel from './components/NavigationPanel';
import model from './components/model';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			mounted: false
		};
	}

	componentDidMount() {
		this.setState({ mounted: true });
	}
	
	handleSubmit = (e) => {
		this.setState({ mounted: false });
		e.preventDefault();
	}

	render() {
		const {mounted} = this.state;

		let child;
		let test = 12;

		if(mounted) {
			child = (
				<div className="App_test">
					<navigationPanel></navigationPanel>
					<model onSubmit={this.handleSubmit}/>
				</div>
			);
		}
		
		return(
			<div className="App">
				<ReactCSSTransitionGroup 
					transitionName="example"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}>
						{child}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}

export default App;

