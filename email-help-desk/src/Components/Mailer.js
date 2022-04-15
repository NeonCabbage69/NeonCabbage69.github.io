import React from 'react';

class Mailer extends React.Component {
	render() {
		const style = {
			width: '400px',
			height: '400px',
			backgroundColor: 'grey'
		}
		return <div style={style}>
			<div>
				<h2>Title</h2>
			</div>
			<div>
				Name
				<input />
			</div>
			<div>
				Email
				<input />
			</div>
			<div>
				Content
				<input />
			</div>
			<div>
				<button>Send Email</button>
			</div>
		</div>
	}
}

export default Mailer