import React from 'react'
import { render } from 'react-dom'
import {Router, Route, useRouterHistory} from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import { createHashHistory } from 'history'

//https://github.com/reactjs/react-router/blob/master/upgrade-guides/v2.0.0.md#using-custom-histories
//had to apply custom history for 2.0.0 to resolve history error message (had to explicitly define Router history)
//instead of just using hashHistory from react-router

//useRouterHistory creates a composable higher-order function
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
render((
	<Router history={appHistory}>
		<Route path='/' component={App}>
			<Route path='/about' component={About} />
			<Route path='/repos' component={Repos} />
		</Route>
	</Router>), document.getElementById('app'))