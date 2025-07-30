import type { ComponentConfig } from '../../types';
import type { FabConfigProps } from './Fab.types';

export const fabConfig: ComponentConfig<FabConfigProps> = {
  props: {
    as: 'button',
    variant: 'solid',
    position: 'fixed',
    placement: 'bottom-right',
    size: 'md',
    scale: 'default',
    color: 'primary',
    effect: 'unset',
    componentsProps: {},
    ripple: 'default',
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
    gap: 'xs'
  }
};
