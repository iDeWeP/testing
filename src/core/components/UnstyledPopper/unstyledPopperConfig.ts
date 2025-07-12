import type { CSSProps, ComponentConfig } from '../../types';
import type { UnstyledPopperConfigProps } from './UnstyledPopper.types';

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

export const unstyledPopperConfig: ComponentConfig<UnstyledPopperConfigProps> &
  Styles = {
  props: {
    as: 'div',
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
    threshold: 0,
    zIndex: 1000,
    transition: 'fade',
    duration: 1000,
    portalEl: null,
    animationProps: {},
    componentProps: {},
    arrow: false,
    backdrop: false,
    variant: 'solid',
    orientation: 'row',
    padding: 'unset',
    px: 'unset',
    py: 'unset',
    pt: 'unset',
    pb: 'unset',
    pl: 'unset',
    pr: 'unset',
    border: 'auto',
    bx: 'unset',
    by: 'unset',
    bt: 'unset',
    bb: 'unset',
    bl: 'unset',
    br: 'unset',
    radius: 'unset',
    rt: 'unset',
    rb: 'unset',
    rl: 'unset',
    rr: 'unset',
    rtl: 'unset',
    rtr: 'unset',
    rbl: 'unset',
    rbr: 'unset',
    font: 'unset',
    color: 'unset',
    shadow: 'unset',
    gap: 'unset',
    gx: 'unset',
    gy: 'unset'
  },
  styles: {
    root: {
      default: {
        position: 'absolute',
        transitionTimingFunction: 'easy-in-out',
        focus: 'focus:outline-none'
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
