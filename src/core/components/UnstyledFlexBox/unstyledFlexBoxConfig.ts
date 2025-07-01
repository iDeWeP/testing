import type { ComponentConfig } from '../../types';
import type { UnstyledFlexBoxConfigProps } from './UnstyledFlexBox.types';

export const unstyledFlexBoxConfig: ComponentConfig<UnstyledFlexBoxConfigProps> =
  {
    props: {
      as: 'div',
      variant: 'none',
      size: 'none',
      scale: 'normal',
      margin: 'none',
      border: false,
      radius: 'none',
      color: 'neutral',
      direction: 'row',
      wrap: 'nowrap',
      justify: 'normal',
      align: 'stretch',
      gap: 'none'
    }
  };
