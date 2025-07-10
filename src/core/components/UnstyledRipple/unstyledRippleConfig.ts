import type {
  CSSProps,
  RipplePlacement,
  Theme,
  ComponentConfig
} from '../../types';
import type { UnstyledRippleConfigProps } from './UnstyledRipple.types';

type ColorState = 'stateless' | 'stateful';

type Styles = {
  styles: {
    root: {
      default: CSSProps;
      stateful: CSSProps;
      color: Record<
        RipplePlacement,
        Record<ColorState, Record<Theme, Record<string, CSSProps>>>
      >;
    };
  };
};

export const unstyledRippleConfig: ComponentConfig<UnstyledRippleConfigProps> &
  Styles = {
  props: {
    stateful: false,
    variant: 'solid',
    placement: 'normal',
    color: 'unset',
    effect: 'normal'
  },
  styles: {
    root: {
      default: {
        position: 'absolute',
        top: 'top-0',
        left: 'left-0',
        width: 'w-full',
        height: 'h-full',
        borderRadius: 'rounded-[inherit]',
        pointerEvents: 'pointer-events-none'
      },
      stateful: {
        transition: 'transition-colors',
        transitionDuration: 'duration-150',
        transitionTimingFunction: 'ease-in-out'
      },
      color: {
        normal: {
          stateless: {
            light: {
              surface: {
                hover: 'peer-hover:bg-surface-500/10',
                active: 'peer-[:active:hover]:bg-surface-500/20',
                focus:
                  'peer-[:focus:hover]:bg-surface-500/20 peer-focus:bg-surface-500/20'
              },
              neutral: {
                hover: 'peer-hover:bg-neutral-500/10',
                active: 'peer-[:active:hover]:bg-neutral-500/20',
                focus:
                  'peer-[:focus:hover]:bg-neutral-500/20 peer-focus:bg-neutral-500/20'
              },
              primary: {
                hover: 'peer-hover:bg-primary-500/10',
                active: 'peer-[:active:hover]:bg-primary-500/20',
                focus:
                  'peer-[:focus:hover]:bg-primary-500/20 peer-focus:bg-primary-500/20'
              },
              secondary: {
                hover: 'peer-hover:bg-secondary-500/10',
                active: 'peer-[:active:hover]:bg-secondary-500/20',
                focus:
                  'peer-[:focus:hover]:bg-secondary-500/20 peer-focus:bg-secondary-500/20'
              },
              tertiary: {
                hover: 'peer-hover:bg-tertiary-500/10',
                active: 'peer-[:active:hover]:bg-tertiary-500/20',
                focus:
                  'peer-[:focus:hover]:bg-tertiary-500/20 peer-focus:bg-tertiary-500/20'
              },
              success: {
                hover: 'peer-hover:bg-success-500/10',
                active: 'peer-[:active:hover]:bg-success-500/20',
                focus:
                  'peer-[:focus:hover]:bg-success-500/20 peer-focus:bg-success-500/20'
              },
              warning: {
                hover: 'peer-hover:bg-warning-500/10',
                active: 'peer-[:active:hover]:bg-warning-500/20',
                focus:
                  'peer-[:focus:hover]:bg-warning-500/20 peer-focus:bg-warning-500/20'
              },
              error: {
                hover: 'peer-hover:bg-error-500/10',
                active: 'peer-[:active:hover]:bg-error-500/20',
                focus:
                  'peer-[:focus:hover]:bg-error-500/20 peer-focus:bg-error-500/20'
              },
              'surface-light': {
                hover: 'peer-hover:bg-surface-300/10',
                active: 'peer-[:active:hover]:bg-surface-300/20',
                focus:
                  'peer-[:focus:hover]:bg-surface-300/20 peer-focus:bg-surface-300/20'
              },
              'neutral-light': {
                hover: 'peer-hover:bg-neutral-300/10',
                active: 'peer-[:active:hover]:bg-neutral-300/20',
                focus:
                  'peer-[:focus:hover]:bg-neutral-300/20 peer-focus:bg-neutral-300/20'
              },
              'primary-light': {
                hover: 'peer-hover:bg-primary-300/10',
                active: 'peer-[:active:hover]:bg-primary-300/20',
                focus:
                  'peer-[:focus:hover]:bg-primary-300/20 peer-focus:bg-primary-300/20'
              },
              'secondary-light': {
                hover: 'peer-hover:bg-secondary-300/10',
                active: 'peer-[:active:hover]:bg-secondary-300/20',
                focus:
                  'peer-[:focus:hover]:bg-secondary-300/20 peer-focus:bg-secondary-300/20'
              },
              'tertiary-light': {
                hover: 'peer-hover:bg-tertiary-300/10',
                active: 'peer-[:active:hover]:bg-tertiary-300/20',
                focus:
                  'peer-[:focus:hover]:bg-tertiary-300/20 peer-focus:bg-tertiary-300/20'
              },
              'success-light': {
                hover: 'peer-hover:bg-success-300/10',
                active: 'peer-[:active:hover]:bg-success-300/20',
                focus:
                  'peer-[:focus:hover]:bg-success-300/20 peer-focus:bg-success-300/20'
              },
              'warning-light': {
                hover: 'peer-hover:bg-warning-300/10',
                active: 'peer-[:active:hover]:bg-warning-300/20',
                focus:
                  'peer-[:focus:hover]:bg-warning-300/20 peer-focus:bg-warning-300/20'
              },
              'error-light': {
                hover: 'peer-hover:bg-error-300/10',
                active: 'peer-[:active:hover]:bg-error-300/20',
                focus:
                  'peer-[:focus:hover]:bg-error-300/20 peer-focus:bg-error-300/20'
              },
              'surface-on': {
                hover: 'peer-hover:bg-surface-50/10',
                active: 'peer-[:active:hover]:bg-surface-50/20',
                focus:
                  'peer-[:focus:hover]:bg-surface-50/20 peer-focus:bg-surface-50/20'
              },
              'neutral-on': {
                hover: 'peer-hover:bg-neutral-50/10',
                active: 'peer-[:active:hover]:bg-neutral-50/20',
                focus:
                  'peer-[:focus:hover]:bg-neutral-50/20 peer-focus:bg-neutral-50/20'
              },
              'primary-on': {
                hover: 'peer-hover:bg-primary-50/10',
                active: 'peer-[:active:hover]:bg-primary-50/20',
                focus:
                  'peer-[:focus:hover]:bg-primary-50/20 peer-focus:bg-primary-50/20'
              },
              'secondary-on': {
                hover: 'peer-hover:bg-secondary-50/10',
                active: 'peer-[:active:hover]:bg-secondary-50/20',
                focus:
                  'peer-[:focus:hover]:bg-secondary-50/20 peer-focus:bg-secondary-50/20'
              },
              'tertiary-on': {
                hover: 'peer-hover:bg-tertiary-50/10',
                active: 'peer-[:active:hover]:bg-tertiary-50/20',
                focus:
                  'peer-[:focus:hover]:bg-tertiary-50/20 peer-focus:bg-tertiary-50/20'
              },
              'success-on': {
                hover: 'peer-hover:bg-success-50/10',
                active: 'peer-[:active:hover]:bg-success-50/20',
                focus:
                  'peer-[:focus:hover]:bg-success-50/20 peer-focus:bg-success-50/20'
              },
              'warning-on': {
                hover: 'peer-hover:bg-warning-50/10',
                active: 'peer-[:active:hover]:bg-warning-50/20',
                focus:
                  'peer-[:focus:hover]:bg-warning-50/20 peer-focus:bg-warning-50/20'
              },
              'error-on': {
                hover: 'peer-hover:bg-error-50/10',
                active: 'peer-[:active:hover]:bg-error-50/20',
                focus:
                  'peer-[:focus:hover]:bg-error-50/20 peer-focus:bg-error-50/20'
              }
            },
            dark: {
              surface: {
                hover: 'peer-hover:bg-surface-600/10',
                active: 'peer-[:active:hover]:bg-surface-600/20',
                focus:
                  'peer-[:focus:hover]:bg-surface-600/20 peer-focus:bg-surface-600/20'
              },
              neutral: {
                hover: 'peer-hover:bg-neutral-600/10',
                active: 'peer-[:active:hover]:bg-neutral-600/20',
                focus:
                  'peer-[:focus:hover]:bg-neutral-600/20 peer-focus:bg-neutral-600/20'
              },
              primary: {
                hover: 'peer-hover:bg-primary-600/10',
                active: 'peer-[:active:hover]:bg-primary-600/20',
                focus:
                  'peer-[:focus:hover]:bg-primary-600/20 peer-focus:bg-primary-600/20'
              },
              secondary: {
                hover: 'peer-hover:bg-secondary-600/10',
                active: 'peer-[:active:hover]:bg-secondary-600/20',
                focus:
                  'peer-[:focus:hover]:bg-secondary-600/20 peer-focus:bg-secondary-600/20'
              },
              tertiary: {
                hover: 'peer-hover:bg-tertiary-600/10',
                active: 'peer-[:active:hover]:bg-tertiary-600/20',
                focus:
                  'peer-[:focus:hover]:bg-tertiary-600/20 peer-focus:bg-tertiary-600/20'
              },
              success: {
                hover: 'peer-hover:bg-success-600/10',
                active: 'peer-[:active:hover]:bg-success-600/20',
                focus:
                  'peer-[:focus:hover]:bg-success-600/20 peer-focus:bg-success-600/20'
              },
              warning: {
                hover: 'peer-hover:bg-warning-600/10',
                active: 'peer-[:active:hover]:bg-warning-600/20',
                focus:
                  'peer-[:focus:hover]:bg-warning-600/20 peer-focus:bg-warning-600/20'
              },
              error: {
                hover: 'peer-hover:bg-error-600/10',
                active: 'peer-[:active:hover]:bg-error-600/20',
                focus:
                  'peer-[:focus:hover]:bg-error-600/20 peer-focus:bg-error-600/20'
              },
              'surface-light': {
                hover: 'peer-hover:bg-surface-400/10',
                active: 'peer-[:active:hover]:bg-surface-400/20',
                focus:
                  'peer-[:focus:hover]:bg-surface-400/20 peer-focus:bg-surface-400/20'
              },
              'neutral-light': {
                hover: 'peer-hover:bg-neutral-400/10',
                active: 'peer-[:active:hover]:bg-neutral-400/20',
                focus:
                  'peer-[:focus:hover]:bg-neutral-400/20 peer-focus:bg-neutral-400/20'
              },
              'primary-light': {
                hover: 'peer-hover:bg-primary-400/10',
                active: 'peer-[:active:hover]:bg-primary-400/20',
                focus:
                  'peer-[:focus:hover]:bg-primary-400/20 peer-focus:bg-primary-400/20'
              },
              'secondary-light': {
                hover: 'peer-hover:bg-secondary-400/10',
                active: 'peer-[:active:hover]:bg-secondary-400/20',
                focus:
                  'peer-[:focus:hover]:bg-secondary-400/20 peer-focus:bg-secondary-400/20'
              },
              'tertiary-light': {
                hover: 'peer-hover:bg-tertiary-400/10',
                active: 'peer-[:active:hover]:bg-tertiary-400/20',
                focus:
                  'peer-[:focus:hover]:bg-tertiary-400/20 peer-focus:bg-tertiary-400/20'
              },
              'success-light': {
                hover: 'peer-hover:bg-success-400/10',
                active: 'peer-[:active:hover]:bg-success-400/20',
                focus:
                  'peer-[:focus:hover]:bg-success-400/20 peer-focus:bg-success-400/20'
              },
              'warning-light': {
                hover: 'peer-hover:bg-warning-400/10',
                active: 'peer-[:active:hover]:bg-warning-400/20',
                focus:
                  'peer-[:focus:hover]:bg-warning-400/20 peer-focus:bg-warning-400/20'
              },
              'error-light': {
                hover: 'peer-hover:bg-error-400/10',
                active: 'peer-[:active:hover]:bg-error-400/20',
                focus:
                  'peer-[:focus:hover]:bg-error-400/20 peer-focus:bg-error-400/20'
              },
              'surface-on': {
                hover: 'peer-hover:bg-surface-100/10',
                active: 'peer-[:active:hover]:bg-surface-100/20',
                focus:
                  'peer-[:focus:hover]:bg-surface-100/20 peer-focus:bg-surface-100/20'
              },
              'neutral-on': {
                hover: 'peer-hover:bg-neutral-100/10',
                active: 'peer-[:active:hover]:bg-neutral-100/20',
                focus:
                  'peer-[:focus:hover]:bg-neutral-100/20 peer-focus:bg-neutral-100/20'
              },
              'primary-on': {
                hover: 'peer-hover:bg-primary-100/10',
                active: 'peer-[:active:hover]:bg-primary-100/20',
                focus:
                  'peer-[:focus:hover]:bg-primary-100/20 peer-focus:bg-primary-100/20'
              },
              'secondary-on': {
                hover: 'peer-hover:bg-secondary-100/10',
                active: 'peer-[:active:hover]:bg-secondary-100/20',
                focus:
                  'peer-[:focus:hover]:bg-secondary-100/20 peer-focus:bg-secondary-100/20'
              },
              'tertiary-on': {
                hover: 'peer-hover:bg-tertiary-100/10',
                active: 'peer-[:active:hover]:bg-tertiary-100/20',
                focus:
                  'peer-[:focus:hover]:bg-tertiary-100/20 peer-focus:bg-tertiary-100/20'
              },
              'success-on': {
                hover: 'peer-hover:bg-success-100/10',
                active: 'peer-[:active:hover]:bg-success-100/20',
                focus:
                  'peer-[:focus:hover]:bg-success-100/20 peer-focus:bg-success-100/20'
              },
              'warning-on': {
                hover: 'peer-hover:bg-warning-100/10',
                active: 'peer-[:active:hover]:bg-warning-100/20',
                focus:
                  'peer-[:focus:hover]:bg-warning-100/20 peer-focus:bg-warning-100/20'
              },
              'error-on': {
                hover: 'peer-hover:bg-error-100/10',
                active: 'peer-[:active:hover]:bg-error-100/20',
                focus:
                  'peer-[:focus:hover]:bg-error-100/20 peer-focus:bg-error-100/20'
              }
            }
          },
          stateful: {
            light: {
              surface: {
                hover: 'peer-[:checked:hover]:bg-surface-500/10',
                active: 'peer-[:checked:active:hover]:bg-surface-500/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-surface-500/20 peer-[:checked:focus]:bg-surface-500/20'
              },
              neutral: {
                hover: 'peer-[:checked:hover]:bg-neutral-500/10',
                active: 'peer-[:checked:active:hover]:bg-neutral-500/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-neutral-500/20 peer-[:checked:focus]:bg-neutral-500/20'
              },
              primary: {
                hover: 'peer-[:checked:hover]:bg-primary-500/10',
                active: 'peer-[:checked:active:hover]:bg-primary-500/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-primary-500/20 peer-[:checked:focus]:bg-primary-500/20'
              },
              secondary: {
                hover: 'peer-[:checked:hover]:bg-secondary-500/10',
                active: 'peer-[:checked:active:hover]:bg-secondary-500/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-secondary-500/20 peer-[:checked:focus]:bg-secondary-500/20'
              },
              tertiary: {
                hover: 'peer-[:checked:hover]:bg-tertiary-500/10',
                active: 'peer-[:checked:active:hover]:bg-tertiary-500/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-tertiary-500/20 peer-[:checked:focus]:bg-tertiary-500/20'
              },
              success: {
                hover: 'peer-[:checked:hover]:bg-success-500/10',
                active: 'peer-[:checked:active:hover]:bg-success-500/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-success-500/20 peer-[:checked:focus]:bg-success-500/20'
              },
              warning: {
                hover: 'peer-[:checked:hover]:bg-warning-500/10',
                active: 'peer-[:checked:active:hover]:bg-warning-500/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-warning-500/20 peer-[:checked:focus]:bg-warning-500/20'
              },
              error: {
                hover: 'peer-[:checked:hover]:bg-error-500/10',
                active: 'peer-[:checked:active:hover]:bg-error-500/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-error-500/20 peer-[:checked:focus]:bg-error-500/20'
              },
              'surface-light': {
                hover: 'peer-[:checked:hover]:bg-surface-300/10',
                active: 'peer-[:checked:active:hover]:bg-surface-300/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-surface-300/20 peer-[:checked:focus]:bg-surface-300/20'
              },
              'neutral-light': {
                hover: 'peer-[:checked:hover]:bg-neutral-300/10',
                active: 'peer-[:checked:active:hover]:bg-neutral-300/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-neutral-300/20 peer-[:checked:focus]:bg-neutral-300/20'
              },
              'primary-light': {
                hover: 'peer-[:checked:hover]:bg-primary-300/10',
                active: 'peer-[:checked:active:hover]:bg-primary-300/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-primary-300/20 peer-[:checked:focus]:bg-primary-300/20'
              },
              'secondary-light': {
                hover: 'peer-[:checked:hover]:bg-secondary-300/10',
                active: 'peer-[:checked:active:hover]:bg-secondary-300/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-secondary-300/20 peer-[:checked:focus]:bg-secondary-300/20'
              },
              'tertiary-light': {
                hover: 'peer-[:checked:hover]:bg-tertiary-300/10',
                active: 'peer-[:checked:active:hover]:bg-tertiary-300/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-tertiary-300/20 peer-[:checked:focus]:bg-tertiary-300/20'
              },
              'success-light': {
                hover: 'peer-[:checked:hover]:bg-success-300/10',
                active: 'peer-[:checked:active:hover]:bg-success-300/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-success-300/20 peer-[:checked:focus]:bg-success-300/20'
              },
              'warning-light': {
                hover: 'peer-[:checked:hover]:bg-warning-300/10',
                active: 'peer-[:checked:active:hover]:bg-warning-300/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-warning-300/20 peer-[:checked:focus]:bg-warning-300/20'
              },
              'error-light': {
                hover: 'peer-[:checked:hover]:bg-error-300/10',
                active: 'peer-[:checked:active:hover]:bg-error-300/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-error-300/20 peer-[:checked:focus]:bg-error-300/20'
              },
              'surface-on': {
                hover: 'peer-[:checked:hover]:bg-surface-50/10',
                active: 'peer-[:checked:active:hover]:bg-surface-50/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-surface-50/20 peer-[:checked:focus]:bg-surface-50/20'
              },
              'neutral-on': {
                hover: 'peer-[:checked:hover]:bg-neutral-50/10',
                active: 'peer-[:checked:active:hover]:bg-neutral-50/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-neutral-50/20 peer-[:checked:focus]:bg-neutral-50/20'
              },
              'primary-on': {
                hover: 'peer-[:checked:hover]:bg-primary-50/10',
                active: 'peer-[:checked:active:hover]:bg-primary-50/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-primary-50/20 peer-[:checked:focus]:bg-primary-50/20'
              },
              'secondary-on': {
                hover: 'peer-[:checked:hover]:bg-secondary-50/10',
                active: 'peer-[:checked:active:hover]:bg-secondary-50/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-secondary-50/20 peer-[:checked:focus]:bg-secondary-50/20'
              },
              'tertiary-on': {
                hover: 'peer-[:checked:hover]:bg-tertiary-50/10',
                active: 'peer-[:checked:active:hover]:bg-tertiary-50/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-tertiary-50/20 peer-[:checked:focus]:bg-tertiary-50/20'
              },
              'success-on': {
                hover: 'peer-[:checked:hover]:bg-success-50/10',
                active: 'peer-[:checked:active:hover]:bg-success-50/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-success-50/20 peer-[:checked:focus]:bg-success-50/20'
              },
              'warning-on': {
                hover: 'peer-[:checked:hover]:bg-warning-50/10',
                active: 'peer-[:checked:active:hover]:bg-warning-50/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-warning-50/20 peer-[:checked:focus]:bg-warning-50/20'
              },
              'error-on': {
                hover: 'peer-[:checked:hover]:bg-error-50/10',
                active: 'peer-[:checked:active:hover]:bg-error-50/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-error-50/20 peer-[:checked:focus]:bg-error-50/20'
              }
            },
            dark: {
              surface: {
                hover: 'peer-[:checked:hover]:bg-surface-600/10',
                active: 'peer-[:checked:active:hover]:bg-surface-600/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-surface-600/20 peer-[:checked:focus]:bg-surface-600/20'
              },
              neutral: {
                hover: 'peer-[:checked:hover]:bg-neutral-600/10',
                active: 'peer-[:checked:active:hover]:bg-neutral-600/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-neutral-600/20 peer-[:checked:focus]:bg-neutral-600/20'
              },
              primary: {
                hover: 'peer-[:checked:hover]:bg-primary-600/10',
                active: 'peer-[:checked:active:hover]:bg-primary-600/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-primary-600/20 peer-[:checked:focus]:bg-primary-600/20'
              },
              secondary: {
                hover: 'peer-[:checked:hover]:bg-secondary-600/10',
                active: 'peer-[:checked:active:hover]:bg-secondary-600/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-secondary-600/20 peer-[:checked:focus]:bg-secondary-600/20'
              },
              tertiary: {
                hover: 'peer-[:checked:hover]:bg-tertiary-600/10',
                active: 'peer-[:checked:active:hover]:bg-tertiary-600/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-tertiary-600/20 peer-[:checked:focus]:bg-tertiary-600/20'
              },
              success: {
                hover: 'peer-[:checked:hover]:bg-success-600/10',
                active: 'peer-[:checked:active:hover]:bg-success-600/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-success-600/20 peer-[:checked:focus]:bg-success-600/20'
              },
              warning: {
                hover: 'peer-[:checked:hover]:bg-warning-600/10',
                active: 'peer-[:checked:active:hover]:bg-warning-600/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-warning-600/20 peer-[:checked:focus]:bg-warning-600/20'
              },
              error: {
                hover: 'peer-[:checked:hover]:bg-error-600/10',
                active: 'peer-[:checked:active:hover]:bg-error-600/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-error-600/20 peer-[:checked:focus]:bg-error-600/20'
              },
              'surface-light': {
                hover: 'peer-[:checked:hover]:bg-surface-400/10',
                active: 'peer-[:checked:active:hover]:bg-surface-400/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-surface-400/20 peer-[:checked:focus]:bg-surface-400/20'
              },
              'neutral-light': {
                hover: 'peer-[:checked:hover]:bg-neutral-400/10',
                active: 'peer-[:checked:active:hover]:bg-neutral-400/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-neutral-400/20 peer-[:checked:focus]:bg-neutral-400/20'
              },
              'primary-light': {
                hover: 'peer-[:checked:hover]:bg-primary-400/10',
                active: 'peer-[:checked:active:hover]:bg-primary-400/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-primary-400/20 peer-[:checked:focus]:bg-primary-400/20'
              },
              'secondary-light': {
                hover: 'peer-[:checked:hover]:bg-secondary-400/10',
                active: 'peer-[:checked:active:hover]:bg-secondary-400/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-secondary-400/20 peer-[:checked:focus]:bg-secondary-400/20'
              },
              'tertiary-light': {
                hover: 'peer-[:checked:hover]:bg-tertiary-400/10',
                active: 'peer-[:checked:active:hover]:bg-tertiary-400/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-tertiary-400/20 peer-[:checked:focus]:bg-tertiary-400/20'
              },
              'success-light': {
                hover: 'peer-[:checked:hover]:bg-success-400/10',
                active: 'peer-[:checked:active:hover]:bg-success-400/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-success-400/20 peer-[:checked:focus]:bg-success-400/20'
              },
              'warning-light': {
                hover: 'peer-[:checked:hover]:bg-warning-400/10',
                active: 'peer-[:checked:active:hover]:bg-warning-400/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-warning-400/20 peer-[:checked:focus]:bg-warning-400/20'
              },
              'error-light': {
                hover: 'peer-[:checked:hover]:bg-error-400/10',
                active: 'peer-[:checked:active:hover]:bg-error-400/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-error-400/20 peer-[:checked:focus]:bg-error-400/20'
              },
              'surface-on': {
                hover: 'peer-[:checked:hover]:bg-surface-100/10',
                active: 'peer-[:checked:active:hover]:bg-surface-100/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-surface-100/20 peer-[:checked:focus]:bg-surface-100/20'
              },
              'neutral-on': {
                hover: 'peer-[:checked:hover]:bg-neutral-100/10',
                active: 'peer-[:checked:active:hover]:bg-neutral-100/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-neutral-100/20 peer-[:checked:focus]:bg-neutral-100/20'
              },
              'primary-on': {
                hover: 'peer-[:checked:hover]:bg-primary-100/10',
                active: 'peer-[:checked:active:hover]:bg-primary-100/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-primary-100/20 peer-[:checked:focus]:bg-primary-100/20'
              },
              'secondary-on': {
                hover: 'peer-[:checked:hover]:bg-secondary-100/10',
                active: 'peer-[:checked:active:hover]:bg-secondary-100/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-secondary-100/20 peer-[:checked:focus]:bg-secondary-100/20'
              },
              'tertiary-on': {
                hover: 'peer-[:checked:hover]:bg-tertiary-100/10',
                active: 'peer-[:checked:active:hover]:bg-tertiary-100/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-tertiary-100/20 peer-[:checked:focus]:bg-tertiary-100/20'
              },
              'success-on': {
                hover: 'peer-[:checked:hover]:bg-success-100/10',
                active: 'peer-[:checked:active:hover]:bg-success-100/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-success-100/20 peer-[:checked:focus]:bg-success-100/20'
              },
              'warning-on': {
                hover: 'peer-[:checked:hover]:bg-warning-100/10',
                active: 'peer-[:checked:active:hover]:bg-warning-100/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-warning-100/20 peer-[:checked:focus]:bg-warning-100/20'
              },
              'error-on': {
                hover: 'peer-[:checked:hover]:bg-error-100/10',
                active: 'peer-[:checked:active:hover]:bg-error-100/20',
                focus:
                  'peer-[:checked:focus:hover]:bg-error-100/20 peer-[:checked:focus]:bg-error-100/20'
              }
            }
          }
        },
        inner: {
          stateless: {
            light: {
              surface: {
                hover: '[*:hover>&]:bg-surface-500/10',
                active: '[*:active:hover>&]:bg-surface-500/20',
                focus:
                  '[*:focus:hover>&]:bg-surface-500/20 [*:focus>&]:bg-surface-500/20'
              },
              neutral: {
                hover: '[*:hover>&]:bg-neutral-500/10',
                active: '[*:active:hover>&]:bg-neutral-500/20',
                focus:
                  '[*:focus:hover>&]:bg-neutral-500/20 [*:focus>&]:bg-neutral-500/20'
              },
              primary: {
                hover: '[*:hover>&]:bg-primary-500/10',
                active: '[*:active:hover>&]:bg-primary-500/20',
                focus:
                  '[*:focus:hover>&]:bg-primary-500/20 [*:focus>&]:bg-primary-500/20'
              },
              secondary: {
                hover: '[*:hover>&]:bg-secondary-500/10',
                active: '[*:active:hover>&]:bg-secondary-500/20',
                focus:
                  '[*:focus:hover>&]:bg-secondary-500/20 [*:focus>&]:bg-secondary-500/20'
              },
              tertiary: {
                hover: '[*:hover>&]:bg-tertiary-500/10',
                active: '[*:active:hover>&]:bg-tertiary-500/20',
                focus:
                  '[*:focus:hover>&]:bg-tertiary-500/20 [*:focus>&]:bg-tertiary-500/20'
              },
              success: {
                hover: '[*:hover>&]:bg-success-500/10',
                active: '[*:active:hover>&]:bg-success-500/20',
                focus:
                  '[*:focus:hover>&]:bg-success-500/20 [*:focus>&]:bg-success-500/20'
              },
              warning: {
                hover: '[*:hover>&]:bg-warning-500/10',
                active: '[*:active:hover>&]:bg-warning-500/20',
                focus:
                  '[*:focus:hover>&]:bg-warning-500/20 [*:focus>&]:bg-warning-500/20'
              },
              error: {
                hover: '[*:hover>&]:bg-error-500/10',
                active: '[*:active:hover>&]:bg-error-500/20',
                focus:
                  '[*:focus:hover>&]:bg-error-500/20 [*:focus>&]:bg-error-500/20'
              },
              'neutral-light': {
                hover: '[*:hover>&]:bg-neutral-300/10',
                active: '[*:active:hover>&]:bg-neutral-300/20',
                focus:
                  '[*:focus:hover>&]:bg-neutral-300/20 [*:focus>&]:bg-neutral-300/20'
              },
              'primary-light': {
                hover: '[*:hover>&]:bg-primary-300/10',
                active: '[*:active:hover>&]:bg-primary-300/20',
                focus:
                  '[*:focus:hover>&]:bg-primary-300/20 [*:focus>&]:bg-primary-300/20'
              },
              'secondary-light': {
                hover: '[*:hover>&]:bg-secondary-300/10',
                active: '[*:active:hover>&]:bg-secondary-300/20',
                focus:
                  '[*:focus:hover>&]:bg-secondary-300/20 [*:focus>&]:bg-secondary-300/20'
              },
              'tertiary-light': {
                hover: '[*:hover>&]:bg-tertiary-300/10',
                active: '[*:active:hover>&]:bg-tertiary-300/20',
                focus:
                  '[*:focus:hover>&]:bg-tertiary-300/20 [*:focus>&]:bg-tertiary-300/20'
              },
              'success-light': {
                hover: '[*:hover>&]:bg-success-300/10',
                active: '[*:active:hover>&]:bg-success-300/20',
                focus:
                  '[*:focus:hover>&]:bg-success-300/20 [*:focus>&]:bg-success-300/20'
              },
              'warning-light': {
                hover: '[*:hover>&]:bg-warning-300/10',
                active: '[*:active:hover>&]:bg-warning-300/20',
                focus:
                  '[*:focus:hover>&]:bg-warning-300/20 [*:focus>&]:bg-warning-300/20'
              },
              'error-light': {
                hover: '[*:hover>&]:bg-error-300/10',
                active: '[*:active:hover>&]:bg-error-300/20',
                focus:
                  '[*:focus:hover>&]:bg-error-300/20 [*:focus>&]:bg-error-300/20'
              },
              'neutral-on': {
                hover: '[*:hover>&]:bg-neutral-50/10',
                active: '[*:active:hover>&]:bg-neutral-50/20',
                focus:
                  '[*:focus:hover>&]:bg-neutral-50/20 [*:focus>&]:bg-neutral-50/20'
              },
              'primary-on': {
                hover: '[*:hover>&]:bg-primary-50/10',
                active: '[*:active:hover>&]:bg-primary-50/20',
                focus:
                  '[*:focus:hover>&]:bg-primary-50/20 [*:focus>&]:bg-primary-50/20'
              },
              'secondary-on': {
                hover: '[*:hover>&]:bg-secondary-50/10',
                active: '[*:active:hover>&]:bg-secondary-50/20',
                focus:
                  '[*:focus:hover>&]:bg-secondary-50/20 [*:focus>&]:bg-secondary-50/20'
              },
              'tertiary-on': {
                hover: '[*:hover>&]:bg-tertiary-50/10',
                active: '[*:active:hover>&]:bg-tertiary-50/20',
                focus:
                  '[*:focus:hover>&]:bg-tertiary-50/20 [*:focus>&]:bg-tertiary-50/20'
              },
              'success-on': {
                hover: '[*:hover>&]:bg-success-50/10',
                active: '[*:active:hover>&]:bg-success-50/20',
                focus:
                  '[*:focus:hover>&]:bg-success-50/20 [*:focus>&]:bg-success-50/20'
              },
              'warning-on': {
                hover: '[*:hover>&]:bg-warning-50/10',
                active: '[*:active:hover>&]:bg-warning-50/20',
                focus:
                  '[*:focus:hover>&]:bg-warning-50/20 [*:focus>&]:bg-warning-50/20'
              },
              'error-on': {
                hover: '[*:hover>&]:bg-error-50/10',
                active: '[*:active:hover>&]:bg-error-50/20',
                focus:
                  '[*:focus:hover>&]:bg-error-50/20 [*:focus>&]:bg-error-50/20'
              }
            },
            dark: {
              surface: {
                hover: '[*:hover>&]:bg-surface-600/10',
                active: '[*:active:hover>&]:bg-surface-600/20',
                focus:
                  '[*:focus:hover>&]:bg-surface-600/20 [*:focus>&]:bg-surface-600/20'
              },
              neutral: {
                hover: '[*:hover>&]:bg-neutral-600/10',
                active: '[*:active:hover>&]:bg-neutral-600/20',
                focus:
                  '[*:focus:hover>&]:bg-neutral-600/20 [*:focus>&]:bg-neutral-600/20'
              },
              primary: {
                hover: '[*:hover>&]:bg-primary-600/10',
                active: '[*:active:hover>&]:bg-primary-600/20',
                focus:
                  '[*:focus:hover>&]:bg-primary-600/20 [*:focus>&]:bg-primary-600/20'
              },
              secondary: {
                hover: '[*:hover>&]:bg-secondary-600/10',
                active: '[*:active:hover>&]:bg-secondary-600/20',
                focus:
                  '[*:focus:hover>&]:bg-secondary-600/20 [*:focus>&]:bg-secondary-600/20'
              },
              tertiary: {
                hover: '[*:hover>&]:bg-tertiary-600/10',
                active: '[*:active:hover>&]:bg-tertiary-600/20',
                focus:
                  '[*:focus:hover>&]:bg-tertiary-600/20 [*:focus>&]:bg-tertiary-600/20'
              },
              success: {
                hover: '[*:hover>&]:bg-success-600/10',
                active: '[*:active:hover>&]:bg-success-600/20',
                focus:
                  '[*:focus:hover>&]:bg-success-600/20 [*:focus>&]:bg-success-600/20'
              },
              warning: {
                hover: '[*:hover>&]:bg-warning-600/10',
                active: '[*:active:hover>&]:bg-warning-600/20',
                focus:
                  '[*:focus:hover>&]:bg-warning-600/20 [*:focus>&]:bg-warning-600/20'
              },
              error: {
                hover: '[*:hover>&]:bg-error-600/10',
                active: '[*:active:hover>&]:bg-error-600/20',
                focus:
                  '[*:focus:hover>&]:bg-error-600/20 [*:focus>&]:bg-error-600/20'
              },
              'neutral-light': {
                hover: '[*:hover>&]:bg-neutral-400/10',
                active: '[*:active:hover>&]:bg-neutral-400/20',
                focus:
                  '[*:focus:hover>&]:bg-neutral-400/20 [*:focus>&]:bg-neutral-400/20'
              },
              'primary-light': {
                hover: '[*:hover>&]:bg-primary-400/10',
                active: '[*:active:hover>&]:bg-primary-400/20',
                focus:
                  '[*:focus:hover>&]:bg-primary-400/20 [*:focus>&]:bg-primary-400/20'
              },
              'secondary-light': {
                hover: '[*:hover>&]:bg-secondary-400/10',
                active: '[*:active:hover>&]:bg-secondary-400/20',
                focus:
                  '[*:focus:hover>&]:bg-secondary-400/20 [*:focus>&]:bg-secondary-400/20'
              },
              'tertiary-light': {
                hover: '[*:hover>&]:bg-tertiary-400/10',
                active: '[*:active:hover>&]:bg-tertiary-400/20',
                focus:
                  '[*:focus:hover>&]:bg-tertiary-400/20 [*:focus>&]:bg-tertiary-400/20'
              },
              'success-light': {
                hover: '[*:hover>&]:bg-success-400/10',
                active: '[*:active:hover>&]:bg-success-400/20',
                focus:
                  '[*:focus:hover>&]:bg-success-400/20 [*:focus>&]:bg-success-400/20'
              },
              'warning-light': {
                hover: '[*:hover>&]:bg-warning-400/10',
                active: '[*:active:hover>&]:bg-warning-400/20',
                focus:
                  '[*:focus:hover>&]:bg-warning-400/20 [*:focus>&]:bg-warning-400/20'
              },
              'error-light': {
                hover: '[*:hover>&]:bg-error-400/10',
                active: '[*:active:hover>&]:bg-error-400/20',
                focus:
                  '[*:focus:hover>&]:bg-error-400/20 [*:focus>&]:bg-error-400/20'
              },
              'neutral-on': {
                hover: '[*:hover>&]:bg-neutral-100/10',
                active: '[*:active:hover>&]:bg-neutral-100/20',
                focus:
                  '[*:focus:hover>&]:bg-neutral-100/20 [*:focus>&]:bg-neutral-100/20'
              },
              'primary-on': {
                hover: '[*:hover>&]:bg-primary-100/10',
                active: '[*:active:hover>&]:bg-primary-100/20',
                focus:
                  '[*:focus:hover>&]:bg-primary-100/20 [*:focus>&]:bg-primary-100/20'
              },
              'secondary-on': {
                hover: '[*:hover>&]:bg-secondary-100/10',
                active: '[*:active:hover>&]:bg-secondary-100/20',
                focus:
                  '[*:focus:hover>&]:bg-secondary-100/20 [*:focus>&]:bg-secondary-100/20'
              },
              'tertiary-on': {
                hover: '[*:hover>&]:bg-tertiary-100/10',
                active: '[*:active:hover>&]:bg-tertiary-100/20',
                focus:
                  '[*:focus:hover>&]:bg-tertiary-100/20 [*:focus>&]:bg-tertiary-100/20'
              },
              'success-on': {
                hover: '[*:hover>&]:bg-success-100/10',
                active: '[*:active:hover>&]:bg-success-100/20',
                focus:
                  '[*:focus:hover>&]:bg-success-100/20 [*:focus>&]:bg-success-100/20'
              },
              'warning-on': {
                hover: '[*:hover>&]:bg-warning-100/10',
                active: '[*:active:hover>&]:bg-warning-100/20',
                focus:
                  '[*:focus:hover>&]:bg-warning-100/20 [*:focus>&]:bg-warning-100/20'
              },
              'error-on': {
                hover: '[*:hover>&]:bg-error-100/10',
                active: '[*:active:hover>&]:bg-error-100/20',
                focus:
                  '[*:focus:hover>&]:bg-error-100/20 [*:focus>&]:bg-error-100/20'
              }
            }
          },
          stateful: {
            light: {
              surface: {
                hover: '[*.checked:hover>&]:bg-surface-500/10',
                active: '[*.checked:active:hover>&]:bg-surface-500/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-surface-500/20 [*.checked:focus>&]:bg-surface-500/20'
              },
              neutral: {
                hover: '[*.checked:hover>&]:bg-neutral-500/10',
                active: '[*.checked:active:hover>&]:bg-neutral-500/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-neutral-500/20 [*.checked:focus>&]:bg-neutral-500/20'
              },
              primary: {
                hover: '[*.checked:hover>&]:bg-primary-500/10',
                active: '[*.checked:active:hover>&]:bg-primary-500/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-primary-500/20 [*.checked:focus>&]:bg-primary-500/20'
              },
              secondary: {
                hover: '[*.checked:hover>&]:bg-secondary-500/10',
                active: '[*.checked:active:hover>&]:bg-secondary-500/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-secondary-500/20 [*.checked:focus>&]:bg-secondary-500/20'
              },
              tertiary: {
                hover: '[*.checked:hover>&]:bg-tertiary-500/10',
                active: '[*.checked:active:hover>&]:bg-tertiary-500/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-tertiary-500/20 [*.checked:focus>&]:bg-tertiary-500/20'
              },
              success: {
                hover: '[*.checked:hover>&]:bg-success-500/10',
                active: '[*.checked:active:hover>&]:bg-success-500/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-success-500/20 [*.checked:focus>&]:bg-success-500/20'
              },
              warning: {
                hover: '[*.checked:hover>&]:bg-warning-500/10',
                active: '[*.checked:active:hover>&]:bg-warning-500/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-warning-500/20 [*.checked:focus>&]:bg-warning-500/20'
              },
              error: {
                hover: '[*.checked:hover>&]:bg-error-500/10',
                active: '[*.checked:active:hover>&]:bg-error-500/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-error-500/20 [*.checked:focus>&]:bg-error-500/20'
              },
              'neutral-light': {
                hover: '[*.checked:hover>&]:bg-neutral-300/10',
                active: '[*.checked:active:hover>&]:bg-neutral-300/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-neutral-300/20 [*.checked:focus>&]:bg-neutral-300/20'
              },
              'primary-light': {
                hover: '[*.checked:hover>&]:bg-primary-300/10',
                active: '[*.checked:active:hover>&]:bg-primary-300/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-primary-300/20 [*.checked:focus>&]:bg-primary-300/20'
              },
              'secondary-light': {
                hover: '[*.checked:hover>&]:bg-secondary-300/10',
                active: '[*.checked:active:hover>&]:bg-secondary-300/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-secondary-300/20 [*.checked:focus>&]:bg-secondary-300/20'
              },
              'tertiary-light': {
                hover: '[*.checked:hover>&]:bg-tertiary-300/10',
                active: '[*.checked:active:hover>&]:bg-tertiary-300/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-tertiary-300/20 [*.checked:focus>&]:bg-tertiary-300/20'
              },
              'success-light': {
                hover: '[*.checked:hover>&]:bg-success-300/10',
                active: '[*.checked:active:hover>&]:bg-success-300/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-success-300/20 [*.checked:focus>&]:bg-success-300/20'
              },
              'warning-light': {
                hover: '[*.checked:hover>&]:bg-warning-300/10',
                active: '[*.checked:active:hover>&]:bg-warning-300/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-warning-300/20 [*.checked:focus>&]:bg-warning-300/20'
              },
              'error-light': {
                hover: '[*.checked:hover>&]:bg-error-300/10',
                active: '[*.checked:active:hover>&]:bg-error-300/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-error-300/20 [*.checked:focus>&]:bg-error-300/20'
              },
              'neutral-on': {
                hover: '[*.checked:hover>&]:bg-neutral-50/10',
                active: '[*.checked:active:hover>&]:bg-neutral-50/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-neutral-50/20 [*.checked:focus>&]:bg-neutral-50/20'
              },
              'primary-on': {
                hover: '[*.checked:hover>&]:bg-primary-50/10',
                active: '[*.checked:active:hover>&]:bg-primary-50/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-primary-50/20 [*.checked:focus>&]:bg-primary-50/20'
              },
              'secondary-on': {
                hover: '[*.checked:hover>&]:bg-secondary-50/10',
                active: '[*.checked:active:hover>&]:bg-secondary-50/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-secondary-50/20 [*.checked:focus>&]:bg-secondary-50/20'
              },
              'tertiary-on': {
                hover: '[*.checked:hover>&]:bg-tertiary-50/10',
                active: '[*.checked:active:hover>&]:bg-tertiary-50/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-tertiary-50/20 [*.checked:focus>&]:bg-tertiary-50/20'
              },
              'success-on': {
                hover: '[*.checked:hover>&]:bg-success-50/10',
                active: '[*.checked:active:hover>&]:bg-success-50/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-success-50/20 [*.checked:focus>&]:bg-success-50/20'
              },
              'warning-on': {
                hover: '[*.checked:hover>&]:bg-warning-50/10',
                active: '[*.checked:active:hover>&]:bg-warning-50/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-warning-50/20 [*.checked:focus>&]:bg-warning-50/20'
              },
              'error-on': {
                hover: '[*.checked:hover>&]:bg-error-50/10',
                active: '[*.checked:active:hover>&]:bg-error-50/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-error-50/20 [*.checked:focus>&]:bg-error-50/20'
              }
            },
            dark: {
              surface: {
                hover: '[*.checked:hover>&]:bg-surface-600/10',
                active: '[*.checked:active:hover>&]:bg-surface-600/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-surface-600/20 [*.checked:focus>&]:bg-surface-600/20'
              },
              neutral: {
                hover: '[*.checked:hover>&]:bg-neutral-600/10',
                active: '[*.checked:active:hover>&]:bg-neutral-600/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-neutral-600/20 [*.checked:focus>&]:bg-neutral-600/20'
              },
              primary: {
                hover: '[*.checked:hover>&]:bg-primary-600/10',
                active: '[*.checked:active:hover>&]:bg-primary-600/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-primary-600/20 [*.checked:focus>&]:bg-primary-600/20'
              },
              secondary: {
                hover: '[*.checked:hover>&]:bg-secondary-600/10',
                active: '[*.checked:active:hover>&]:bg-secondary-600/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-secondary-600/20 [*.checked:focus>&]:bg-secondary-600/20'
              },
              tertiary: {
                hover: '[*.checked:hover>&]:bg-tertiary-600/10',
                active: '[*.checked:active:hover>&]:bg-tertiary-600/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-tertiary-600/20 [*.checked:focus>&]:bg-tertiary-600/20'
              },
              success: {
                hover: '[*.checked:hover>&]:bg-success-600/10',
                active: '[*.checked:active:hover>&]:bg-success-600/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-success-600/20 [*.checked:focus>&]:bg-success-600/20'
              },
              warning: {
                hover: '[*.checked:hover>&]:bg-warning-600/10',
                active: '[*.checked:active:hover>&]:bg-warning-600/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-warning-600/20 [*.checked:focus>&]:bg-warning-600/20'
              },
              error: {
                hover: '[*.checked:hover>&]:bg-error-600/10',
                active: '[*.checked:active:hover>&]:bg-error-600/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-error-600/20 [*.checked:focus>&]:bg-error-600/20'
              },
              'neutral-light': {
                hover: '[*.checked:hover>&]:bg-neutral-400/10',
                active: '[*.checked:active:hover>&]:bg-neutral-400/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-neutral-400/20 [*.checked:focus>&]:bg-neutral-400/20'
              },
              'primary-light': {
                hover: '[*.checked:hover>&]:bg-primary-400/10',
                active: '[*.checked:active:hover>&]:bg-primary-400/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-primary-400/20 [*.checked:focus>&]:bg-primary-400/20'
              },
              'secondary-light': {
                hover: '[*.checked:hover>&]:bg-secondary-400/10',
                active: '[*.checked:active:hover>&]:bg-secondary-400/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-secondary-400/20 [*.checked:focus>&]:bg-secondary-400/20'
              },
              'tertiary-light': {
                hover: '[*.checked:hover>&]:bg-tertiary-400/10',
                active: '[*.checked:active:hover>&]:bg-tertiary-400/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-tertiary-400/20 [*.checked:focus>&]:bg-tertiary-400/20'
              },
              'success-light': {
                hover: '[*.checked:hover>&]:bg-success-400/10',
                active: '[*.checked:active:hover>&]:bg-success-400/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-success-400/20 [*.checked:focus>&]:bg-success-400/20'
              },
              'warning-light': {
                hover: '[*.checked:hover>&]:bg-warning-400/10',
                active: '[*.checked:active:hover>&]:bg-warning-400/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-warning-400/20 [*.checked:focus>&]:bg-warning-400/20'
              },
              'error-light': {
                hover: '[*.checked:hover>&]:bg-error-400/10',
                active: '[*.checked:active:hover>&]:bg-error-400/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-error-400/20 [*.checked:focus>&]:bg-error-400/20'
              },
              'neutral-on': {
                hover: '[*.checked:hover>&]:bg-neutral-100/10',
                active: '[*.checked:active:hover>&]:bg-neutral-100/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-neutral-100/20 [*.checked:focus>&]:bg-neutral-100/20'
              },
              'primary-on': {
                hover: '[*.checked:hover>&]:bg-primary-100/10',
                active: '[*.checked:active:hover>&]:bg-primary-100/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-primary-100/20 [*.checked:focus>&]:bg-primary-100/20'
              },
              'secondary-on': {
                hover: '[*.checked:hover>&]:bg-secondary-100/10',
                active: '[*.checked:active:hover>&]:bg-secondary-100/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-secondary-100/20 [*.checked:focus>&]:bg-secondary-100/20'
              },
              'tertiary-on': {
                hover: '[*.checked:hover>&]:bg-tertiary-100/10',
                active: '[*.checked:active:hover>&]:bg-tertiary-100/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-tertiary-100/20 [*.checked:focus>&]:bg-tertiary-100/20'
              },
              'success-on': {
                hover: '[*.checked:hover>&]:bg-success-100/10',
                active: '[*.checked:active:hover>&]:bg-success-100/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-success-100/20 [*.checked:focus>&]:bg-success-100/20'
              },
              'warning-on': {
                hover: '[*.checked:hover>&]:bg-warning-100/10',
                active: '[*.checked:active:hover>&]:bg-warning-100/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-warning-100/20 [*.checked:focus>&]:bg-warning-100/20'
              },
              'error-on': {
                hover: '[*.checked:hover>&]:bg-error-100/10',
                active: '[*.checked:active:hover>&]:bg-error-100/20',
                focus:
                  '[*.checked:focus:hover>&]:bg-error-100/20 [*.checked:focus>&]:bg-error-100/20'
              }
            }
          }
        }
      }
    }
  }
};
