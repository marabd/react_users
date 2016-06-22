import React from 'react'
import $ from 'jquery'
imoprt { BASE_URL } from '../constants'

class AddUser extends React.Component {
	handleSubmit(e) {
		e.preventDefault()
		let first_name = this.refs.first_name.value
		let last_name = this.refs.last_name.value
		let phone_number = this.refs.phone_number.value
		$.ajax({
			url: `${BASE_URL}/users`,
			type: 'POST',
			data: { user: { first_name, last_name, phone_number } }
		}).done( product => {
			this.props.AddUser(user)
			this.refs.addForm.reset()
		})
	}


	render() {
		return (
			<div className="col m4">
				<h4 className="center">Add User</h4>
				<form ref="addUser" onSubmit={this.handleSubmit.bind(this)}>
					<input placeholder="first_name" ref="first_name" required={true} />
					<input placeholder="last_name" ref="last_name" required={true} />
					<input type="number" placeholder="phone_number" ref="phone_number" />
					<button className="btn" type="submit">Add</button>
				</form>
			</div>
		)
	}
}

export default AddUser
