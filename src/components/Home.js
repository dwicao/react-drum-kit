import React, { Component } from 'react';
import DrumKit from './DrumKit';
import clap from '../sounds/clap.wav';

const styleDrum = {
  color: 'blue'
}

export default class Home extends Component {
  render() {
    return (
      <div>
        <DrumKit
          className="blahblah"
          style={styleDrum}
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
