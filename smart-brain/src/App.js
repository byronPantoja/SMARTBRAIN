import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/Image-Link-Form/ImageLinkForm.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }
  onInputChange = (event) => {
    console.log(event);
  };
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <ImageLinkForm onInputChange={this.onInputChange} />
        {/* <FaceRecognition/> */}
      </div>
    );
  }
}

export default App;
