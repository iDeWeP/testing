import type { CSSProps, ComponentConfig } from '../../types';
import type { UnstyledButtonConfigProps } from './UnstyledButton.types';

type Styles = {
  styles: {
    root: {
      loading: CSSProps;
    };
  };
};

export const unstyledButtonConfig: ComponentConfig<UnstyledButtonConfigProps> &
  Styles = {
  props: {
    as: 'button',
    scale: 'default',
    effect: 'unset',
    componentsProps: {},
    ripple: 'none',
    variant: 'solid',
    size: 'md',
    margin: 'unset',
    m: 'unset',
    mx: 'unset',
    my: 'unset',
    mt: 'unset',
    mb: 'unset',
    ml: 'unset',
    mr: 'unset',
    border: 'auto',
    radius: 'unset',
    r: 'unset',
    rt: 'unset',
    rb: 'unset',
    rl: 'unset',
    rr: 'unset',
    rtl: 'unset',
    rtr: 'unset',
    rbl: 'unset',
    rbr: 'unset',
    color: 'unset',
    shadow: 'unset',
    gap: 'unset'
  },
  styles: {
    root: {
      loading: {
        color: 'text-transparent',
        fill: 'fill-transparent'
      }
    }
  }
};
