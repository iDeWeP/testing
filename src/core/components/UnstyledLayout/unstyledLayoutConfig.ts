import type { CSSProps, CSSStyles, ComponentConfig } from '../../types';
import type { UnstyledLayoutConfigProps } from './UnstyledLayout.types';

type Styles = {
  styles: {
    root: {
      default: CSSProps;
      unstyledLayouts: CSSStyles;
    };
  };
};

export const unstyledLayoutConfig: ComponentConfig<UnstyledLayoutConfigProps> &
  Styles = {
  props: {
    as: 'div',
    layout: 'row',
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
    font: 'unset',
    color: 'unset',
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
        width: 'w-full'
      },
      unstyledLayouts: {
        default: {
          maxWidth: 'max-w-376',
          padding: 'px-4 md:px-8',
          margin: 'mx-auto',
          gridTemplateColumns: 'grid-cols-default',
          gridTemplateRows: 'grid-rows-default'
        },
        row: {
          maxWidth: 'max-w-376',
          padding: 'px-4 md:px-8',
          margin: 'mx-auto'
        },
        col: {
          maxWidth: 'max-w-376',
          padding: 'px-4 md:px-8',
          margin: 'mx-auto',
          gridAutoFlow: 'grid-flow-col'
        },
        left: {
          maxWidth: 'max-w-376',
          padding: 'px-4 md:pl-8 md:pr-0',
          margin: 'mx-auto',
          gridTemplateColumns: 'grid-cols-default',
          gridTemplateRows: 'grid-rows-default'
        },
        center: {
          maxWidth: 'max-w-376',
          padding: 'px-4 md:px-0',
          margin: 'mx-auto',
          gridTemplateColumns: 'grid-cols-default',
          gridTemplateRows: 'grid-rows-default'
        },
        right: {
          maxWidth: 'max-w-376',
          padding: 'px-4 md:pl-0 md:pr-8',
          margin: 'mx-auto',
          gridTemplateColumns: 'grid-cols-default',
          gridTemplateRows: 'grid-rows-default'
        },
        dashboard: {
          padding: 'px-4 md:px-8',
          gridTemplateColumns: 'grid-cols-default',
          gridTemplateRows: 'grid-rows-default'
        },
        'dashboard-left': {
          padding: 'px-4 md:px-8 lg:pr-0',
          gridTemplateColumns: 'grid-cols-default',
          gridTemplateRows: 'grid-rows-default'
        },
        'dashboard-center': {
          padding: 'px-4 md:px-8 lg:px-0',
          gridTemplateColumns: 'grid-cols-default',
          gridTemplateRows: 'grid-rows-default'
        },
        'dashboard-right': {
          padding: 'px-4 md:px-8 lg:pl-0',
          gridTemplateColumns: 'grid-cols-default',
          gridTemplateRows: 'grid-rows-default'
        }
      }
    }
  }
};
