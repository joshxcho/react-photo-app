import React, { Component } from 'react';
import axios from 'axios';

import Photos from './Photos';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
    };

    this.getAllPhotos = this.getAllPhotos.bind(this);
  }

  componentDidMount() {
    this.getAllPhotos();
  }

  getAllPhotos() {
    axios
      .get('/api')
      .then(res => this.setState({ photos: res.data }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <h1>Unsplash Photos</h1>
      </div>
    );
  }
}

export default App;
