import type { ComponentConfig } from '../../types';
import type { CardConfigProps } from './Card.types';

export const cardConfig: ComponentConfig<CardConfigProps> = {
  props: {
    as: 'div',
    variant: 'surface',
    orientation: 'col',
    size: 'md',
    radius: 'lg',
    color: 'surface',
    shadow: 'md',
    gap: 'none',
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
    rt: 'none',
    rb: 'none',
    rl: 'none',
    rr: 'none',
    rtl: 'none',
    rtr: 'none',
    rbl: 'none',
    rbr: 'none',
    font: 'none',
    gx: 'none',
    gy: 'none'
  }
};
