import type { ReactNode } from 'react';
import { UnstyledLabel } from '../../../core/components/UnstyledLabel/UnstyledLabel';
import type { UnstyledLabelProps } from '../../../core/components/UnstyledLabel/UnstyledLabel.types';

type Props = {
  clear?: boolean;
} & UnstyledLabelProps<'div'>;

export const Example = ({
  clear,
  children = 'UNSTYLED-LABEL',
  ...restProps
}: Props): ReactNode => (
  <UnstyledLabel
    color={clear ? 'unset' : 'primary'}
    {...restProps}
  >
    {children}
  </UnstyledLabel>
);
