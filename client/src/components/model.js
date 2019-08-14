import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import sign from './sign';
import signExpanded from './signExpanded';
import signCollapsed from './signCollapsed';

class model extends Component {

	constructor(props) {
		super(props);
		this.state = {
			wasClickedLeft: false,
			wasClickedRight: false,
		};
	}

	onReset = () => {
		this.setState({
			wasClickedLeft: false,
			wasClickedRight: false
		})
	}

	onClickLeft = () =>{
		this.setState({wasClickedLeft: !this.state.wasClickedLeft}, function() {
			if (this.state.wasClickedRight == true && this.state.wasClickedLeft == true) {
				this.setState({wasClickedRight: false});
			};
		});
		
	}

	onClickRight = () => {
		this.setState({wasClickedRight: !this.state.wasClickedRight}, function(){
			if (this.state.wasClickedRight == true && this.state.wasClickedLeft == true) {
				this.setState({wasClickedLeft: false});
			};
		});
	}

	render () {
		let modelContent = null;
		
		if (this.state.wasClickedLeft == false && this.state.wasClickedRight == false) {
			modelContent = (
				<div className='model'>
					<sign type='signIn' onChange={this.onClickLeft}></sign>
					<sign type='signUp' onChange={this.onClickRight}></sign>
				</div>
			);
		} else if (this.state.wasClickedLeft == false && this.state.wasClickedRight == true) {
			modelContent = (
				<div className='model'>
					<signCollapsed type='signIn' onChange={this.onClickLeft}></signCollapsed>
					<signExpanded type='signUp' ></signExpanded>
				</div>
			);
		} else if (this.state.wasClickedLeft == true && this.state.wasClickedRight == false) {
			modelContent = (
				<div className='model'>
					<signExpanded type='signIn' ></signExpanded>
					<signCollapsed type='signUp' onChange={this.onClickRight}></signCollapsed>
				</div>
			);
		}
		
		return (
			<div className="model">
				{modelContent}
			</div>
		);
	}

}

model.propTypes = {
	onSubmit: PropTypes.func
};

export default model;
