import type { CSSProps, ComponentConfig } from '../../types';
import type { UnstyledCircularProgressConfigProps } from './UnstyledCircularProgress.types';

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

export const unstyledCircularProgressConfig: ComponentConfig<UnstyledCircularProgressConfigProps> &
  Styles = {
  props: {
    gap: 'unset',
    componentsProps: {},
    spin: false,
    value: 0,
    variant: 'text',
    size: 'md',
    thickness: 4,
    margin: 'unset',
    m: 'unset',
    mx: 'unset',
    my: 'unset',
    mt: 'unset',
    mb: 'unset',
    ml: 'unset',
    mr: 'unset',
    border: 'auto',
    color: 'unset',
    ring: 'unset'
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
