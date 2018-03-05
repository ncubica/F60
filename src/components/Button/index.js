import React, { Component } from 'react';
import { string, bool, func, object, node, oneOf } from 'prop-types';
import GlamorousButton from './Button.glamorous';
import Spinner from 'components/Spinner/';
import jss from './Button.jss';
import { Span } from 'glamorous';


export default class Button extends Component {
  static propTypes = {
    children: node.isRequired,
    onClick: func,
    size: string,
    status: string,
    type: string,
    _theme: object,
  }
  // oneOf(['primary', 'secondary', 'inverse', 'minor', 'link', 'destructive', 'success', 'warning'])

  static defaultProps = {
    onClick: () => {},
    size: 'regular',
    status: 'enable',
    theme: null,
    type: 'primary',
    jss,
  }

  handleClick = (event) => {
    if (this.props.status !== "loading") {
      this.props.onClick();
    }
  }

  render() {
    const { status, children } = this.props;
    const disabled = status === 'disabled';

    return (
        <GlamorousButton disabled={disabled} {...this.props} onClick={this.handleClick}>
           { this.props.children }
        </GlamorousButton>
    );
  }
}

// 🦄 by 3936
