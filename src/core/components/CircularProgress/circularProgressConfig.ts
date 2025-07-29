import type { ComponentConfig } from '../../types';
import type { CircularProgressConfigProps } from './CircularProgress.types';

export const circularProgressConfig: ComponentConfig<CircularProgressConfigProps> =
  {
    props: {
      value: 0,
      variant: 'light',
      size: 'md',
      color: 'primary',
      componentsProps: {},
      gap: 'unset',
      spin: false,
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
