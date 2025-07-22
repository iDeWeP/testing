import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledCardBody } from '../UnstyledCardBody/UnstyledCardBody';
import type { CardBodyProps } from './CardBody.types';
import { cardBodyConfig } from './cardBodyConfig';

export const CardBody = <E extends ElementType>(
  props: CardBodyProps<E>
): ReactNode => {
  const mergedProps = useMergeProps('cardBody', cardBodyConfig.props, props);

  return <UnstyledCardBody {...mergedProps} />;
};
