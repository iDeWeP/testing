import type { ComponentConfig } from '../../types';
import type { DividerConfigProps } from './Divider.types';

export const dividerConfig: ComponentConfig<DividerConfigProps> = {
  props: {
    as: 'span',
    orientation: 'row',
    placement: 'center',
    padding: 'unset',
    font: 'xs',
    color: 'surface',
    gap: 'xs',
    componentsProps: {},
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
    mr: 'unset'
  }
};
