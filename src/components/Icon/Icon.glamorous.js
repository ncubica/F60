import React, { Component } from 'react';
import g from 'glamorous';

const GlamorousIcon = g.span(
  {
    position: "relative",
    display: "inline-block",
  },
  props => {
    try {
      // return default jss from Button.jss.js if theme for button don't exist
      if (!Object.prototype.hasOwnProperty.call(props.theme, 'icon')) {
        const {size} = props.jss;
        return Object.assign({}, {
          ...size[props.size],
          fill: props.color,
        }
        );
      }

      // extends theme.button with current jss from Button.jss.js
      const { icons } = theme;
      const size = button.size ? button.size : jss.size;

      return Object.assign({}, {
        ...size[props.size],
        fill: props.color,
      });
    } catch(error) {
      throw new Error(`Glamorous <Icon /> Error, ${error}`);
    }
  }
);

export default GlamorousIcon;
