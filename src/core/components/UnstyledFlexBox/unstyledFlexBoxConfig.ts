import type { ComponentConfig } from '../../types';
import type { UnstyledFlexBoxConfigProps } from './UnstyledFlexBox.types';

export const unstyledFlexBoxConfig: ComponentConfig<UnstyledFlexBoxConfigProps> =
  {
    props: {
      direction: 'row',
      wrap: 'wrap',
      justify: 'normal',
      align: 'stretch',
      gap: 'none'
    }
  };
