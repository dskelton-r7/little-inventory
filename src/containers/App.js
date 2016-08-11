import React, { Component } from 'react'
import Sidebar from '../components/Sidebar';
import './App.css'

/*
** App
** Renders the sidebar and the child components passed in as children via react router.
** Also holds store context from redux
*/

class App extends Component {
    render() {
      return (
        <div className="App">
          <Sidebar />
          {this.props.children}
        </div>
      );
    }
}
export default App
