import React from 'react'
import { Link } from 'react-router'
import Title from 'react-title-component'

const App = ({ children }) => (
  <div>
    <Title render="Trello" />
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">Users</Link>
        <ul className="right">
        </ul>
      </div>
    </nav>
    {children}
  </div>
)

export default App

import React from 'react'
import { Link } from 'react-router'
import Title from 'react-title-component'

const App = ({ children }) => (
  <div>
    <Title render="Trello"/>
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">Gifter</Link>
        <ul className="right">
        </ul>
      </div>
    </nav>
    {children}
  </div>
)

export default App