import type { ComponentConfig } from '../../types';
import type { SpinnerConfigProps } from './Spinner.types';

export const spinnerConfig: ComponentConfig<SpinnerConfigProps> = {
  props: {
    spin: true,
    value: 75,
    variant: 'text',
    size: 'md',
    thickness: 4,
    color: 'primary',
    componentsProps: {},
    float: false,
    margin: 'unset',
    m: 'unset',
    mx: 'unset',
    my: 'unset',
    mt: 'unset',
    mb: 'unset',
    ml: 'unset',
    mr: 'unset',
    border: 'auto'
  }
};
