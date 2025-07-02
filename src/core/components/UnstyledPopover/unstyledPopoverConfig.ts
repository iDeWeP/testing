import type { CSSProps, ComponentConfig } from '../../types';
import type { UnstyledPopoverConfigProps } from './UnstyledPopover.types';

type Styles = {
  styles: {
    root: {
      default: CSSProps;
    };
    backdrop: {
      default: CSSProps;
      visible: CSSProps;
      blur: CSSProps;
    };
  };
};

export const unstyledPopoverConfig: ComponentConfig<UnstyledPopoverConfigProps> &
  Styles = {
  props: {
    as: 'div',
    defaultOpen: false,
    followCursor: false,
    trigger: 'none',
    collision: 'none',
    closeOnOutClick: false,
    closeOnEsc: false,
    focusOnOpen: false,
    focusOnClose: false,
    focusTrap: false,
    lockScroll: false,
    unmountOnExit: false,
    peak: 100,
    placement: 'bottom',
    offset: 0,
    zIndex: 1000,
    duration: 1000,
    portalEl: null,
    transitionProps: {},
    componentProps: {},
    arrow: false,
    backdrop: false,
    orientation: 'horizontal',
    justify: 'normal',
    align: 'stretch',
    gap: 'none',
    variant: 'none',
    size: 'none',
    scale: 'normal',
    margin: 'none',
    border: false,
    radius: 'none',
    color: 'neutral'
  },
  styles: {
    root: {
      default: {
        position: 'absolute',
        transition: 'transition-opacity',
        transitionTimingFunction: 'easy-in-out'
      }
    },
    backdrop: {
      default: {
        position: 'fixed',
        top: 'top-0',
        left: 'left-0',
        width: 'w-screen',
        height: 'h-screen'
      },
      visible: {
        color: 'bg-black/50'
      },
      blur: {
        transform: 'backdrop-blur-sm'
      }
    }
  }
};
