import type { ReactNode } from 'react';
import { UnstyledCardBody } from '../../../core/components/UnstyledCardBody/UnstyledCardBody';
import type { UnstyledCardBodyProps } from '../../../core/components/UnstyledCardBody/UnstyledCardBody.types';

type Props = {
  clear?: boolean;
} & UnstyledCardBodyProps<'div'>;

export const Example = ({
  clear,
  children = 'UNSTYLED-CARD-BODY',
  ...restProps
}: Props): ReactNode => (
  <UnstyledCardBody
    color={clear ? 'unset' : 'primary'}
    {...restProps}
  >
    {children}
  </UnstyledCardBody>
);
