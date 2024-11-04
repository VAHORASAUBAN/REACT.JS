import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount(){
    axios("https://jsonplaceholder.typicode.com/users").then(Response => this.setState({
      users: Response.data
    }))
  }

  render() {
    return (
      <div className="App">
        <h1>User List</h1>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
