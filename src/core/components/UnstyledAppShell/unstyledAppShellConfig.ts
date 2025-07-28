import type { CSSProps, ComponentConfig } from '../../types';
import type { UnstyledAppShellConfigProps } from './UnstyledAppShell.types';

type Styles = {
  styles: {
    root: {
      default: CSSProps;
    };
  };
};

export const unstyledAppShellConfig: ComponentConfig<UnstyledAppShellConfigProps> &
  Styles = {
  props: {
    as: 'div',
    variant: 'text',
    font: 'unset',
    color: 'unset',
    padding: 'unset',
    p: 'unset',
    px: 'unset',
    py: 'unset',
    pt: 'unset',
    pb: 'unset',
    pl: 'unset',
    pr: 'unset',
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
    shadow: 'unset',
    ring: 'unset',
    gap: 'unset',
    gx: 'unset',
    gy: 'unset'
  },
  styles: {
    root: {
      default: {
        display: 'grid',
        minHeight: 'min-h-screen',
        gridTemplateColumns: 'grid-cols-default',
        gridTemplateRows: 'grid-rows-default'
      }
    }
  }
};
