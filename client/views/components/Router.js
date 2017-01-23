//Import Modules 
import React from 'react';
import { render } from 'react-dom';

//Import React-Router Dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//Import Components
import AppContainer from './AppContainer';
import Welcome from './welcome/Welcome';
import Homepage from './homepage/Homepage';


//Build Router Component
const router = (
	<Router history={browserHistory}>
		<Route path="/" component={AppContainer}>
			<IndexRoute component={Welcome} />
			<Route path="/homepage/:username" component={Homepage} />
		</Route>
	</Router>
);

//Render Component
render(router, document.getElementById('root'));