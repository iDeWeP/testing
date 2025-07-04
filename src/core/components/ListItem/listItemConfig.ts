import type { ComponentConfig } from '../../types';
import type { ListItemConfigProps } from './ListItem.types';

export const listItemConfig: ComponentConfig<ListItemConfigProps> = {
  props: {
    as: 'li',
    variant: 'surface',
    orientation: 'col',
    size: 'md',
    radius: 'lg',
    color: 'surface',
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
    shadow: 'none',
    gx: 'none',
    gy: 'none'
  }
};
