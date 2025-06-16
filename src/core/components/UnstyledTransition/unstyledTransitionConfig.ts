import type { ComponentConfig } from '../../types';
import type { UnstyledTransitionConfigProps } from './UnstyledTransition.types';

export const unstyledTransitionConfig: ComponentConfig<UnstyledTransitionConfigProps> =
  {
    props: {
      in: false,
      unmountOnExit: false,
      peak: 100,
      transition: 'fade',
      duration: 1000,
      transtionProps: {}
    }
  };
