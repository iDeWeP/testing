import type { CSSProps, ComponentConfig } from '../../types';
import type { UnstyledButtonConfigProps } from './UnstyledButton.types';

type Styles = {
  styles: {
    root: {
      default: CSSProps;
      loading: Record<string, CSSProps>;
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
    mx: 'unset',
    my: 'unset',
    mt: 'unset',
    mb: 'unset',
    ml: 'unset',
    mr: 'unset',
    border: 'auto',
    bx: 'unset',
    by: 'unset',
    bt: 'unset',
    bb: 'unset',
    bl: 'unset',
    br: 'unset',
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
      default: {
        display: 'inline-flex',
        position: 'relative',
        font: 'font-semibold',
        textWrap: 'text-nowrap',
        justifyContent: 'justify-center',
        alignItems: 'items-center',
        userSelect: 'select-none'
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
