import type { CSSProps, CSSStyles, ComponentConfig } from '../../types';
import type { UnstyledButtonConfigProps } from './UnstyledButton.types';

type Styles = {
  styles: {
    root: {
      checkable: CSSProps;
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
      checkable: {
        transition: 'transition-colors',
        transitionDuration: 'duration-150',
        transitionTimingFunction: 'ease-in-out'
      },
      loading: {
        normal: {
          color: 'text-transparent',
          fill: 'fill-transparent'
        },
        checkable: {
          color: '[.on]:text-transparent',
          fill: '[.on]:fill-transparent'
        }
      }
    }
  }
};
