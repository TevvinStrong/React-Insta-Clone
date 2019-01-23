import React, { Component } from 'react';
import logo from '../src/logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
    };
  }

  render() {
    return (
      <div className="app">
        <SearchBar />
        {this.state.data.map(item => <PostContainer key={item.username + item.timestamp} data={item} />)}
      </div>
    );
  }
}

export default App;
