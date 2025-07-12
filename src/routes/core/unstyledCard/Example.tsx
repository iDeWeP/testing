import { UnstyledCard } from '../../../core/components/UnstyledCard/UnstyledCard';
import type { UnstyledCardProps } from '../../../core/components/UnstyledCard/UnstyledCard.types';

type Props = {
  clear?: boolean;
} & UnstyledCardProps<'div'>;

export const Example = ({
  clear,
  children = 'UNSTYLED-CARD',
  ...restProps
}: Props) => (
  <UnstyledCard
    color={clear ? 'unset' : 'primary'}
    {...restProps}
  >
    {children}
  </UnstyledCard>
);
