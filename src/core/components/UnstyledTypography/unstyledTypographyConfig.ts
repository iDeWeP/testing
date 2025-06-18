import type { ComponentConfig } from '../../types';
import type { UnstyledTypographyConfigProps } from './UnstyledTypography.types';

export const unstyledTypographyConfig: ComponentConfig<UnstyledTypographyConfigProps> =
  {
    props: {
      as: 'span',
      variant: 'none',
      size: 'md',
      scale: 'normal',
      margin: 'none',
      border: false,
      radius: 'none',
      color: 'neutral',
      weight: 'normal',
      underline: 'none',
      wordBreak: 'normal',
      wrap: 'wrap',
      align: 'left',
      overflow: 'clip'
    }
  };
