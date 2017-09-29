import React, { Component } from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React Testing</h1>
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}
