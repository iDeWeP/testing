import type { CSSProps } from '../types';

type Styles = Record<string, CSSProps>;

type SharedStyles = {
  focusable: Styles;
  display: Styles;
  position: Styles;
  scale: Styles;
  direction: Styles;
  effect: Styles;
  transition: Styles;
  cursor: Styles;
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
    absolute: {
      position: 'absolute'
    }
  },
  scale: {
    square: {
      overflow: 'overflow-hidden'
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
  }
};
