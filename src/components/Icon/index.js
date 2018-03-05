import React, { Component } from 'react';
import GlamorousIcon from './Icon.glamorous';
import { string } from 'prop-types';
import jss from './Icon.jss';
import { colors } from 'tokens';

export Sprites from './Sprites';

export default class Icon extends Component {
  static propTypes = {
    name: string.isRequired,
    size: string,
  }

  static defaultProps = {
    color: colors.black,
    size: 'regular',
    jss
  }

  render() {
    var useTag = `<use xlink:href="#${this.props.name}" />`;
    return (
      <GlamorousIcon {...this.props}>
        <svg viewBox="0 0 8 8" dangerouslySetInnerHTML={{__html: useTag }} />
      </GlamorousIcon>
    );
  }
}
