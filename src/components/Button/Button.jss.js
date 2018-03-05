import { colors, spacing, radius, shadow, font } from 'tokens';

const type = {
  primary: {
    background: colors.white,
    border: `1px solid ${colors.grey}`,
    borderRadius: `${radius}`,
    boxShadow: shadow,
    color: colors.black,
    cursor: 'pointer',
    padding: spacing.padding,
    ':hover': {
      background: colors.black,
      color: colors.white,
    },
    ':focus': {
      background: colors.black,
      color: colors.white,
    }
  },
  secondary: {
    background: `${colors.black}`,
    border: `1px solid ${colors.white}`,
    borderRadius: `${radius}px`,
    boxShadow: shadow,
    color: colors.white,
    cursor: 'pointer',
    ':hover': {
      background: colors.white,
      color: colors.black,
      border: `1px solid ${colors.grey}`,
    },
    ':focus': {
      background: colors.white,
      color: colors.black,
      border: `1px solid ${colors.grey}`,
    }
  },
  success: {
    background: colors.green,
    borderRadius: `${radius}px`,
    boxShadow: shadow,
    color: colors.white,
    cursor: 'pointer',
    ':hover': {
      background: colors.green,
      color: colors.white,
      textDecoration: 'underline',
    },
    ':focus': {
      background: colors.green,
      color: colors.white,
      textDecoration: 'underline',
    }
  },
  warning: {
    background: colors.yellow,
    borderRadius: `${radius}px`,
    border: '1px solid transparent',
    boxShadow: shadow,
    color: colors.white,
    cursor: 'pointer',
    ':hover': {
      background: colors.yellow,
      color: colors.white,
      textDecoration: 'underline',
    },
    ':focus': {
      background: colors.yellow,
      color: colors.white,
      textDecoration: 'underline',
    }
  },
  destructive: {
    background: colors.red,
    borderRadius: `${radius}px`,
    border: '1px solid transparent',
    boxShadow: shadow,
    color: colors.white,
    cursor: 'pointer',
    ':hover': {
      background: colors.red,
      color: colors.white,
      textDecoration: 'underline',
    },
    ':focus': {
      background: colors.red,
      color: colors.white,
      textDecoration: 'underline',
    }
  },
  info: {
    background: colors.blue,
    borderRadius: `${radius}px`,
    border: '1px solid transparent',
    boxShadow: shadow,
    color: colors.white,
    cursor: 'pointer',
    ':hover': {
      background: colors.blue,
      color: colors.white,
      textDecoration: 'underline',
    },
    ':focus': {
      background: colors.blue,
      color: colors.white,
      textDecoration: 'underline',
    }
  },
  link: {
    border: '1px solid transparent',
    borderRadius: `${radius}px`,
    boxShadow: '0 0 0',
    color: colors.black,
    cursor: 'pointer',
    textDecoration: 'underline',
    ':hover': {
      border: `1px solid ${colors.grey}`,
    },
    ':focus': {
      border: `1px solid ${colors.grey}`,
    }
  },
  outline: {
    border: `1px solid ${colors.black}`,
    borderRadius: `${radius}px`,
    boxShadow: '0 0 0',
    color: colors.black,
    cursor: 'pointer',
    ':hover': {
      textDecoration: 'underline',
    },
    ':focus': {
      textDecoration: 'underline',
    }
  },
};

const size = {
  tiny: {
    padding: spacing.base / 2,
    fontSize: font.size.tiny,
  },
  small: {
    padding: spacing.base / 1.5,
    fontSize: font.size.small,
  },
  regular: {
    padding: spacing.base,
    fontSize: font.size.regular,
  },
  big: {
    fontSize: font.size.big,
    padding: spacing.base * 1.5,
  },
  huge: {
    fontSize: font.size.huge,
    padding: spacing.base * 1.75,
  },
}

const status = {
  enabled: {},
  loading: {
    align: 'middle',
    cursor: 'progress',
    background: colors.white,
    borderColor: colors.border,
    color: colors.darkGrey,
    ':hover': {
      background: colors.white,
    },
    ':focus': {
      background: colors.white,
    },
  },
  disabled: {
    cursor: 'not-allowed',
    borderColor: colors.darkGrey,
    color: colors.darkGrey,
    fontStyle: 'italic',
    ':hover': {
      background: 'transparent',
    },
    ':after': {
      content: ' ', // without the space Glamorous will not render the content
      position: 'absolute',
      width: '106%',
      borderBottom: `1px dashed ${colors.darkGrey}`,
      top: '50%',
      left: '-5%',
      zIndex: '-10px',
      transform: 'rotate(22deg)',
    }
  },
}

export default {
  type,
  size,
  status,
};
