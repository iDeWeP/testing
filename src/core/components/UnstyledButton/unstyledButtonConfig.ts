import type { ComponentConfig } from '../../types';
import type { UnstyledButtonConfigProps } from './UnstyledButton.types';

export const unstyledButtonConfig: ComponentConfig<UnstyledButtonConfigProps> =
  {
    props: {
      as: 'button',
      loading: false,
      disabled: false,
      variant: 'solid',
      size: 'md',
      scale: 'normal',
      margin: 'none',
      border: false,
      radius: 'md',
      color: 'primary',
      effect: 'none',
      componentsProps: {},
      ripple: 'normal',
      leftDecorator: '',
      rightDecorator: ''
    }
  };
