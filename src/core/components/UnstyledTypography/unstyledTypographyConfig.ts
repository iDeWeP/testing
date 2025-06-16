import type { ComponentConfig } from '../../types';
import type { UnstyledTypographyConfigProps } from './UnstyledTypography.types';

export const unstyledTypographyConfig: ComponentConfig<UnstyledTypographyConfigProps> =
  {
    props: {
      size: 'md',
      weight: 'normal',
      underline: 'none',
      wordBreak: 'normal',
      wrap: 'wrap',
      align: 'left',
      overflow: 'clip'
    }
  };
