import { Card } from '../core/components/Card/Card';
import type { CardProps } from '../core/components/Card/Card.types';

export const ExampleAnchor = ({
  className,
  ...restProps
}: CardProps<'div'>) => (
  <Card
    variant="solid"
    padding="xs-xs"
    color="primary-on"
    className={`relative ${className}`}
    {...restProps}
  />
);
