import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledCardBody } from '../UnstyledCardBody/UnstyledCardBody';
import type { CardFooterProps } from './CardFooter.types';
import { cardFooterConfig } from './cardFooterConfig';

export const CardFooter = <E extends ElementType>(
  props: CardFooterProps<E>
): ReactNode => {
  const mergedProps = useMergeProps(
    'cardFooter',
    cardFooterConfig.props,
    props
  );

  return (
    <UnstyledCardBody
      placement="bottom"
      {...mergedProps}
    />
  );
};
