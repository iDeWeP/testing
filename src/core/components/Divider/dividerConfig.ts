import type { CSSProps, Orientation, ComponentConfig } from '../../types';
import type { DividerConfigProps } from './Divider.types';

type Styles = {
  styles: {
    root: {
      decorated: CSSProps;
      orientation: Record<Orientation, CSSProps>;
    };
    line: {
      orientation: Record<Orientation, CSSProps>;
      grow: CSSProps;
    };
  };
};

export const dividerConfig: ComponentConfig<DividerConfigProps> & Styles = {
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
    font: 'xs',
    color: 'surface',
    gap: 'xs',
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
          borderRadius: 'border-t'
        },
        col: {
          borderRadius: 'border-t-0 border-r'
        }
      },
      grow: {
        flexGrow: 'grow'
      }
    }
  }
};
