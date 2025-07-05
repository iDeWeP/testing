import { Mark } from '../../../core/components/Mark/Mark';
import type { MarkProps } from '../../../core/components/Mark/Mark.types';

export const Example = ({
  children = 'MARK',
  ...restProps
}: MarkProps<'span'>) => <Mark {...restProps}>{children}</Mark>;
