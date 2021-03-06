import React, { Component } from 'react';
import { Div } from 'glamorous';
import { nudge, colors, spacing } from 'tokens';

export default (props) => {
  return (
    <Div width="100%" marginTop={spacing.wide} marginBottom={spacing.wide} borderBottom={`1px solid ${colors.grey}`} />
  );
}
