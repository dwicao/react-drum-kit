import React, { Component } from 'react';
import DrumKit from './DrumKit';
import clap from '../sounds/clap.wav';
import '../styles/main.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <DrumKit
          className="snare"
          smallText="A"
          bigText="Snare"
          code={65}
          source={clap}
        />
        <p>Click Button or Press "A" on Keyboard to Play Sound</p>
      </div>
    );
  }
}
