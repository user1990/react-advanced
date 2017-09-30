import React from 'react';
import { Component } from 'react';
import UserList from './UsersList';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h4>Users List</h4>
        </div>
        <UserList />
      </div>
    );
  }
}
