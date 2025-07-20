import type { CSSProps, CSSStyles } from '../types';

type SharedStyles = {
  focusable: CSSStyles;
  display: CSSStyles;
  position: CSSStyles;
  scale: CSSStyles;
  width: CSSStyles;
  ring: CSSStyles;
  direction: CSSStyles;
  effect: CSSStyles;
  animation: CSSStyles;
  transition: CSSStyles;
  rotate: CSSStyles;
  cursor: CSSStyles;
  spinner: CSSProps;
};

export const sharedStyles: SharedStyles = {
  focusable: {
    default: {
      ring: 'ring-offset-1',
      focus: 'focus:outline-none',
      focusVisible: 'focus-visible:ring-4'
    },
    disabled: {
      cursor: 'cursor-not-allowed',
      userSelect: 'select-none'
    }
  },
  display: {
    flex: {
      display: 'flex'
    },
    grid: {
      display: 'grid'
    },
    'inline-flex': {
      display: 'inline-flex'
    }
  },
  position: {
    relative: {
      position: 'relative'
    },
    absolute: {
      position: 'absolute'
    },
    fixed: {
      position: 'fixed'
    }
  },
  scale: {
    square: {
      overflow: 'overflow-hidden'
    }
  },
  width: {
    fit: {
      width: 'w-fit'
    },
    full: {
      width: 'w-full'
    }
  },
  ring: {
    normal: {
      ring: 'ring-2'
    }
  },
  direction: {
    col: {
      flexDirection: 'flex-col'
    }
  },
  effect: {
    shadow: {
      boxShadow: 'shadow-md',
      transition: 'transition',
      hover: 'hover:shadow-lg',
      active: 'active:shadow-none',
      focus: 'focus:shadow-none',
      focusVisible: 'focus-visible:shadow-none'
    }
  },
  animation: {
    spin: {
      animation: 'animate-spin'
    }
  },
  transition: {
    fade: {
      transition: 'transition-opacity'
    },
    transform: {
      transition: 'transition-transform'
    },
    'transform-fade': {
      transition: 'transition-[transform,_opacity]'
    },
    'collapse-x': {
      display: 'flex',
      overflow: 'overflow-hidden',
      textWrap: 'text-nowrap',
      transition: 'transition-width'
    },
    'collapse-y': {
      overflow: 'overflow-hidden',
      transition: 'transition-height'
    },
    'collapse-x-fade': {
      display: 'flex',
      overflow: 'overflow-hidden',
      textWrap: 'text-nowrap',
      transition: 'transition-[width,_opacity]'
    },
    'collapse-y-fade': {
      overflow: 'overflow-hidden',
      transition: 'transition-[height,_opacity]'
    }
  },
  rotate: {
    '-90': {
      transform: '-rotate-90'
    }
  },
  cursor: {
    none: {
      pointerEvents: 'pointer-events-none'
    },
    pointer: {
      cursor: 'cursor-pointer'
    },
    disabled: {
      cursor: 'cursor-not-allowed'
    }
  },
  spinner: {
    display: 'inline-flex',
    borderRadius: 'rounded-full',
    color: 'fill-none'
  }
};
