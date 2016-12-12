import React, { Component, PropTypes } from 'react';
import '../styles/DrumKit.css';

export default class DrumKit extends Component {
  constructor() {
    super();

    this.state = {
      isPlaying: false
    };

    this._playSound = this._playSound.bind(this);
    this._onTransitionEnd = this._onTransitionEnd.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this._playSound);
    this.audio = new Audio(this.props.source);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this._playSound);
  }

  _playSound(event) {
    if (event.keyCode === this.props.code || event.type === 'click') {
      this.setState({ isPlaying: true });
      this.audio.currentTime = 0;
      this.audio.play();
    }
  }

  _onTransitionEnd(event) {
    this.setState({ isPlaying: false });
  }

  render() {
    const { style, bigText, smallText, className } = this.props;
    const isPlaying = this.state.isPlaying ? `${className} isPlaying` : `${className}`;
    return (
      <button
        onClick={this._playSound}
        onTransitionEnd={this._onTransitionEnd}
        className={isPlaying}
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
