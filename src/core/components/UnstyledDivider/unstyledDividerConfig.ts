import type { CSSProps, Orientation, ComponentConfig } from '../../types';
import type { UnstyledDividerConfigProps } from './UnstyledDivider.types';

type Styles = {
  styles: {
    root: {
      decorated: CSSProps;
      orientation: Record<Orientation, CSSProps>;
    };
    line: {
      orientation: Record<Orientation, CSSProps>;
    };
  };
};

export const unstyledDividerConfig: ComponentConfig<UnstyledDividerConfigProps> &
  Styles = {
  props: {
    as: 'span',
    orientation: 'row',
    placement: 'center',
    padding: 'unset',
    p: 'unset',
    px: 'unset',
    py: 'unset',
    pt: 'unset',
    pb: 'unset',
    pl: 'unset',
    pr: 'unset',
    margin: 'unset',
    m: 'unset',
    mx: 'unset',
    my: 'unset',
    mt: 'unset',
    mb: 'unset',
    ml: 'unset',
    mr: 'unset',
    font: 'unset',
    color: 'unset',
    ring: 'unset',
    gap: 'unset',
    componentsProps: {}
  },
  styles: {
    root: {
      decorated: {
        textWrap: 'text-nowrap',
        alignItems: 'items-center',
        userSelect: 'select-none'
      },
      orientation: {
        row: {
          width: 'w-full'
        },
        col: {
          height: 'h-full',
          flexDirection: 'flex-col'
        }
      }
    },
    line: {
      orientation: {
        row: {
          width: 'w-full',
          borderRadius: 'border-t'
        },
        col: {
          height: 'h-full',
          borderRadius: 'border-t-0 border-r'
        }
      }
    }
  }
};
