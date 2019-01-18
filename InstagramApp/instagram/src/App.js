import React, { Component } from 'react';
import logo from './';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
  }

  render() {
    return (
      <div className="app">
        <SearchBar />
        <div className="Post" >{this.state.dummyData.map(item => <PostContainer item={item} comments={item.comments} username={item.username} thumbnail={item.imageUrl} userthumbnail={item.thumbnailUrl} likes={item.likes} />)}</div>
      </div>
    );
  }
}

export default App;
