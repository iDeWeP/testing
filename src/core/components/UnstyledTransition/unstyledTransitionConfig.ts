import type { ComponentConfig } from '../../types';
import type { UnstyledTransitionConfigProps } from './UnstyledTransition.types';

export const unstyledTransitionConfig: ComponentConfig<UnstyledTransitionConfigProps> =
  {
    props: {
      as: 'div',
      unmountOnExit: false,
      peak: 'auto',
      transition: 'fade',
      duration: 1000,
      transitionProps: {},
      variant: 'none',
      size: 'none',
      scale: 'normal',
      margin: 'none',
      border: false,
      radius: 'none',
      color: 'neutral'
    }
  };
