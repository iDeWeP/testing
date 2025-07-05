import { Card } from '../../../core/components/Card/Card';
import type { CardProps } from '../../../core/components/Card/Card.types';

export const Example = ({
  children = 'CARD',
  ...restProps
}: CardProps<'div'>) => <Card {...restProps}>{children}</Card>;
