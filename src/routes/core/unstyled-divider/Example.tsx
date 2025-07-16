import { UnstyledDivider } from '../../../core/components/UnstyledDivider/UnstyledDivider';
import type { UnstyledDividerProps } from '../../../core/components/UnstyledDivider/UnstyledDivider.types';

type Props = {
  clear?: boolean;
} & UnstyledDividerProps<'span'>;

export const Example = ({ clear, ...restProps }: Props) => (
  <UnstyledDivider
    color={clear ? 'unset' : 'surface'}
    {...restProps}
  />
);
