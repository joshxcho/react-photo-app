import React, { Component } from 'react';
import axios from 'axios';

import PhotoList from '../Photos/PhotoList';
import UserList from '../User/UserList';
import Footer from '../Footer/Footer';

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
        url: username,
      },
    };

    axios
      .get('/api/user', config)
      .then(res => this.setState({ userPhotos: res.data }))
      .catch(err => console.error(err));
  }

  render() {
    const { userPhotos } = this.state;
    return (
      <div className="homepage">
        <UserList change={this.handleChange} submit={this.handleSubmit} />
        <PhotoList photos={userPhotos} />
        <Footer />
      </div>
    );
  }
}

export default App;
