import type { CSSProps, CSSStyles, ComponentConfig } from '../../types';
import type { UnstyledButtonConfigProps } from './UnstyledButton.types';

type Styles = {
  styles: {
    root: {
      checked: CSSProps;
      default: CSSProps;
      loading: CSSStyles;
    };
  };
};

export const unstyledButtonConfig: ComponentConfig<UnstyledButtonConfigProps> &
  Styles = {
  props: {
    as: 'button',
    variant: 'solid',
    size: 'md',
    scale: 'normal',
    radius: 'unset',
    color: 'unset',
    effect: 'unset',
    componentsProps: {},
    ripple: 'none',
    margin: 'unset',
    m: 'unset',
    mx: 'unset',
    my: 'unset',
    mt: 'unset',
    mb: 'unset',
    ml: 'unset',
    mr: 'unset',
    border: 'auto',
    b: 'unset',
    bx: 'unset',
    by: 'unset',
    bt: 'unset',
    bb: 'unset',
    bl: 'unset',
    br: 'unset',
    r: 'unset',
    rt: 'unset',
    rb: 'unset',
    rl: 'unset',
    rr: 'unset',
    rtl: 'unset',
    rtr: 'unset',
    rbl: 'unset',
    rbr: 'unset',
    shadow: 'unset',
    gap: 'unset'
  },
  styles: {
    root: {
      checked: {
        group: 'checked'
      },
      default: {
        position: 'relative'
      },
      loading: {
        normal: {
          opacity: 'opacity-50'
        },
        hide: {
          color: 'text-transparent',
          fill: 'fill-transparent',
          opacity: 'opacity-50'
        }
      }
    }
  }
};
