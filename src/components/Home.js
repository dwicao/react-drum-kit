import React, { Component } from 'react';
import DrumKit from './DrumKit';

import '../styles/Home.css';

import clap from '../sounds/clap.wav';
import hihat from '../sounds/hihat.wav';
import kick from '../sounds/kick.wav';
import openhat from '../sounds/openhat.wav';
import boom from '../sounds/boom.wav';
import ride from '../sounds/ride.wav';
import snare from '../sounds/snare.wav';
import tom from '../sounds/tom.wav';
import tink from '../sounds/tink.wav';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="one">
          <DrumKit
            className="drumKit clap"
            smallText="a"
            bigText="clap"
            code={65}
            source={clap}
          />
          <DrumKit
            className="drumKit hihat"
            smallText="s"
            bigText="hihat"
            code={83}
            source={hihat}
          />
          <DrumKit
            className="drumKit kick"
            smallText="d"
            bigText="kick"
            code={68}
            source={kick}
          />
        </div>
        <div className="two">
          <DrumKit
            className="drumKit openhat"
            smallText="f"
            bigText="openhat"
            code={70}
            source={openhat}
          />
          <DrumKit
            className="drumKit boom"
            smallText="g"
            bigText="boom"
            code={71}
            source={boom}
          />
          <DrumKit
            className="drumKit ride"
            smallText="h"
            bigText="ride"
            code={72}
            source={ride}
          />
        </div>
        <div className="three">
          <DrumKit
            className="drumKit snare"
            smallText="j"
            bigText="snare"
            code={74}
            source={snare}
          />
          <DrumKit
            className="drumKit tom"
            smallText="k"
            bigText="tom"
            code={75}
            source={tom}
          />
          <DrumKit
            className="drumKit tink"
            smallText="l"
            bigText="tink"
            code={76}
            source={tink}
          />
        </div>
    </div>
    );
  }
}
