import type { CSSProps, ComponentConfig } from '../../types';
import type { UnstyledButtonConfigProps } from './UnstyledButton.types';

type Styles = {
  styles: {
    root: {
      default: CSSProps;
    };
  };
};

export const unstyledButtonConfig: ComponentConfig<UnstyledButtonConfigProps> &
  Styles = {
  props: {
    as: 'button',
    variant: 'none',
    size: 'md',
    scale: 'normal',
    margin: 'none',
    border: false,
    radius: 'md',
    color: 'neutral',
    effect: 'none',
    componentsProps: {},
    ripple: 'normal'
  },
  styles: {
    root: {
      default: {
        display: 'inline-flex',
        font: 'font-semibold',
        textWrap: 'text-nowrap',
        justifyContent: 'justify-center',
        alignItems: 'items-center',
        gap: 'gap-2',
        userSelect: 'select-none'
      }
    }
  }
};
