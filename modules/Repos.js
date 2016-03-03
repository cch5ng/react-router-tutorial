// modules/Repos.js
import React from 'react'
import {Link, browserHistory} from 'react-router'
import NavLink from './NavLink.js'

export default React.createClass({
	contextTypes: {
		router: React.PropTypes.object
	},

	handleSubmit(ev) {
		ev.preventDefault()
		const userName = ev.target.elements[0].value
		const repo = ev.target.elements[1].value
		const path = `/repos/${userName}/${repo}`
		console.log(path)
		this.context.router.push(path)
		//browserHistory.push(path)
	},

	render() {
		return (
			<div>
				<h2>Repos</h2>
				<ul>
					<li>
						<NavLink to="/repos/rackt/react-router">React Router</NavLink>
					</li>
					<li>
						<NavLink to="/repos/facebook/react">React</NavLink>
					</li>
					<li>
						<form onSubmit={this.handleSubmit}>
							<input type="text" placeholder="userName" /> / {' '}
							<input type="text" placeholder="repo" /> {' '}
							<button type="submit">Go</button>
						</form>
					</li>
				</ul>

				{this.props.children}
			</div>
		)
	}

})