import React from 'react'
import User from './User'

const Users = ({ users, deleteUser }) => {
	let people = users.map( user => {
		return(<User key={user.id} {...user} deleteUser={deleteUser}/>)
	})

	return(
		<div className="col m8">
			<h3 className="center">Users</h3>
			<ul style={{ maxHeight: '100vh', overflow: 'scroll' }}>
				{people}
			</ul>
		</div>
	)
}

export default Users

