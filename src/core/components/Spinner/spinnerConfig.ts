import type { ComponentConfig } from '../../types';
import type { SpinnerConfigProps } from './Spinner.types';

export const spinnerConfig: ComponentConfig<SpinnerConfigProps> = {
  props: {
    variant: 'text',
    size: 'md',
    color: 'primary',
    componentsProps: {},
    spin: true,
    value: 75,
    thickness: 4,
    margin: 'unset',
    m: 'unset',
    mx: 'unset',
    my: 'unset',
    mt: 'unset',
    mb: 'unset',
    ml: 'unset',
    mr: 'unset',
    border: 'auto',
    ring: 'unset'
  }
};
