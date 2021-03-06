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
      comments: '',
    };
  }
  addComment = c => {
    this.setState({
      comments: c.target.value,
    }, () => console.log(this.state));
  }
  getComment = (e) => {
    if (!this.state.comments) {
      alert('Please add comment!');
      return;
    }
    this.setState((prevState) => {
      prevState.data.forEach(a => {
        if (a.imageUrl === e) {
          a.comments.shift();
          a.comments.push({
            username: 'Testguy123',
            text: prevState.comments,
          });
        }
      });
      return {
        comment: '',
      }
    });
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
