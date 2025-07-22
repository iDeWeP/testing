import type { ReactNode } from 'react';
import { CardBody } from '../../../core/components/CardBody/CardBody';
import type { CardBodyProps } from '../../../core/components/CardBody/CardBody.types';

export const Example = ({
  children = 'CARD-BODY',
  ...restProps
}: CardBodyProps<'div'>): ReactNode => (
  <CardBody {...restProps}>{children}</CardBody>
);
