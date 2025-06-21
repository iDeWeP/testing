import type { ComponentConfig } from '../../types';
import type { UnstyledTransitionConfigProps } from './UnstyledTransition.types';

export const unstyledTransitionConfig: ComponentConfig<UnstyledTransitionConfigProps> =
  {
    props: {
      as: 'div',
      in: false,
      unmountOnExit: false,
      peak: 'auto',
      variant: 'none',
      size: 'none',
      scale: 'normal',
      margin: 'none',
      border: false,
      radius: 'none',
      color: 'primary',
      transition: 'fade',
      duration: 1000,
      transitionProps: {}
    }
  };
