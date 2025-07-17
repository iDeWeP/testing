import { Container } from '../../../core/components/Container/Container';
import type { ContainerProps } from '../../../core/components/Container/Container.types';

export const Example = ({
  children = 'CONTAINER',
  ...restProps
}: ContainerProps<'div'>) => <Container {...restProps}>{children}</Container>;
