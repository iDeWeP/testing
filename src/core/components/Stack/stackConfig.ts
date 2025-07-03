import type { ComponentConfig, CSSProps } from '../../types';
import type { StackConfigProps } from './Stack.types';

type Styles = {
  styles: {
    root: {
      default: CSSProps;
    };
  };
};

export const stackConfig: ComponentConfig<StackConfigProps> & Styles = {
  props: {
    as: 'div',
    gap: 'none',
    variant: 'text',
    padding: 'none',
    px: 'none',
    py: 'none',
    pt: 'none',
    pb: 'none',
    pl: 'none',
    pr: 'none',
    margin: 'none',
    mx: 'none',
    my: 'none',
    mt: 'none',
    mb: 'none',
    ml: 'none',
    mr: 'none',
    border: false,
    radius: 'none',
    rt: 'none',
    rb: 'none',
    rl: 'none',
    rr: 'none',
    rtl: 'none',
    rtr: 'none',
    rbl: 'none',
    rbr: 'none',
    font: 'none',
    color: 'none',
    shadow: 'none',
    gx: 'none',
    gy: 'none'
  },
  styles: {
    root: {
      default: {
        display: 'flex',
        flexDirection: 'flex-col'
      }
    }
  }
};
