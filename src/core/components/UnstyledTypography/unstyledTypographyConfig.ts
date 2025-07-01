import type { ComponentConfig } from '../../types';
import type { UnstyledTypographyConfigProps } from './UnstyledTypography.types';

export const unstyledTypographyConfig: ComponentConfig<UnstyledTypographyConfigProps> =
  {
    props: {
      as: 'p',
      size: 'none',
      weight: 'normal',
      underline: 'normal',
      wordBreak: 'normal',
      wrap: 'wrap',
      align: 'left',
      overflow: 'clip',
      variant: 'none',
      scale: 'normal',
      margin: 'none',
      border: false,
      radius: 'none',
      color: 'neutral'
    }
  };
