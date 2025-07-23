import type { CSSProps, ComponentConfig } from '../../types';
import type { CircularProgressConfigProps } from './CircularProgress.types';

type Styles = {
  styles: {
    root: {
      default: CSSProps;
    };
    label: {
      default: CSSProps;
    };
  };
};

export const circularProgressConfig: ComponentConfig<CircularProgressConfigProps> &
  Styles = {
  props: {
    spin: false,
    value: 75,
    variant: 'light',
    size: 'md',
    thickness: 4,
    color: 'primary',
    componentsProps: {},
    label: true,
    margin: 'unset',
    m: 'unset',
    mx: 'unset',
    my: 'unset',
    mt: 'unset',
    mb: 'unset',
    ml: 'unset',
    mr: 'unset',
    border: 'auto',
    ring: 'unset',
    gap: 'unset'
  },
  styles: {
    root: {
      default: {
        display: 'inline-flex',
        position: 'relative',
        borderRadius: 'rounded-full',
        overflow: 'overflow-hidden'
      }
    },
    label: {
      default: {
        display: 'flex',
        position: 'absolute',
        textWrap: 'text-nowrap',
        userSelect: 'select-none'
      }
    }
  }
};
