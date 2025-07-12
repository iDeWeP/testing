import { UnstyledContainer } from '../../../core/components/UnstyledContainer/UnstyledContainer';
import type { UnstyledContainerProps } from '../../../core/components/UnstyledContainer/UnstyledContainer.types';

type Props = {
  clear?: boolean;
} & UnstyledContainerProps<'div'>;

export const Example = ({
  clear,
  children = 'UNSTYLED-CONTAINER',
  ...restProps
}: Props) => (
  <UnstyledContainer
    variant="light"
    color={clear ? 'unset' : 'primary'}
    {...restProps}
  >
    {children}
  </UnstyledContainer>
);
