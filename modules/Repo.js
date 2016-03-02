//modules/Repo.js
import React from 'react'

export default React.createClass({
	render() {
		return (
			<div>
{/* this.props.params.<name> can access any params defined in the Route path value; see index.js */}
				<h2>{this.props.params.repoName}</h2>
				<p>{this.props.params.userName}</p>
			</div>

		)
	}
})