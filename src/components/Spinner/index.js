import React, { Component } from 'react';
import { string, bool, func, object, node, oneOf } from 'prop-types';
import { colors } from 'tokens';
import { Circle } from 'glamorous';

import { GlamorousSvg, GlamorousCircle } from './Animations.glamorous';

export default class Spinner extends Component {
  static propTypes = {
    size: string,
  }

  static defaultProps = {
    size: 'regular',
  }

  render() {
    return (
      <GlamorousSvg width="40" height="40" viewBox="0 0 50 50">
        <Circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
          strokeMiterlimit="10"
          stroke={colors.grey}
        />
        <GlamorousCircle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
          strokeMiterlimit="10"
          strokeDasharray="1, 200"
          strokeDashoffset="0"
          animation="dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite"
          strokeLinecap="round"
        />
      </GlamorousSvg>
    );
  }
}

// 🦄 by 3936
