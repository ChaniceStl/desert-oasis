import React from 'react';
import { Link } from 'react-router';

//IMPORT CSS
import '../../styles/navbar/navbar.css';

const AppContainer = React.createClass({
	render() {
		return(
			<div>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
});

export default AppContainer;