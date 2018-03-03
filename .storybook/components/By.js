import React, { Component } from 'react';
import { Div } from 'glamorous';
import { nudge, colors, spacing, font } from 'tokens';

export default (props) => {
  return (
    <Div width="100%" padding={spacing.base} fontFamily={`${font.family.sansSerif}`} fontSize={font.size.regular} color={`${colors.black}`}>
      by {'//'} {props.emoji} - {props.by}
    </Div>
  );
}
