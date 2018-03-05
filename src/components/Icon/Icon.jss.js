import { nudge } from 'tokens';

const size = {
  tiny: {
    width: nudge,
    height: nudge,
  },
  small: {
    width: nudge * 2,
    height: nudge * 2,
  },
  regular: {
    width: nudge * 4,
    height: nudge * 4,
  },
  big: {
    width: nudge * 8,
    height: nudge * 8,
  },
  huge: {
    width: nudge * 16,
    height: nudge * 16,
  },
}

export default {
  size,
};
