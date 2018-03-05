import React, { Component } from 'react';
import { Div } from 'glamorous';
import { nudge } from 'tokens';
import 'glamor/reset';

export default (props) => {
  return (
    <Div padding={nudge * 4}>
      {props.children}
    </Div>
  );
}
