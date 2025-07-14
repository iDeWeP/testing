import type { CSSProps, ComponentConfig } from '../../types';
import type { ImageConfigProps } from './Image.types';

type Styles = {
  styles: {
    root: {
      default: CSSProps;
    };
  };
};

export const imageConfig: ComponentConfig<ImageConfigProps> & Styles = {
  props: {
    as: 'img',
    radius: 'unset',
    variant: 'solid',
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
    r: 'unset',
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
        width: 'w-full',
        maxWidth: 'max-w-none'
      }
    }
  }
};
