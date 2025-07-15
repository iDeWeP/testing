import { CardBody } from '../../../core/components/CardBody/CardBody';
import type { CardBodyProps } from '../../../core/components/CardBody/CardBody.types';

export const Example = ({
  children = 'CARD-BODY',
  ...restProps
}: CardBodyProps<'div'>) => <CardBody {...restProps}>{children}</CardBody>;
