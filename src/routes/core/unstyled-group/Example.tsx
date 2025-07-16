import { UnstyledGroup } from '../../../core/components/UnstyledGroup/UnstyledGroup';
import type { UnstyledGroupProps } from '../../../core/components/UnstyledGroup/UnstyledGroup.types';

type Props = {
  clear?: boolean;
} & UnstyledGroupProps<'div'>;

export const Example = ({ clear, children = 'GROUP', ...restProps }: Props) => (
  <UnstyledGroup
    color={clear ? 'unset' : 'primary'}
    {...restProps}
  >
    {children}
  </UnstyledGroup>
);
