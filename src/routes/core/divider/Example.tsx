import { Divider } from '../../../core/components/Divider/Divider';
import type { DividerProps } from '../../../core/components/Divider/Divider.types';

export const Example = ({
  children = 'DIVIDER',
  ...restProps
}: DividerProps<'span'>) => <Divider {...restProps}>{children}</Divider>;
