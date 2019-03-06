import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = { displayBio: false };

    console.log('Component this', this);

    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  }

  toggleDisplayBio() {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {
    return (
      <div>
        <h1>John Doe</h1>
        <p>I am Software Engineer</p>
        <p>I am Looking forward to work in your meaningful projects.</p>
        {
          this.state.displayBio ? (
            <div>
              <p>I live in Bekasi, and doing code everyday</p>
              <p>Ngoding is my hobby, I love JavaScript language, and my favorite is React, React is awasome</p>
              <p>If I am not ngoding I will sleep or watch the TV.</p>
              <button onClick={this.toggleDisplayBio}>Show less</button>
            </div>
          ) : (
              <div>
                <button onClick={this.toggleDisplayBio}>Read more</button>
              </div>
            )
        }
      </div>
    )
  }
}

export default App;