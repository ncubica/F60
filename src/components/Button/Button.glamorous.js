import React, { Component } from 'react';
import g from 'glamorous';

const GlamorousButton = g.button(
  {
    position: "relative",
  },
  props => {
    try {

      // return default jss from Button.jss.js if theme for button don't exist
      if (!Object.prototype.hasOwnProperty.call(props.theme, 'button')) {
        const {type, size, status} = props.jss;
        return Object.assign({}, {
          ...type[props.type],
          ...size[props.size],
          ...status[props.status],
        }
        );
      }

      // extends theme.button with current jss from Button.jss.js
      const { button } = theme;
      const type = button.type ? button.type : jss.type;
      const status = button.status ? button.status : jss.status;
      const size = button.size ? button.size : jss.size;

      return Object.assign({}, {
        ...type[props.type],
        ...size[props.size],
        ...status[props.status],
      });
    } catch(error) {
      throw new Error(`Glamorous <Button /> Error, ${error}`);
    }
  }
);

export default GlamorousButton;
