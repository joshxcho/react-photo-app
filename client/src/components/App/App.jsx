import React, { Component } from 'react';
import axios from 'axios';

import PhotoList from './PhotoList';
import UserList from './UserList';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      userPhotos: [],
      username: '',
    };

    this.getAllPhotos = this.getAllPhotos.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getAllPhotos();
  }

  getAllPhotos() {
    axios
      .get('/api')
      .then(res => this.setState({ photos: res.data, userPhotos: res.data }))
      .catch(err => console.error(err));
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({ username: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username } = this.state;

    const config = {
      headers: {
        username: JSON.stringify(username),
      },
    };
    axios
      .get('/api', config)
      .then(res => this.setState({ userPhotos: res.data }))
      .catch(err => console.error(err));
  }

  render() {
    const { userPhotos } = this.state;
    return (
      <React.Fragment>
        <h1>Unsplash Photos</h1>
        <div className="app-container">
          <UserList change={this.handleChange} submit={this.handleSubmit} />
          <PhotoList photos={userPhotos} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
