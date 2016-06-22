import React from 'react'
import { BASE_URL } form '../constants'
import $ from 'jquery'
import { Link } from 'react-router'

class ShowUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: { first_name: '', last_name: '', phone_number: ''},
      edit: false
    }
  }
  
  show() {
    return(
      <div>
      </div>
    )
  }
  
  edit() {
    return(
      <div>
      </div>
    )
  }
  
  render() {
    if (this.state.edit)
      return edit()
    else
      return show()
  }
}

export default ShowUser
