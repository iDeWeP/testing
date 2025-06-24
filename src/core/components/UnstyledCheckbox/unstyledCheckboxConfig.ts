import type { CSSProps, ComponentConfig } from '../../types';
import type { UnstyledCheckboxConfigProps } from './UnstyledCheckbox.types';

type Styles = {
  styles: {
    root: {
      default: CSSProps;
    };
    input: {
      default: CSSProps;
    };
    trail: {
      default: CSSProps;
    };
    icon: {
      default: CSSProps;
    };
  };
};

export const unstyledCheckboxConfig: ComponentConfig<UnstyledCheckboxConfigProps> &
  Styles = {
  props: {
    type: 'checkbox',
    checked: false,
    valid: false,
    invalid: false,
    disabled: false,
    variant: 'none',
    size: 'md',
    margin: 'none',
    border: false,
    radius: 'md',
    color: 'primary',
    componentsProps: {},
    ripple: 'normal'
  },
  styles: {
    root: {
      default: {
        display: 'inline-flex',
        position: 'relative',
        borderRadius: 'rounded-full'
      }
    },
    input: {
      default: {
        width: 'w-full',
        height: 'h-full',
        appearance: 'appearance-none',
        focus: 'focus:outline-none',
        group: 'peer'
      }
    },
    trail: {
      default: {
        position: 'absolute',
        top: 'top-2/4',
        left: 'left-2/4',
        translate: '-translate-x-2/4 -translate-y-2/4',
        borderWidth: 'border',
        transition: 'transition-opacity',
        pointerEvents: 'pointer-events-none',
        group: 'peer-focus-visible:ring-4 peer-checked:opacity-0'
      }
    },
    icon: {
      default: {
        position: 'absolute',
        top: 'top-2/4',
        left: 'left-2/4',
        translate: '-translate-x-2/4 -translate-y-2/4',
        opacity: 'opacity-0',
        transition: 'transition-opacity',
        pointerEvents: 'pointer-events-none',
        group: 'peer-focus-visible:ring-4 peer-checked:opacity-100'
      }
    }
  }
};
