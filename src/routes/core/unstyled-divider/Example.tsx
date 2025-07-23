import type { ReactNode } from 'react';
import { UnstyledDivider } from '../../../core/components/UnstyledDivider/UnstyledDivider';
import type { UnstyledDividerProps } from '../../../core/components/UnstyledDivider/UnstyledDivider.types';

type Props = {
  clear?: boolean;
} & UnstyledDividerProps<'span'>;

export const Example = ({ clear, ...restProps }: Props): ReactNode => (
  <UnstyledDivider
    color={clear ? 'unset' : 'surface'}
    {...restProps}
  />
);
