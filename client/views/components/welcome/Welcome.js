//IMPORT MODULES
import React from 'react';
import { Link } from 'react-router';

//IMPORT COMPONENTS
import Login from './Login';
import SnapBudgetChart from '../homepage/SnapBudgetChart';
import CashBudgetChart from '../homepage/CashBudgetChart';

//IMPORT CSS
import '../../../styles/welcome/welcome.css';

//BUILD COMPONENT
const Welcome = React.createClass({
	render() {
		return(
			<div>
				<div className="welcome-container">	
					<div className="content-container">

					<div className="logo-container">
						<img src="https://s25.postimg.org/6aow702qn/Desert_Oasis_Fullsize_Black_Logo_2500wide.png"
							alt="Desert Oasis" />
					</div>
						
						<div>
							<div className="login-container">
								<Login />
							</div>
						</div>
	

					</div>
				</div>
			</div>
		)
	}
});

export default Welcome;