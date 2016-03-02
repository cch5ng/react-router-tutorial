import React from 'react'
import {Link, IndexLink} from 'react-router'
import NavLink from './NavLink.js'

export default React.createClass({
	render() {
		return (
			<div>
			<h1>React Router Tutorial</h1>
			<ul role='nav'>
				<li><IndexLink to='/' activeClassName='active'>Home</IndexLink></li>
				<li><NavLink to='/about' >About</NavLink></li>
				<li><NavLink to='/repos' >Repos</NavLink></li>
			</ul>
{/* ask about what this is doing */}
{/* is props.children specific to react-router */}
			{this.props.children}
			</div>
		)
	}
})