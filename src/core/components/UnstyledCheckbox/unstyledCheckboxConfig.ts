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
    shared: {
      default: CSSProps;
    };
  };
};

export const unstyledCheckboxConfig: ComponentConfig<UnstyledCheckboxConfigProps> &
  Styles = {
  props: {
    type: 'checkbox',
    variant: 'text',
    size: 'md',
    margin: 'unset',
    mx: 'unset',
    my: 'unset',
    mt: 'unset',
    mb: 'unset',
    ml: 'unset',
    mr: 'unset',
    border: 'unset',
    bx: 'unset',
    by: 'unset',
    bt: 'unset',
    bb: 'unset',
    bl: 'unset',
    br: 'unset',
    radius: 'unset',
    rt: 'unset',
    rb: 'unset',
    rl: 'unset',
    rr: 'unset',
    rtl: 'unset',
    rtr: 'unset',
    rbl: 'unset',
    rbr: 'unset',
    color: 'unset',
    shadow: 'unset',
    componentsProps: {},
    ripple: 'normal'
  },
  styles: {
    root: {
      default: {
        display: 'inline-flex',
        position: 'relative'
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
        group: 'peer-checked:opacity-0'
      }
    },
    icon: {
      default: {
        opacity: 'opacity-0',
        group: 'peer-checked:opacity-100'
      }
    },
    shared: {
      default: {
        position: 'absolute',
        top: 'top-2/4',
        left: 'left-2/4',
        translate: '-translate-x-2/4 -translate-y-2/4',
        transition: 'transition-opacity',
        transitionDuration: 'duration-150',
        transitionTimingFunction: 'ease-in-out',
        pointerEvents: 'pointer-events-none',
        group: 'peer-focus-visible:ring-4'
      }
    }
  }
};
