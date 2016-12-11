import React, { Component, PropTypes } from 'react';
import {findDOMNode} from 'react-dom';

export default class DrumKit extends Component {
  constructor() {
    super();

    this._playSound = this._playSound.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this._playSound);
    this.audio = new Audio(this.props.source);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this._playSound);
  }

  _playSound(evt) {
    if (evt.keyCode === this.props.code || evt.type === 'click') {
      this.audio.currentTime = 0;
      this.audio.play();
    }
  }

  render() {
    const { style, bigText, smallText, className } = this.props;
    return (
      <button
        onClick={this._playSound}
        className={className}
        style={style}>
        <kbd>{smallText}</kbd>
        <span>{bigText}</span>
      </button>
    );
  }
}


DrumKit.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  bigText: PropTypes.string.isRequired,
  smallText: PropTypes.string.isRequired,
  code: PropTypes.number.isRequired,
  source: PropTypes.string.isRequired
};
