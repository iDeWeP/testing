import type { CSSProps, CSSStyles } from '../types';

type SharedStyles = {
  state: CSSStyles;
  focusable: CSSStyles;
  display: CSSStyles;
  position: CSSStyles;
  placement: CSSStyles;
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
  container: CSSProps;
  trail: CSSProps;
  bar: CSSProps;
  decoration: CSSProps;
  input: CSSProps;
};

export const sharedStyles: SharedStyles = {
  state: {
    on: {
      group: 'on'
    }
  },
  focusable: {
    default: {
      ring: 'ring-offset-2',
      focus: 'focus:outline-none',
      focusVisible: 'focus-visible:ring-2'
    },
    disabled: {
      cursor: 'cursor-not-allowed',
      userSelect: 'select-none'
    },
    loading: {
      opacity: 'opacity-50'
    },
    peer: {
      ring: 'ring-offset-2',
      group: 'peer-focus-visible:ring-2'
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
  placement: {
    center: {
      top: 'top-2/4',
      left: 'left-2/4',
      translate: '-translate-x-2/4 -translate-y-2/4'
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
    default: {
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
    color: {
      transition: 'transition-colors',
      transitionDuration: 'duration-150',
      transitionTimingFunction: 'ease-in-out'
    },
    'bg-left': {
      transition: 'transition-[background,_left]',
      transitionDuration: 'duration-150',
      transitionTimingFunction: 'ease-in-out'
    },
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
  },
  container: {
    display: 'inline-flex',
    position: 'relative'
  },
  trail: {
    group: 'peer-checked:opacity-0'
  },
  bar: {
    opacity: 'opacity-0',
    group: 'peer-checked:opacity-100'
  },
  decoration: {
    position: 'absolute',
    transition: 'transition-opacity',
    transitionDuration: 'duration-150',
    transitionTimingFunction: 'ease-in-out',
    pointerEvents: 'pointer-events-none'
  },
  input: {
    width: 'w-full',
    height: 'h-full',
    appearance: 'appearance-none',
    focus: 'focus:outline-none',
    group: 'peer'
  },
};
