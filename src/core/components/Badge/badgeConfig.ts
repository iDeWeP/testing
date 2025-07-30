import type { ComponentConfig } from '../../types';
import type { BadgeConfigProps } from './Badge.types';

export const badgeConfig: ComponentConfig<BadgeConfigProps> = {
  props: {
    as: 'div',
    showZero: false,
    variant: 'solid',
    placement: 'top-right',
    overlap: 'rounded',
    size: 'md',
    color: 'error',
    margin: 'unset',
    m: 'unset',
    mx: 'unset',
    my: 'unset',
    mt: 'unset',
    mb: 'unset',
    ml: 'unset',
    mr: 'unset',
    border: 'auto',
    radius: 'full',
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
    gap: 'unset'
  }
};
