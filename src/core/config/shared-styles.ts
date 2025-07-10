import type { CSSProps } from '../types';

type Styles = Record<string, CSSProps>;

type SharedStyles = {
  focusable: Styles;
  display: Styles;
  position: Styles;
  direction: Styles;
  transition: Styles;
  cursor: Styles;
};

export const sharedStyles: SharedStyles = {
  focusable: {
    default: {
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
    }
  },
  position: {
    absolute: {
      position: 'absolute'
    }
  },
  direction: {
    col: {
      flexDirection: 'flex-col'
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
