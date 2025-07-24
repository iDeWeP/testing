import type { CSSProps, ComponentConfig } from '../../types';
import type { UnstyledContainerConfigProps } from './UnstyledContainer.types';

type Styles = {
  styles: {
    root: {
      default: CSSProps;
    };
  };
};

export const unstyledContainerConfig: ComponentConfig<UnstyledContainerConfigProps> &
  Styles = {
  props: {
    as: 'div',
    variant: 'solid',
    size: 'md',
    scale: 'default',
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
    ring: 'unset',
    gap: 'unset'
  },
  styles: {
    root: {
      default: {
        display: 'inline-flex',
        textWrap: 'text-nowrap',
        justifyContent: 'justify-center',
        alignItems: 'items-center',
        userSelect: 'select-none'
      }
    }
  }
};
