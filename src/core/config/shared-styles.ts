import type { CSSProps } from '../types';

type Styles = Record<string, CSSProps>;

type SharedStyles = {
  display: Styles;
  direction: Styles;
  transition: Styles;
  image: CSSProps;
};

export const sharedStyles: SharedStyles = {
  display: {
    flex: {
      display: 'flex'
    },
    grid: {
      display: 'grid'
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
  image: {
    width: 'w-full',
    maxWidth: 'max-w-none'
  }
};
