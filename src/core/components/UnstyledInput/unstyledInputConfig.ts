import type {
  InputVariant,
  InputSize,
  CSSProps,
  ComponentConfig
} from '../../types';
import type { UnstyledInputConfigProps } from './UnstyledInput.types';

type Styles = {
  styles: {
    label: {
      variant: Record<InputVariant, Record<InputSize, CSSProps>>;
    };
  };
};

export const unstyledInputConfig: ComponentConfig<UnstyledInputConfigProps> &
  Styles = {
  props: {
    variant: 'default',
    size: 'md',
    margin: 'unset',
    mx: 'unset',
    my: 'unset',
    mt: 'unset',
    mb: 'unset',
    ml: 'unset',
    mr: 'unset',
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
    componentsProps: {}
  },
  styles: {
    label: {
      variant: {
        default: {
          sm: {
            top: 'top-4',
            group: 'group-[.shifted]:top-0'
          },
          md: {
            top: 'top-6',
            group: 'group-[.shifted]:top-1'
          },
          lg: {
            top: 'top-8',
            group: 'group-[.shifted]:top-3'
          }
        },
        light: {
          sm: {
            top: 'top-2/4',
            translate: '-translate-y-2/4',
            group: 'group-[.shifted]:top-0 group-[.shifted]:translate-y-0'
          },
          md: {
            top: 'top-2/4',
            translate: '-translate-y-2/4',
            group: 'group-[.shifted]:top-1 group-[.shifted]:translate-y-0'
          },
          lg: {
            top: 'top-2/4',
            translate: '-translate-y-2/4',
            group: 'group-[.shifted]:top-3 group-[.shifted]:translate-y-0'
          }
        },
        outlined: {
          sm: {
            top: 'top-2/4',
            translate: '-translate-y-2/4',
            group: 'group-[.shifted]:-top-px'
          },
          md: {
            top: 'top-2/4',
            translate: '-translate-y-2/4',
            group: 'group-[.shifted]:-top-px'
          },
          lg: {
            top: 'top-2/4',
            translate: '-translate-y-2/4',
            group: 'group-[.shifted]:-top-px'
          }
        }
      }
    }
  }
};
