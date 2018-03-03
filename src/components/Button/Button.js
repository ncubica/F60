import React, { Component } from 'react';
import { string, bool, func, object, node, oneOf } from 'prop-types';
import GlamorousButton from './Button.glamorous';

export default class Button extends Component {
  static propTypes = {
    children: node.isRequired,
    fullWidth: bool,
    onClick: func,
    size: oneOf(['tiny', 'small', 'regular', 'large']),
    status: oneOf(['enable', 'disabled', 'loading']),
    type: oneOf(['primary', 'secondary', 'inverse', 'minor', 'link', 'destructive', 'success', 'warning']),
    renderButton: func,
  }

  static defaultProps = {
    fullWidth: false,
    onClick: () => {},
    size: 'regular',
    status: 'enable',
    theme: null,
    type: 'primary',
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
          {this.props.children}
        </GlamorousButton>
    );
  }
}

// 🦄 by 3936
