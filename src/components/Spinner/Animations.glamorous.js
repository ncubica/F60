import React from 'react';
import { css } from 'glamor';
import g from 'glamorous';
import { colors } from 'tokens';

const dash = css.keyframes({
  '0%': {
    strokeDasharray: '1, 200',
    strokeDashoffset: 0,
  },
  '50%': {
    strokeDasharray: '89, 200',
    strokeDashoffset: '-35px',
  },
  '100%': {
    strokeDasharray: '140, 200',
    strokeDashoffset: '-124px',
  }
});

const color = css.keyframes({
  '100%': colors.insignia,
  '0%': {
    stroke: colors.black,
  },
  '40%': {
    stroke: colors.insignia,
  },
  '66%': {
    stroke: colors.black,
  },
  '90%': {
    stroke: colors.insignia,
  },
});

const rotate = css.keyframes({
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const GlamorousSvg = g.svg(
  {
    animation: `${rotate} 3s linear infinite`,
    transformOrigin: 'center center',
  },
  props => {
    // try {
    //   return Object.assign({}, {
    //     ...props.theme.size[props.size],
    //   });
    // } catch(error) {
    //   throw new Error(`<Spinner /> Error, ${error}`);
    // }
  }
);

export const GlamorousCircle = g.circle({
  strokeDasharray: '1, 200',
  strokeDashoffset: 0,
  animation: `${dash} 1.5s ease-in-out infinite, ${color} 6s ease-in-out infinite`,
  strokeLinecap: 'round',
}, props => {

  }
);
