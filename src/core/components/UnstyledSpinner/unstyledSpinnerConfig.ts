import type { ComponentConfig } from '../../types';
import type { UnstyledSpinnerConfigProps } from './UnstyledSpinner.types';

export const unstyledSpinnerConfig: ComponentConfig<UnstyledSpinnerConfigProps> =
  {
    props: {
      spin: false,
      value: 0,
      variant: 'text',
      size: 'md',
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
      color: 'unset',
      ring: 'unset',
      componentsProps: {}
    }
  };
