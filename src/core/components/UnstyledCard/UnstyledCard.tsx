import type { ElementType } from 'react';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { UnstyledCardProps } from './UnstyledCard.types';
import { unstyledCardConfig } from './unstyledCardConfig';

export const UnstyledCard = <E extends ElementType>(
  props: UnstyledCardProps<E>
) => {
  const { orientation, className, ...restProps } = mergeProps(
    unstyledCardConfig.props,
    props
  );

  const mergedClassName = mergeClassName('unstyledCard', className, {
    orientation
  });

  return (
    <UnstyledBox
      className={mergedClassName}
      {...restProps}
    />
  );
};
