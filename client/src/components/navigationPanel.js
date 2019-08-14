import React from 'react';
import '../App.css';
import {MdArrowBack} from 'react-icons/lib/md';
import {FaCircle} from 'react-icons/lib/fa';

const navigationPanel = (props) => {

	return (
		<div className='navigationPanel'>
			<MdArrowBack onClick={props.initialState} className='back'/>
			<div className='dots'>
				<FaCircle className='dotSelected' />
				<FaCircle className='dot' />
				<FaCircle className='dot' />
			</div>
			<div style={{flex: 2}}></div>
		</div>
	);
}



export default navigationPanel;