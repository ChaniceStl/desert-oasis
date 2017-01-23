//IMPORT MODULES
import React from 'react';
import { Link } from 'react-router';

//IMPORT CSS
import '../../../styles/welcome/login.css';

//BUILD COMPONENT
const Login = React.createClass({
	getInitialState() {
		return(
		{
			username: "",
			password: ""
		}
		)
	},
	handleChange(input, event) {
		if (input === "username") {
			this.setState({ username: event.currentTarget.value })
		} else if (input === "password") {
			this.setState({ password: event.currentTarget.value })
		}
	},
	render() {
		return(
			<div>
				<div className="all-login-info">
				<div className="login-inputs-container">
					<p>
						<input type="text" 
							placeholder="USERNAME" 
							onChange={this.handleChange.bind(this, "username")}>
						</input>
					</p>
				</div>
				<div className="login-inputs-container">	
					<p>
						<input type="password" 
							placeholder="PASSWORD" 
							onChange={this.handleChange.bind(this, "password")}>
						</input>
					</p>
				</div>
				<div className="login-button-container">
					<Link to={`/homepage/${this.state.username}`}><button>
					  LOGIN
					</button></Link>
				</div>
				</div>
			</div>
		)
	}
});

export default Login;