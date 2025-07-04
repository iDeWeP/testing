import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { CardProps } from './Card.types';
import { cardConfig } from './cardConfig';

export const Card = <E extends ElementType = 'div'>(props: CardProps<E>) => {
  const {
    orientation,
    size: containerSize,
    className,
    ...restProps
  } = useMergeProps('card', cardConfig.props, props);

  const mergedClassName = mergeClassName('card', className, {
    orientation,
    containerSize
  });

  return (
    <UnstyledBox
      className={mergedClassName}
      {...restProps}
    />
  );
};
