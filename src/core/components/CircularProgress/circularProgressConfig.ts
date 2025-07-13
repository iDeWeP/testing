import type { ComponentConfig } from '../../types';
import type { CircularProgressConfigProps } from './CircularProgress.types';

export const circularProgressConfig: ComponentConfig<CircularProgressConfigProps> =
  {
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
      mx: 'unset',
      my: 'unset',
      mt: 'unset',
      mb: 'unset',
      ml: 'unset',
      mr: 'unset',
      border: 'auto'
    }
  };
