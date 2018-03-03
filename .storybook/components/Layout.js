import React, { Component } from 'react';
import { Div } from 'glamorous';
import { nudge } from 'tokens';

export default (props) => {
  return (
    <Div padding={nudge * 4} margin={nudge * 2}>
      {props.children}
    </Div>
  );
}
