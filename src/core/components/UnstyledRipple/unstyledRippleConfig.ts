import type {
  CSSProps,
  InnerScale,
  Theme,
  CSSStyles,
  ComponentConfig
} from '../../types';
import type { UnstyledRippleConfigProps } from './UnstyledRipple.types';

type ColorType = 'stateless' | 'stateful';

type Styles = {
  styles: {
    root: {
      default: CSSProps;
      color: Record<InnerScale, Record<ColorType, Record<Theme, CSSStyles>>>;
    };
  };
};

export const unstyledRippleConfig: ComponentConfig<UnstyledRippleConfigProps> &
  Styles = {
  props: {
    stateful: false,
    variant: 'solid',
    scale: 'normal',
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
        transition: 'transition-colors',
        transitionDuration: 'duration-150',
        transitionTimingFunction: 'ease-in-out',
        pointerEvents: 'pointer-events-none'
      },
      color: {
        normal: {
          stateless: {
            light: {
              surface: {
                hover: 'peer-hover:bg-surface-500/20',
                active: 'peer-[:active:hover]:bg-surface-500/25',
                focus:
                  'peer-[:focus:hover]:bg-surface-500/25 peer-focus:bg-surface-500/25'
              },
              neutral: {
                hover: 'peer-hover:bg-neutral-500/20',
                active: 'peer-[:active:hover]:bg-neutral-500/25',
                focus:
                  'peer-[:focus:hover]:bg-neutral-500/25 peer-focus:bg-neutral-500/25'
              },
              primary: {
                hover: 'peer-hover:bg-primary-500/20',
                active: 'peer-[:active:hover]:bg-primary-500/25',
                focus:
                  'peer-[:focus:hover]:bg-primary-500/25 peer-focus:bg-primary-500/25'
              },
              secondary: {
                hover: 'peer-hover:bg-secondary-500/20',
                active: 'peer-[:active:hover]:bg-secondary-500/25',
                focus:
                  'peer-[:focus:hover]:bg-secondary-500/25 peer-focus:bg-secondary-500/25'
              },
              tertiary: {
                hover: 'peer-hover:bg-tertiary-500/20',
                active: 'peer-[:active:hover]:bg-tertiary-500/25',
                focus:
                  'peer-[:focus:hover]:bg-tertiary-500/25 peer-focus:bg-tertiary-500/25'
              },
              success: {
                hover: 'peer-hover:bg-success-500/20',
                active: 'peer-[:active:hover]:bg-success-500/25',
                focus:
                  'peer-[:focus:hover]:bg-success-500/25 peer-focus:bg-success-500/25'
              },
              warning: {
                hover: 'peer-hover:bg-warning-500/20',
                active: 'peer-[:active:hover]:bg-warning-500/25',
                focus:
                  'peer-[:focus:hover]:bg-warning-500/25 peer-focus:bg-warning-500/25'
              },
              error: {
                hover: 'peer-hover:bg-error-500/20',
                active: 'peer-[:active:hover]:bg-error-500/25',
                focus:
                  'peer-[:focus:hover]:bg-error-500/25 peer-focus:bg-error-500/25'
              },
              'surface-light': {
                hover: 'peer-hover:bg-surface-250/20',
                active: 'peer-[:active:hover]:bg-surface-250/25',
                focus:
                  'peer-[:focus:hover]:bg-surface-250/25 peer-focus:bg-surface-250/25'
              },
              'neutral-light': {
                hover: 'peer-hover:bg-neutral-250/20',
                active: 'peer-[:active:hover]:bg-neutral-250/25',
                focus:
                  'peer-[:focus:hover]:bg-neutral-250/25 peer-focus:bg-neutral-250/25'
              },
              'primary-light': {
                hover: 'peer-hover:bg-primary-250/20',
                active: 'peer-[:active:hover]:bg-primary-250/25',
                focus:
                  'peer-[:focus:hover]:bg-primary-250/25 peer-focus:bg-primary-250/25'
              },
              'secondary-light': {
                hover: 'peer-hover:bg-secondary-250/20',
                active: 'peer-[:active:hover]:bg-secondary-250/25',
                focus:
                  'peer-[:focus:hover]:bg-secondary-250/25 peer-focus:bg-secondary-250/25'
              },
              'tertiary-light': {
                hover: 'peer-hover:bg-tertiary-250/20',
                active: 'peer-[:active:hover]:bg-tertiary-250/25',
                focus:
                  'peer-[:focus:hover]:bg-tertiary-250/25 peer-focus:bg-tertiary-250/25'
              },
              'success-light': {
                hover: 'peer-hover:bg-success-250/20',
                active: 'peer-[:active:hover]:bg-success-250/25',
                focus:
                  'peer-[:focus:hover]:bg-success-250/25 peer-focus:bg-success-250/25'
              },
              'warning-light': {
                hover: 'peer-hover:bg-warning-250/20',
                active: 'peer-[:active:hover]:bg-warning-250/25',
                focus:
                  'peer-[:focus:hover]:bg-warning-250/25 peer-focus:bg-warning-250/25'
              },
              'error-light': {
                hover: 'peer-hover:bg-error-250/20',
                active: 'peer-[:active:hover]:bg-error-250/25',
                focus:
                  'peer-[:focus:hover]:bg-error-250/25 peer-focus:bg-error-250/25'
              },
              'surface-on': {
                hover: 'peer-hover:bg-surface-50/20',
                active: 'peer-[:active:hover]:bg-surface-50/25',
                focus:
                  'peer-[:focus:hover]:bg-surface-50/25 peer-focus:bg-surface-50/25'
              },
              'neutral-on': {
                hover: 'peer-hover:bg-neutral-50/20',
                active: 'peer-[:active:hover]:bg-neutral-50/25',
                focus:
                  'peer-[:focus:hover]:bg-neutral-50/25 peer-focus:bg-neutral-50/25'
              },
              'primary-on': {
                hover: 'peer-hover:bg-primary-50/20',
                active: 'peer-[:active:hover]:bg-primary-50/25',
                focus:
                  'peer-[:focus:hover]:bg-primary-50/25 peer-focus:bg-primary-50/25'
              },
              'secondary-on': {
                hover: 'peer-hover:bg-secondary-50/20',
                active: 'peer-[:active:hover]:bg-secondary-50/25',
                focus:
                  'peer-[:focus:hover]:bg-secondary-50/25 peer-focus:bg-secondary-50/25'
              },
              'tertiary-on': {
                hover: 'peer-hover:bg-tertiary-50/20',
                active: 'peer-[:active:hover]:bg-tertiary-50/25',
                focus:
                  'peer-[:focus:hover]:bg-tertiary-50/25 peer-focus:bg-tertiary-50/25'
              },
              'success-on': {
                hover: 'peer-hover:bg-success-50/20',
                active: 'peer-[:active:hover]:bg-success-50/25',
                focus:
                  'peer-[:focus:hover]:bg-success-50/25 peer-focus:bg-success-50/25'
              },
              'warning-on': {
                hover: 'peer-hover:bg-warning-50/20',
                active: 'peer-[:active:hover]:bg-warning-50/25',
                focus:
                  'peer-[:focus:hover]:bg-warning-50/25 peer-focus:bg-warning-50/25'
              },
              'error-on': {
                hover: 'peer-hover:bg-error-50/20',
                active: 'peer-[:active:hover]:bg-error-50/25',
                focus:
                  'peer-[:focus:hover]:bg-error-50/25 peer-focus:bg-error-50/25'
              }
            },
            dark: {
              surface: {
                hover: 'peer-hover:bg-surface-600/20',
                active: 'peer-[:active:hover]:bg-surface-600/25',
                focus:
                  'peer-[:focus:hover]:bg-surface-600/25 peer-focus:bg-surface-600/25'
              },
              neutral: {
                hover: 'peer-hover:bg-neutral-600/20',
                active: 'peer-[:active:hover]:bg-neutral-600/25',
                focus:
                  'peer-[:focus:hover]:bg-neutral-600/25 peer-focus:bg-neutral-600/25'
              },
              primary: {
                hover: 'peer-hover:bg-primary-600/20',
                active: 'peer-[:active:hover]:bg-primary-600/25',
                focus:
                  'peer-[:focus:hover]:bg-primary-600/25 peer-focus:bg-primary-600/25'
              },
              secondary: {
                hover: 'peer-hover:bg-secondary-600/20',
                active: 'peer-[:active:hover]:bg-secondary-600/25',
                focus:
                  'peer-[:focus:hover]:bg-secondary-600/25 peer-focus:bg-secondary-600/25'
              },
              tertiary: {
                hover: 'peer-hover:bg-tertiary-600/20',
                active: 'peer-[:active:hover]:bg-tertiary-600/25',
                focus:
                  'peer-[:focus:hover]:bg-tertiary-600/25 peer-focus:bg-tertiary-600/25'
              },
              success: {
                hover: 'peer-hover:bg-success-600/20',
                active: 'peer-[:active:hover]:bg-success-600/25',
                focus:
                  'peer-[:focus:hover]:bg-success-600/25 peer-focus:bg-success-600/25'
              },
              warning: {
                hover: 'peer-hover:bg-warning-600/20',
                active: 'peer-[:active:hover]:bg-warning-600/25',
                focus:
                  'peer-[:focus:hover]:bg-warning-600/25 peer-focus:bg-warning-600/25'
              },
              error: {
                hover: 'peer-hover:bg-error-600/20',
                active: 'peer-[:active:hover]:bg-error-600/25',
                focus:
                  'peer-[:focus:hover]:bg-error-600/25 peer-focus:bg-error-600/25'
              },
              'surface-light': {
                hover: 'peer-hover:bg-surface-400/20',
                active: 'peer-[:active:hover]:bg-surface-400/25',
                focus:
                  'peer-[:focus:hover]:bg-surface-400/25 peer-focus:bg-surface-400/25'
              },
              'neutral-light': {
                hover: 'peer-hover:bg-neutral-400/20',
                active: 'peer-[:active:hover]:bg-neutral-400/25',
                focus:
                  'peer-[:focus:hover]:bg-neutral-400/25 peer-focus:bg-neutral-400/25'
              },
              'primary-light': {
                hover: 'peer-hover:bg-primary-400/20',
                active: 'peer-[:active:hover]:bg-primary-400/25',
                focus:
                  'peer-[:focus:hover]:bg-primary-400/25 peer-focus:bg-primary-400/25'
              },
              'secondary-light': {
                hover: 'peer-hover:bg-secondary-400/20',
                active: 'peer-[:active:hover]:bg-secondary-400/25',
                focus:
                  'peer-[:focus:hover]:bg-secondary-400/25 peer-focus:bg-secondary-400/25'
              },
              'tertiary-light': {
                hover: 'peer-hover:bg-tertiary-400/20',
                active: 'peer-[:active:hover]:bg-tertiary-400/25',
                focus:
                  'peer-[:focus:hover]:bg-tertiary-400/25 peer-focus:bg-tertiary-400/25'
              },
              'success-light': {
                hover: 'peer-hover:bg-success-400/20',
                active: 'peer-[:active:hover]:bg-success-400/25',
                focus:
                  'peer-[:focus:hover]:bg-success-400/25 peer-focus:bg-success-400/25'
              },
              'warning-light': {
                hover: 'peer-hover:bg-warning-400/20',
                active: 'peer-[:active:hover]:bg-warning-400/25',
                focus:
                  'peer-[:focus:hover]:bg-warning-400/25 peer-focus:bg-warning-400/25'
              },
              'error-light': {
                hover: 'peer-hover:bg-error-400/20',
                active: 'peer-[:active:hover]:bg-error-400/25',
                focus:
                  'peer-[:focus:hover]:bg-error-400/25 peer-focus:bg-error-400/25'
              },
              'surface-on': {
                hover: 'peer-hover:bg-surface-200/20',
                active: 'peer-[:active:hover]:bg-surface-200/25',
                focus:
                  'peer-[:focus:hover]:bg-surface-200/25 peer-focus:bg-surface-200/25'
              },
              'neutral-on': {
                hover: 'peer-hover:bg-neutral-200/20',
                active: 'peer-[:active:hover]:bg-neutral-200/25',
                focus:
                  'peer-[:focus:hover]:bg-neutral-200/25 peer-focus:bg-neutral-200/25'
              },
              'primary-on': {
                hover: 'peer-hover:bg-primary-200/20',
                active: 'peer-[:active:hover]:bg-primary-200/25',
                focus:
                  'peer-[:focus:hover]:bg-primary-200/25 peer-focus:bg-primary-200/25'
              },
              'secondary-on': {
                hover: 'peer-hover:bg-secondary-200/20',
                active: 'peer-[:active:hover]:bg-secondary-200/25',
                focus:
                  'peer-[:focus:hover]:bg-secondary-200/25 peer-focus:bg-secondary-200/25'
              },
              'tertiary-on': {
                hover: 'peer-hover:bg-tertiary-200/20',
                active: 'peer-[:active:hover]:bg-tertiary-200/25',
                focus:
                  'peer-[:focus:hover]:bg-tertiary-200/25 peer-focus:bg-tertiary-200/25'
              },
              'success-on': {
                hover: 'peer-hover:bg-success-200/20',
                active: 'peer-[:active:hover]:bg-success-200/25',
                focus:
                  'peer-[:focus:hover]:bg-success-200/25 peer-focus:bg-success-200/25'
              },
              'warning-on': {
                hover: 'peer-hover:bg-warning-200/20',
                active: 'peer-[:active:hover]:bg-warning-200/25',
                focus:
                  'peer-[:focus:hover]:bg-warning-200/25 peer-focus:bg-warning-200/25'
              },
              'error-on': {
                hover: 'peer-hover:bg-error-200/20',
                active: 'peer-[:active:hover]:bg-error-200/25',
                focus:
                  'peer-[:focus:hover]:bg-error-200/25 peer-focus:bg-error-200/25'
              }
            }
          },
          stateful: {
            light: {
              surface: {
                hover: 'peer-[:checked:hover]:bg-surface-500/20',
                active: 'peer-[:checked:active:hover]:bg-surface-500/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-surface-500/25 peer-[:checked:focus]:bg-surface-500/25'
              },
              neutral: {
                hover: 'peer-[:checked:hover]:bg-neutral-500/20',
                active: 'peer-[:checked:active:hover]:bg-neutral-500/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-neutral-500/25 peer-[:checked:focus]:bg-neutral-500/25'
              },
              primary: {
                hover: 'peer-[:checked:hover]:bg-primary-500/20',
                active: 'peer-[:checked:active:hover]:bg-primary-500/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-primary-500/25 peer-[:checked:focus]:bg-primary-500/25'
              },
              secondary: {
                hover: 'peer-[:checked:hover]:bg-secondary-500/20',
                active: 'peer-[:checked:active:hover]:bg-secondary-500/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-secondary-500/25 peer-[:checked:focus]:bg-secondary-500/25'
              },
              tertiary: {
                hover: 'peer-[:checked:hover]:bg-tertiary-500/20',
                active: 'peer-[:checked:active:hover]:bg-tertiary-500/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-tertiary-500/25 peer-[:checked:focus]:bg-tertiary-500/25'
              },
              success: {
                hover: 'peer-[:checked:hover]:bg-success-500/20',
                active: 'peer-[:checked:active:hover]:bg-success-500/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-success-500/25 peer-[:checked:focus]:bg-success-500/25'
              },
              warning: {
                hover: 'peer-[:checked:hover]:bg-warning-500/20',
                active: 'peer-[:checked:active:hover]:bg-warning-500/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-warning-500/25 peer-[:checked:focus]:bg-warning-500/25'
              },
              error: {
                hover: 'peer-[:checked:hover]:bg-error-500/20',
                active: 'peer-[:checked:active:hover]:bg-error-500/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-error-500/25 peer-[:checked:focus]:bg-error-500/25'
              },
              'surface-light': {
                hover: 'peer-[:checked:hover]:bg-surface-250/20',
                active: 'peer-[:checked:active:hover]:bg-surface-250/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-surface-250/25 peer-[:checked:focus]:bg-surface-250/25'
              },
              'neutral-light': {
                hover: 'peer-[:checked:hover]:bg-neutral-250/20',
                active: 'peer-[:checked:active:hover]:bg-neutral-250/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-neutral-250/25 peer-[:checked:focus]:bg-neutral-250/25'
              },
              'primary-light': {
                hover: 'peer-[:checked:hover]:bg-primary-250/20',
                active: 'peer-[:checked:active:hover]:bg-primary-250/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-primary-250/25 peer-[:checked:focus]:bg-primary-250/25'
              },
              'secondary-light': {
                hover: 'peer-[:checked:hover]:bg-secondary-250/20',
                active: 'peer-[:checked:active:hover]:bg-secondary-250/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-secondary-250/25 peer-[:checked:focus]:bg-secondary-250/25'
              },
              'tertiary-light': {
                hover: 'peer-[:checked:hover]:bg-tertiary-250/20',
                active: 'peer-[:checked:active:hover]:bg-tertiary-250/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-tertiary-250/25 peer-[:checked:focus]:bg-tertiary-250/25'
              },
              'success-light': {
                hover: 'peer-[:checked:hover]:bg-success-250/20',
                active: 'peer-[:checked:active:hover]:bg-success-250/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-success-250/25 peer-[:checked:focus]:bg-success-250/25'
              },
              'warning-light': {
                hover: 'peer-[:checked:hover]:bg-warning-250/20',
                active: 'peer-[:checked:active:hover]:bg-warning-250/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-warning-250/25 peer-[:checked:focus]:bg-warning-250/25'
              },
              'error-light': {
                hover: 'peer-[:checked:hover]:bg-error-250/20',
                active: 'peer-[:checked:active:hover]:bg-error-250/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-error-250/25 peer-[:checked:focus]:bg-error-250/25'
              },
              'surface-on': {
                hover: 'peer-[:checked:hover]:bg-surface-50/20',
                active: 'peer-[:checked:active:hover]:bg-surface-50/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-surface-50/25 peer-[:checked:focus]:bg-surface-50/25'
              },
              'neutral-on': {
                hover: 'peer-[:checked:hover]:bg-neutral-50/20',
                active: 'peer-[:checked:active:hover]:bg-neutral-50/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-neutral-50/25 peer-[:checked:focus]:bg-neutral-50/25'
              },
              'primary-on': {
                hover: 'peer-[:checked:hover]:bg-primary-50/20',
                active: 'peer-[:checked:active:hover]:bg-primary-50/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-primary-50/25 peer-[:checked:focus]:bg-primary-50/25'
              },
              'secondary-on': {
                hover: 'peer-[:checked:hover]:bg-secondary-50/20',
                active: 'peer-[:checked:active:hover]:bg-secondary-50/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-secondary-50/25 peer-[:checked:focus]:bg-secondary-50/25'
              },
              'tertiary-on': {
                hover: 'peer-[:checked:hover]:bg-tertiary-50/20',
                active: 'peer-[:checked:active:hover]:bg-tertiary-50/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-tertiary-50/25 peer-[:checked:focus]:bg-tertiary-50/25'
              },
              'success-on': {
                hover: 'peer-[:checked:hover]:bg-success-50/20',
                active: 'peer-[:checked:active:hover]:bg-success-50/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-success-50/25 peer-[:checked:focus]:bg-success-50/25'
              },
              'warning-on': {
                hover: 'peer-[:checked:hover]:bg-warning-50/20',
                active: 'peer-[:checked:active:hover]:bg-warning-50/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-warning-50/25 peer-[:checked:focus]:bg-warning-50/25'
              },
              'error-on': {
                hover: 'peer-[:checked:hover]:bg-error-50/20',
                active: 'peer-[:checked:active:hover]:bg-error-50/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-error-50/25 peer-[:checked:focus]:bg-error-50/25'
              }
            },
            dark: {
              surface: {
                hover: 'peer-[:checked:hover]:bg-surface-600/20',
                active: 'peer-[:checked:active:hover]:bg-surface-600/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-surface-600/25 peer-[:checked:focus]:bg-surface-600/25'
              },
              neutral: {
                hover: 'peer-[:checked:hover]:bg-neutral-600/20',
                active: 'peer-[:checked:active:hover]:bg-neutral-600/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-neutral-600/25 peer-[:checked:focus]:bg-neutral-600/25'
              },
              primary: {
                hover: 'peer-[:checked:hover]:bg-primary-600/20',
                active: 'peer-[:checked:active:hover]:bg-primary-600/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-primary-600/25 peer-[:checked:focus]:bg-primary-600/25'
              },
              secondary: {
                hover: 'peer-[:checked:hover]:bg-secondary-600/20',
                active: 'peer-[:checked:active:hover]:bg-secondary-600/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-secondary-600/25 peer-[:checked:focus]:bg-secondary-600/25'
              },
              tertiary: {
                hover: 'peer-[:checked:hover]:bg-tertiary-600/20',
                active: 'peer-[:checked:active:hover]:bg-tertiary-600/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-tertiary-600/25 peer-[:checked:focus]:bg-tertiary-600/25'
              },
              success: {
                hover: 'peer-[:checked:hover]:bg-success-600/20',
                active: 'peer-[:checked:active:hover]:bg-success-600/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-success-600/25 peer-[:checked:focus]:bg-success-600/25'
              },
              warning: {
                hover: 'peer-[:checked:hover]:bg-warning-600/20',
                active: 'peer-[:checked:active:hover]:bg-warning-600/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-warning-600/25 peer-[:checked:focus]:bg-warning-600/25'
              },
              error: {
                hover: 'peer-[:checked:hover]:bg-error-600/20',
                active: 'peer-[:checked:active:hover]:bg-error-600/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-error-600/25 peer-[:checked:focus]:bg-error-600/25'
              },
              'surface-light': {
                hover: 'peer-[:checked:hover]:bg-surface-400/20',
                active: 'peer-[:checked:active:hover]:bg-surface-400/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-surface-400/25 peer-[:checked:focus]:bg-surface-400/25'
              },
              'neutral-light': {
                hover: 'peer-[:checked:hover]:bg-neutral-400/20',
                active: 'peer-[:checked:active:hover]:bg-neutral-400/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-neutral-400/25 peer-[:checked:focus]:bg-neutral-400/25'
              },
              'primary-light': {
                hover: 'peer-[:checked:hover]:bg-primary-400/20',
                active: 'peer-[:checked:active:hover]:bg-primary-400/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-primary-400/25 peer-[:checked:focus]:bg-primary-400/25'
              },
              'secondary-light': {
                hover: 'peer-[:checked:hover]:bg-secondary-400/20',
                active: 'peer-[:checked:active:hover]:bg-secondary-400/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-secondary-400/25 peer-[:checked:focus]:bg-secondary-400/25'
              },
              'tertiary-light': {
                hover: 'peer-[:checked:hover]:bg-tertiary-400/20',
                active: 'peer-[:checked:active:hover]:bg-tertiary-400/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-tertiary-400/25 peer-[:checked:focus]:bg-tertiary-400/25'
              },
              'success-light': {
                hover: 'peer-[:checked:hover]:bg-success-400/20',
                active: 'peer-[:checked:active:hover]:bg-success-400/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-success-400/25 peer-[:checked:focus]:bg-success-400/25'
              },
              'warning-light': {
                hover: 'peer-[:checked:hover]:bg-warning-400/20',
                active: 'peer-[:checked:active:hover]:bg-warning-400/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-warning-400/25 peer-[:checked:focus]:bg-warning-400/25'
              },
              'error-light': {
                hover: 'peer-[:checked:hover]:bg-error-400/20',
                active: 'peer-[:checked:active:hover]:bg-error-400/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-error-400/25 peer-[:checked:focus]:bg-error-400/25'
              },
              'surface-on': {
                hover: 'peer-[:checked:hover]:bg-surface-200/20',
                active: 'peer-[:checked:active:hover]:bg-surface-200/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-surface-200/25 peer-[:checked:focus]:bg-surface-200/25'
              },
              'neutral-on': {
                hover: 'peer-[:checked:hover]:bg-neutral-200/20',
                active: 'peer-[:checked:active:hover]:bg-neutral-200/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-neutral-200/25 peer-[:checked:focus]:bg-neutral-200/25'
              },
              'primary-on': {
                hover: 'peer-[:checked:hover]:bg-primary-200/20',
                active: 'peer-[:checked:active:hover]:bg-primary-200/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-primary-200/25 peer-[:checked:focus]:bg-primary-200/25'
              },
              'secondary-on': {
                hover: 'peer-[:checked:hover]:bg-secondary-200/20',
                active: 'peer-[:checked:active:hover]:bg-secondary-200/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-secondary-200/25 peer-[:checked:focus]:bg-secondary-200/25'
              },
              'tertiary-on': {
                hover: 'peer-[:checked:hover]:bg-tertiary-200/20',
                active: 'peer-[:checked:active:hover]:bg-tertiary-200/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-tertiary-200/25 peer-[:checked:focus]:bg-tertiary-200/25'
              },
              'success-on': {
                hover: 'peer-[:checked:hover]:bg-success-200/20',
                active: 'peer-[:checked:active:hover]:bg-success-200/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-success-200/25 peer-[:checked:focus]:bg-success-200/25'
              },
              'warning-on': {
                hover: 'peer-[:checked:hover]:bg-warning-200/20',
                active: 'peer-[:checked:active:hover]:bg-warning-200/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-warning-200/25 peer-[:checked:focus]:bg-warning-200/25'
              },
              'error-on': {
                hover: 'peer-[:checked:hover]:bg-error-200/20',
                active: 'peer-[:checked:active:hover]:bg-error-200/25',
                focus:
                  'peer-[:checked:focus:hover]:bg-error-200/25 peer-[:checked:focus]:bg-error-200/25'
              }
            }
          }
        },
        inner: {
          stateless: {
            light: {
              surface: {
                hover: '[*:hover>&]:bg-surface-500/20',
                active: '[*:active:hover>&]:bg-surface-500/25',
                focus:
                  '[*:focus:hover>&]:bg-surface-500/25 [*:focus>&]:bg-surface-500/25'
              },
              neutral: {
                hover: '[*:hover>&]:bg-neutral-500/20',
                active: '[*:active:hover>&]:bg-neutral-500/25',
                focus:
                  '[*:focus:hover>&]:bg-neutral-500/25 [*:focus>&]:bg-neutral-500/25'
              },
              primary: {
                hover: '[*:hover>&]:bg-primary-500/20',
                active: '[*:active:hover>&]:bg-primary-500/25',
                focus:
                  '[*:focus:hover>&]:bg-primary-500/25 [*:focus>&]:bg-primary-500/25'
              },
              secondary: {
                hover: '[*:hover>&]:bg-secondary-500/20',
                active: '[*:active:hover>&]:bg-secondary-500/25',
                focus:
                  '[*:focus:hover>&]:bg-secondary-500/25 [*:focus>&]:bg-secondary-500/25'
              },
              tertiary: {
                hover: '[*:hover>&]:bg-tertiary-500/20',
                active: '[*:active:hover>&]:bg-tertiary-500/25',
                focus:
                  '[*:focus:hover>&]:bg-tertiary-500/25 [*:focus>&]:bg-tertiary-500/25'
              },
              success: {
                hover: '[*:hover>&]:bg-success-500/20',
                active: '[*:active:hover>&]:bg-success-500/25',
                focus:
                  '[*:focus:hover>&]:bg-success-500/25 [*:focus>&]:bg-success-500/25'
              },
              warning: {
                hover: '[*:hover>&]:bg-warning-500/20',
                active: '[*:active:hover>&]:bg-warning-500/25',
                focus:
                  '[*:focus:hover>&]:bg-warning-500/25 [*:focus>&]:bg-warning-500/25'
              },
              error: {
                hover: '[*:hover>&]:bg-error-500/20',
                active: '[*:active:hover>&]:bg-error-500/25',
                focus:
                  '[*:focus:hover>&]:bg-error-500/25 [*:focus>&]:bg-error-500/25'
              },
              'surface-light': {
                hover: '[*:hover>&]:bg-surface-250/20',
                active: '[*:active:hover>&]:bg-surface-250/25',
                focus:
                  '[*:focus:hover>&]:bg-surface-250/25 [*:focus>&]:bg-surface-250/25'
              },
              'neutral-light': {
                hover: '[*:hover>&]:bg-neutral-250/20',
                active: '[*:active:hover>&]:bg-neutral-250/25',
                focus:
                  '[*:focus:hover>&]:bg-neutral-250/25 [*:focus>&]:bg-neutral-250/25'
              },
              'primary-light': {
                hover: '[*:hover>&]:bg-primary-250/20',
                active: '[*:active:hover>&]:bg-primary-250/25',
                focus:
                  '[*:focus:hover>&]:bg-primary-250/25 [*:focus>&]:bg-primary-250/25'
              },
              'secondary-light': {
                hover: '[*:hover>&]:bg-secondary-250/20',
                active: '[*:active:hover>&]:bg-secondary-250/25',
                focus:
                  '[*:focus:hover>&]:bg-secondary-250/25 [*:focus>&]:bg-secondary-250/25'
              },
              'tertiary-light': {
                hover: '[*:hover>&]:bg-tertiary-250/20',
                active: '[*:active:hover>&]:bg-tertiary-250/25',
                focus:
                  '[*:focus:hover>&]:bg-tertiary-250/25 [*:focus>&]:bg-tertiary-250/25'
              },
              'success-light': {
                hover: '[*:hover>&]:bg-success-250/20',
                active: '[*:active:hover>&]:bg-success-250/25',
                focus:
                  '[*:focus:hover>&]:bg-success-250/25 [*:focus>&]:bg-success-250/25'
              },
              'warning-light': {
                hover: '[*:hover>&]:bg-warning-250/20',
                active: '[*:active:hover>&]:bg-warning-250/25',
                focus:
                  '[*:focus:hover>&]:bg-warning-250/25 [*:focus>&]:bg-warning-250/25'
              },
              'error-light': {
                hover: '[*:hover>&]:bg-error-250/20',
                active: '[*:active:hover>&]:bg-error-250/25',
                focus:
                  '[*:focus:hover>&]:bg-error-250/25 [*:focus>&]:bg-error-250/25'
              },
              'surface-on': {
                hover: '[*:hover>&]:bg-surface-50/20',
                active: '[*:active:hover>&]:bg-surface-50/25',
                focus:
                  '[*:focus:hover>&]:bg-surface-50/25 [*:focus>&]:bg-surface-50/25'
              },
              'neutral-on': {
                hover: '[*:hover>&]:bg-neutral-50/20',
                active: '[*:active:hover>&]:bg-neutral-50/25',
                focus:
                  '[*:focus:hover>&]:bg-neutral-50/25 [*:focus>&]:bg-neutral-50/25'
              },
              'primary-on': {
                hover: '[*:hover>&]:bg-primary-50/20',
                active: '[*:active:hover>&]:bg-primary-50/25',
                focus:
                  '[*:focus:hover>&]:bg-primary-50/25 [*:focus>&]:bg-primary-50/25'
              },
              'secondary-on': {
                hover: '[*:hover>&]:bg-secondary-50/20',
                active: '[*:active:hover>&]:bg-secondary-50/25',
                focus:
                  '[*:focus:hover>&]:bg-secondary-50/25 [*:focus>&]:bg-secondary-50/25'
              },
              'tertiary-on': {
                hover: '[*:hover>&]:bg-tertiary-50/20',
                active: '[*:active:hover>&]:bg-tertiary-50/25',
                focus:
                  '[*:focus:hover>&]:bg-tertiary-50/25 [*:focus>&]:bg-tertiary-50/25'
              },
              'success-on': {
                hover: '[*:hover>&]:bg-success-50/20',
                active: '[*:active:hover>&]:bg-success-50/25',
                focus:
                  '[*:focus:hover>&]:bg-success-50/25 [*:focus>&]:bg-success-50/25'
              },
              'warning-on': {
                hover: '[*:hover>&]:bg-warning-50/20',
                active: '[*:active:hover>&]:bg-warning-50/25',
                focus:
                  '[*:focus:hover>&]:bg-warning-50/25 [*:focus>&]:bg-warning-50/25'
              },
              'error-on': {
                hover: '[*:hover>&]:bg-error-50/20',
                active: '[*:active:hover>&]:bg-error-50/25',
                focus:
                  '[*:focus:hover>&]:bg-error-50/25 [*:focus>&]:bg-error-50/25'
              }
            },
            dark: {
              surface: {
                hover: '[*:hover>&]:bg-surface-600/20',
                active: '[*:active:hover>&]:bg-surface-600/25',
                focus:
                  '[*:focus:hover>&]:bg-surface-600/25 [*:focus>&]:bg-surface-600/25'
              },
              neutral: {
                hover: '[*:hover>&]:bg-neutral-600/20',
                active: '[*:active:hover>&]:bg-neutral-600/25',
                focus:
                  '[*:focus:hover>&]:bg-neutral-600/25 [*:focus>&]:bg-neutral-600/25'
              },
              primary: {
                hover: '[*:hover>&]:bg-primary-600/20',
                active: '[*:active:hover>&]:bg-primary-600/25',
                focus:
                  '[*:focus:hover>&]:bg-primary-600/25 [*:focus>&]:bg-primary-600/25'
              },
              secondary: {
                hover: '[*:hover>&]:bg-secondary-600/20',
                active: '[*:active:hover>&]:bg-secondary-600/25',
                focus:
                  '[*:focus:hover>&]:bg-secondary-600/25 [*:focus>&]:bg-secondary-600/25'
              },
              tertiary: {
                hover: '[*:hover>&]:bg-tertiary-600/20',
                active: '[*:active:hover>&]:bg-tertiary-600/25',
                focus:
                  '[*:focus:hover>&]:bg-tertiary-600/25 [*:focus>&]:bg-tertiary-600/25'
              },
              success: {
                hover: '[*:hover>&]:bg-success-600/20',
                active: '[*:active:hover>&]:bg-success-600/25',
                focus:
                  '[*:focus:hover>&]:bg-success-600/25 [*:focus>&]:bg-success-600/25'
              },
              warning: {
                hover: '[*:hover>&]:bg-warning-600/20',
                active: '[*:active:hover>&]:bg-warning-600/25',
                focus:
                  '[*:focus:hover>&]:bg-warning-600/25 [*:focus>&]:bg-warning-600/25'
              },
              error: {
                hover: '[*:hover>&]:bg-error-600/20',
                active: '[*:active:hover>&]:bg-error-600/25',
                focus:
                  '[*:focus:hover>&]:bg-error-600/25 [*:focus>&]:bg-error-600/25'
              },
              'surface-light': {
                hover: '[*:hover>&]:bg-surface-400/20',
                active: '[*:active:hover>&]:bg-surface-400/25',
                focus:
                  '[*:focus:hover>&]:bg-surface-400/25 [*:focus>&]:bg-surface-400/25'
              },
              'neutral-light': {
                hover: '[*:hover>&]:bg-neutral-400/20',
                active: '[*:active:hover>&]:bg-neutral-400/25',
                focus:
                  '[*:focus:hover>&]:bg-neutral-400/25 [*:focus>&]:bg-neutral-400/25'
              },
              'primary-light': {
                hover: '[*:hover>&]:bg-primary-400/20',
                active: '[*:active:hover>&]:bg-primary-400/25',
                focus:
                  '[*:focus:hover>&]:bg-primary-400/25 [*:focus>&]:bg-primary-400/25'
              },
              'secondary-light': {
                hover: '[*:hover>&]:bg-secondary-400/20',
                active: '[*:active:hover>&]:bg-secondary-400/25',
                focus:
                  '[*:focus:hover>&]:bg-secondary-400/25 [*:focus>&]:bg-secondary-400/25'
              },
              'tertiary-light': {
                hover: '[*:hover>&]:bg-tertiary-400/20',
                active: '[*:active:hover>&]:bg-tertiary-400/25',
                focus:
                  '[*:focus:hover>&]:bg-tertiary-400/25 [*:focus>&]:bg-tertiary-400/25'
              },
              'success-light': {
                hover: '[*:hover>&]:bg-success-400/20',
                active: '[*:active:hover>&]:bg-success-400/25',
                focus:
                  '[*:focus:hover>&]:bg-success-400/25 [*:focus>&]:bg-success-400/25'
              },
              'warning-light': {
                hover: '[*:hover>&]:bg-warning-400/20',
                active: '[*:active:hover>&]:bg-warning-400/25',
                focus:
                  '[*:focus:hover>&]:bg-warning-400/25 [*:focus>&]:bg-warning-400/25'
              },
              'error-light': {
                hover: '[*:hover>&]:bg-error-400/20',
                active: '[*:active:hover>&]:bg-error-400/25',
                focus:
                  '[*:focus:hover>&]:bg-error-400/25 [*:focus>&]:bg-error-400/25'
              },
              'surface-on': {
                hover: '[*:hover>&]:bg-surface-200/20',
                active: '[*:active:hover>&]:bg-surface-200/25',
                focus:
                  '[*:focus:hover>&]:bg-surface-200/25 [*:focus>&]:bg-surface-200/25'
              },
              'neutral-on': {
                hover: '[*:hover>&]:bg-neutral-200/20',
                active: '[*:active:hover>&]:bg-neutral-200/25',
                focus:
                  '[*:focus:hover>&]:bg-neutral-200/25 [*:focus>&]:bg-neutral-200/25'
              },
              'primary-on': {
                hover: '[*:hover>&]:bg-primary-200/20',
                active: '[*:active:hover>&]:bg-primary-200/25',
                focus:
                  '[*:focus:hover>&]:bg-primary-200/25 [*:focus>&]:bg-primary-200/25'
              },
              'secondary-on': {
                hover: '[*:hover>&]:bg-secondary-200/20',
                active: '[*:active:hover>&]:bg-secondary-200/25',
                focus:
                  '[*:focus:hover>&]:bg-secondary-200/25 [*:focus>&]:bg-secondary-200/25'
              },
              'tertiary-on': {
                hover: '[*:hover>&]:bg-tertiary-200/20',
                active: '[*:active:hover>&]:bg-tertiary-200/25',
                focus:
                  '[*:focus:hover>&]:bg-tertiary-200/25 [*:focus>&]:bg-tertiary-200/25'
              },
              'success-on': {
                hover: '[*:hover>&]:bg-success-200/20',
                active: '[*:active:hover>&]:bg-success-200/25',
                focus:
                  '[*:focus:hover>&]:bg-success-200/25 [*:focus>&]:bg-success-200/25'
              },
              'warning-on': {
                hover: '[*:hover>&]:bg-warning-200/20',
                active: '[*:active:hover>&]:bg-warning-200/25',
                focus:
                  '[*:focus:hover>&]:bg-warning-200/25 [*:focus>&]:bg-warning-200/25'
              },
              'error-on': {
                hover: '[*:hover>&]:bg-error-200/20',
                active: '[*:active:hover>&]:bg-error-200/25',
                focus:
                  '[*:focus:hover>&]:bg-error-200/25 [*:focus>&]:bg-error-200/25'
              }
            }
          },
          stateful: {
            light: {
              surface: {
                hover: '[*.checked:hover>&]:bg-surface-500/20',
                active: '[*.checked:active:hover>&]:bg-surface-500/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-surface-500/25 [*.checked:focus>&]:bg-surface-500/25'
              },
              neutral: {
                hover: '[*.checked:hover>&]:bg-neutral-500/20',
                active: '[*.checked:active:hover>&]:bg-neutral-500/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-neutral-500/25 [*.checked:focus>&]:bg-neutral-500/25'
              },
              primary: {
                hover: '[*.checked:hover>&]:bg-primary-500/20',
                active: '[*.checked:active:hover>&]:bg-primary-500/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-primary-500/25 [*.checked:focus>&]:bg-primary-500/25'
              },
              secondary: {
                hover: '[*.checked:hover>&]:bg-secondary-500/20',
                active: '[*.checked:active:hover>&]:bg-secondary-500/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-secondary-500/25 [*.checked:focus>&]:bg-secondary-500/25'
              },
              tertiary: {
                hover: '[*.checked:hover>&]:bg-tertiary-500/20',
                active: '[*.checked:active:hover>&]:bg-tertiary-500/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-tertiary-500/25 [*.checked:focus>&]:bg-tertiary-500/25'
              },
              success: {
                hover: '[*.checked:hover>&]:bg-success-500/20',
                active: '[*.checked:active:hover>&]:bg-success-500/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-success-500/25 [*.checked:focus>&]:bg-success-500/25'
              },
              warning: {
                hover: '[*.checked:hover>&]:bg-warning-500/20',
                active: '[*.checked:active:hover>&]:bg-warning-500/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-warning-500/25 [*.checked:focus>&]:bg-warning-500/25'
              },
              error: {
                hover: '[*.checked:hover>&]:bg-error-500/20',
                active: '[*.checked:active:hover>&]:bg-error-500/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-error-500/25 [*.checked:focus>&]:bg-error-500/25'
              },
              'surface-light': {
                hover: '[*.checked:hover>&]:bg-surface-250/20',
                active: '[*.checked:active:hover>&]:bg-surface-250/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-surface-250/25 [*.checked:focus>&]:bg-surface-250/25'
              },
              'neutral-light': {
                hover: '[*.checked:hover>&]:bg-neutral-250/20',
                active: '[*.checked:active:hover>&]:bg-neutral-250/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-neutral-250/25 [*.checked:focus>&]:bg-neutral-250/25'
              },
              'primary-light': {
                hover: '[*.checked:hover>&]:bg-primary-250/20',
                active: '[*.checked:active:hover>&]:bg-primary-250/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-primary-250/25 [*.checked:focus>&]:bg-primary-250/25'
              },
              'secondary-light': {
                hover: '[*.checked:hover>&]:bg-secondary-250/20',
                active: '[*.checked:active:hover>&]:bg-secondary-250/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-secondary-250/25 [*.checked:focus>&]:bg-secondary-250/25'
              },
              'tertiary-light': {
                hover: '[*.checked:hover>&]:bg-tertiary-250/20',
                active: '[*.checked:active:hover>&]:bg-tertiary-250/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-tertiary-250/25 [*.checked:focus>&]:bg-tertiary-250/25'
              },
              'success-light': {
                hover: '[*.checked:hover>&]:bg-success-250/20',
                active: '[*.checked:active:hover>&]:bg-success-250/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-success-250/25 [*.checked:focus>&]:bg-success-250/25'
              },
              'warning-light': {
                hover: '[*.checked:hover>&]:bg-warning-250/20',
                active: '[*.checked:active:hover>&]:bg-warning-250/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-warning-250/25 [*.checked:focus>&]:bg-warning-250/25'
              },
              'error-light': {
                hover: '[*.checked:hover>&]:bg-error-250/20',
                active: '[*.checked:active:hover>&]:bg-error-250/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-error-250/25 [*.checked:focus>&]:bg-error-250/25'
              },
              'surface-on': {
                hover: '[*.checked:hover>&]:bg-surface-50/20',
                active: '[*.checked:active:hover>&]:bg-surface-50/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-surface-50/25 [*.checked:focus>&]:bg-surface-50/25'
              },
              'neutral-on': {
                hover: '[*.checked:hover>&]:bg-neutral-50/20',
                active: '[*.checked:active:hover>&]:bg-neutral-50/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-neutral-50/25 [*.checked:focus>&]:bg-neutral-50/25'
              },
              'primary-on': {
                hover: '[*.checked:hover>&]:bg-primary-50/20',
                active: '[*.checked:active:hover>&]:bg-primary-50/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-primary-50/25 [*.checked:focus>&]:bg-primary-50/25'
              },
              'secondary-on': {
                hover: '[*.checked:hover>&]:bg-secondary-50/20',
                active: '[*.checked:active:hover>&]:bg-secondary-50/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-secondary-50/25 [*.checked:focus>&]:bg-secondary-50/25'
              },
              'tertiary-on': {
                hover: '[*.checked:hover>&]:bg-tertiary-50/20',
                active: '[*.checked:active:hover>&]:bg-tertiary-50/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-tertiary-50/25 [*.checked:focus>&]:bg-tertiary-50/25'
              },
              'success-on': {
                hover: '[*.checked:hover>&]:bg-success-50/20',
                active: '[*.checked:active:hover>&]:bg-success-50/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-success-50/25 [*.checked:focus>&]:bg-success-50/25'
              },
              'warning-on': {
                hover: '[*.checked:hover>&]:bg-warning-50/20',
                active: '[*.checked:active:hover>&]:bg-warning-50/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-warning-50/25 [*.checked:focus>&]:bg-warning-50/25'
              },
              'error-on': {
                hover: '[*.checked:hover>&]:bg-error-50/20',
                active: '[*.checked:active:hover>&]:bg-error-50/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-error-50/25 [*.checked:focus>&]:bg-error-50/25'
              }
            },
            dark: {
              surface: {
                hover: '[*.checked:hover>&]:bg-surface-600/20',
                active: '[*.checked:active:hover>&]:bg-surface-600/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-surface-600/25 [*.checked:focus>&]:bg-surface-600/25'
              },
              neutral: {
                hover: '[*.checked:hover>&]:bg-neutral-600/20',
                active: '[*.checked:active:hover>&]:bg-neutral-600/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-neutral-600/25 [*.checked:focus>&]:bg-neutral-600/25'
              },
              primary: {
                hover: '[*.checked:hover>&]:bg-primary-600/20',
                active: '[*.checked:active:hover>&]:bg-primary-600/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-primary-600/25 [*.checked:focus>&]:bg-primary-600/25'
              },
              secondary: {
                hover: '[*.checked:hover>&]:bg-secondary-600/20',
                active: '[*.checked:active:hover>&]:bg-secondary-600/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-secondary-600/25 [*.checked:focus>&]:bg-secondary-600/25'
              },
              tertiary: {
                hover: '[*.checked:hover>&]:bg-tertiary-600/20',
                active: '[*.checked:active:hover>&]:bg-tertiary-600/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-tertiary-600/25 [*.checked:focus>&]:bg-tertiary-600/25'
              },
              success: {
                hover: '[*.checked:hover>&]:bg-success-600/20',
                active: '[*.checked:active:hover>&]:bg-success-600/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-success-600/25 [*.checked:focus>&]:bg-success-600/25'
              },
              warning: {
                hover: '[*.checked:hover>&]:bg-warning-600/20',
                active: '[*.checked:active:hover>&]:bg-warning-600/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-warning-600/25 [*.checked:focus>&]:bg-warning-600/25'
              },
              error: {
                hover: '[*.checked:hover>&]:bg-error-600/20',
                active: '[*.checked:active:hover>&]:bg-error-600/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-error-600/25 [*.checked:focus>&]:bg-error-600/25'
              },
              'surface-light': {
                hover: '[*.checked:hover>&]:bg-surface-400/20',
                active: '[*.checked:active:hover>&]:bg-surface-400/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-surface-400/25 [*.checked:focus>&]:bg-surface-400/25'
              },
              'neutral-light': {
                hover: '[*.checked:hover>&]:bg-neutral-400/20',
                active: '[*.checked:active:hover>&]:bg-neutral-400/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-neutral-400/25 [*.checked:focus>&]:bg-neutral-400/25'
              },
              'primary-light': {
                hover: '[*.checked:hover>&]:bg-primary-400/20',
                active: '[*.checked:active:hover>&]:bg-primary-400/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-primary-400/25 [*.checked:focus>&]:bg-primary-400/25'
              },
              'secondary-light': {
                hover: '[*.checked:hover>&]:bg-secondary-400/20',
                active: '[*.checked:active:hover>&]:bg-secondary-400/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-secondary-400/25 [*.checked:focus>&]:bg-secondary-400/25'
              },
              'tertiary-light': {
                hover: '[*.checked:hover>&]:bg-tertiary-400/20',
                active: '[*.checked:active:hover>&]:bg-tertiary-400/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-tertiary-400/25 [*.checked:focus>&]:bg-tertiary-400/25'
              },
              'success-light': {
                hover: '[*.checked:hover>&]:bg-success-400/20',
                active: '[*.checked:active:hover>&]:bg-success-400/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-success-400/25 [*.checked:focus>&]:bg-success-400/25'
              },
              'warning-light': {
                hover: '[*.checked:hover>&]:bg-warning-400/20',
                active: '[*.checked:active:hover>&]:bg-warning-400/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-warning-400/25 [*.checked:focus>&]:bg-warning-400/25'
              },
              'error-light': {
                hover: '[*.checked:hover>&]:bg-error-400/20',
                active: '[*.checked:active:hover>&]:bg-error-400/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-error-400/25 [*.checked:focus>&]:bg-error-400/25'
              },
              'surface-on': {
                hover: '[*.checked:hover>&]:bg-surface-200/20',
                active: '[*.checked:active:hover>&]:bg-surface-200/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-surface-200/25 [*.checked:focus>&]:bg-surface-200/25'
              },
              'neutral-on': {
                hover: '[*.checked:hover>&]:bg-neutral-200/20',
                active: '[*.checked:active:hover>&]:bg-neutral-200/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-neutral-200/25 [*.checked:focus>&]:bg-neutral-200/25'
              },
              'primary-on': {
                hover: '[*.checked:hover>&]:bg-primary-200/20',
                active: '[*.checked:active:hover>&]:bg-primary-200/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-primary-200/25 [*.checked:focus>&]:bg-primary-200/25'
              },
              'secondary-on': {
                hover: '[*.checked:hover>&]:bg-secondary-200/20',
                active: '[*.checked:active:hover>&]:bg-secondary-200/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-secondary-200/25 [*.checked:focus>&]:bg-secondary-200/25'
              },
              'tertiary-on': {
                hover: '[*.checked:hover>&]:bg-tertiary-200/20',
                active: '[*.checked:active:hover>&]:bg-tertiary-200/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-tertiary-200/25 [*.checked:focus>&]:bg-tertiary-200/25'
              },
              'success-on': {
                hover: '[*.checked:hover>&]:bg-success-200/20',
                active: '[*.checked:active:hover>&]:bg-success-200/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-success-200/25 [*.checked:focus>&]:bg-success-200/25'
              },
              'warning-on': {
                hover: '[*.checked:hover>&]:bg-warning-200/20',
                active: '[*.checked:active:hover>&]:bg-warning-200/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-warning-200/25 [*.checked:focus>&]:bg-warning-200/25'
              },
              'error-on': {
                hover: '[*.checked:hover>&]:bg-error-200/20',
                active: '[*.checked:active:hover>&]:bg-error-200/25',
                focus:
                  '[*.checked:focus:hover>&]:bg-error-200/25 [*.checked:focus>&]:bg-error-200/25'
              }
            }
          }
        }
      }
    }
  }
};
