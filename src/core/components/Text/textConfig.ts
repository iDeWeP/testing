import type { ComponentConfig } from '../../types';
import type { TextConfigProps } from './Text.types';

export const textConfig: ComponentConfig<TextConfigProps> = {
  props: {
    as: 'p',
    variant: 'text',
    font: 'md',
    color: 'surface',
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
    shadow: 'none',
    gap: 'none',
    gx: 'none',
    gy: 'none'
  }
};
