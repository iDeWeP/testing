import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { UnstyledCard } from '../UnstyledCard/UnstyledCard';
import type { CardFooterProps } from './CardFooter.types';
import { cardFooterConfig } from './cardFooterConfig';

export const CardFooter = <E extends ElementType>(
  props: CardFooterProps<E>
) => {
  const { className, padding, ...restProps } = useMergeProps(
    'cardFooter',
    cardFooterConfig.props,
    props
  );

  const mergedClassName = mergeClassName('cardFooter', className, {
    padding
  });

  return (
    <UnstyledCard
      padding="unset"
      className={mergedClassName}
      {...restProps}
    />
  );
};
