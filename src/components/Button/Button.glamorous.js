import React, { Component } from 'react';
import g from 'glamorous';

const GlamorousButton = g.button({

}, props => {
    try {
      return Object.assign({}, {
        ...props.theme.type[props.type],
        ...props.theme.size[props.size],
        ...props.theme.status[props.status],
      });
    } catch(error) {
      throw new Error(`<Button /> Error, ${error}`);
    }
  }
);

export default GlamorousButton;
