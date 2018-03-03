import { colors, spacing, radius, shadow, font} from 'tokens';

const buttonTheme = {
  type: {
    primary: {
      background: colors.white,
      border: `1px solid ${colors.grey}`,
      borderRadius: `${radius}`,
      boxShadow: shadow,
      color: colors.black,
      cursor: 'pointer',
      padding: spacing.padding,
      ':hover': {
        background: colors.primary,
        color: colors.white,
      },
      ':focus': {
        background: colors.primary,
        color: colors.white,
      }
    },
    secondary: {
      border: `1px solid ${colors.primary}`,
      background: `${colors.primary}`,
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
  },
  size: {
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
      padding: spacing.base * 2,
    },
  },
  status: {
    enabled: {},
    loading: {
      cursor: "progress",
      background: colors.white,
      borderColor: colors.border,
      color: colors.darkGrey,
      ":hover": {
        background: colors.white,
      },
      ":focus": {
        background: colors.white,
      },
    },
    disabled: {
      cursor: "not-allowed",
      background: colors.grey,
      borderColor: colors.border,
      color: colors.darkGrey,
      ":hover": {
        background: colors.grey,
      }
    },
  }
};

export default buttonTheme;
