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
    open: false,
    defaultOpen: false,
    trigger: 'click',
    stable: false,
    followCursor: false,
    closeOnOutClick: false,
    closeOnEsc: false,
    focusOnOpen: false,
    focusOnClose: false,
    focusTrap: false,
    lockScroll: false,
    unmountOnExit: false,
    peak: 100,
    variant: 'none',
    placement: 'bottom',
    zIndex: 1000,
    offset: 16,
    size: 'none',
    scale: 'normal',
    margin: 'none',
    border: false,
    radius: 'none',
    color: 'primary',
    direction: 'row',
    wrap: 'wrap',
    justify: 'normal',
    align: 'stretch',
    gap: 'none',
    duration: 1000,
    portalEl: null,
    transitionProps: {},
    componentProps: {},
    anchor: null,
    arrow: false,
    backdrop: false
  },
  styles: {
    root: {
      default: {
        position: 'absolute',
        transition: 'transition-opacity'
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
        color: 'bg-black/10'
      },
      blur: {
        transform: 'backdrop-blur-sm'
      }
    }
  }
};
