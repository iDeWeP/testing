import type { ComponentConfig } from '../../types';
import type { MarkConfigProps } from './Mark.types';

export const markConfig: ComponentConfig<MarkConfigProps> = {
  props: {
    as: 'span',
    variant: 'text',
    font: 'md',
    color: 'primary',
    mx: 'xs',
    padding: 'none',
    px: 'none',
    py: 'none',
    pt: 'none',
    pb: 'none',
    pl: 'none',
    pr: 'none',
    margin: 'none',
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
    shadow: 'none',
    gap: 'none',
    gx: 'none',
    gy: 'none'
  }
};
