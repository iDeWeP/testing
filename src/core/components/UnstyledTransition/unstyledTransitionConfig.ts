import type { CSSProps, ComponentConfig } from '../../types';
import type { UnstyledTransitionConfigProps } from './UnstyledTransition.types';

type Styles = {
  styles: {
    transition: Record<string, CSSProps>;
  };
};

export const unstyledTransitionConfig: ComponentConfig<UnstyledTransitionConfigProps> &
  Styles = {
  props: {
    as: 'div',
    in: false,
    unmountOnExit: false,
    peak: 'auto',
    transition: 'fade',
    duration: 1000,
    transitionProps: {},
    variant: 'none',
    size: 'none',
    scale: 'normal',
    margin: 'none',
    border: false,
    radius: 'none',
    color: 'neutral'
  },
  styles: {
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
    }
  }
};
