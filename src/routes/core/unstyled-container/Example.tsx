import type { ReactNode } from 'react';
import { UnstyledContainer } from '../../../core/components/UnstyledContainer/UnstyledContainer';
import type { UnstyledContainerProps } from '../../../core/components/UnstyledContainer/UnstyledContainer.types';

type Props = {
  clear?: boolean;
} & UnstyledContainerProps<'div'>;

export const Example = ({
  clear,
  children = 'UNSTYLED-CONTAINER',
  ...restProps
}: Props): ReactNode => (
  <UnstyledContainer
    color={clear ? 'unset' : 'primary'}
    {...restProps}
  >
    {children}
  </UnstyledContainer>
);
