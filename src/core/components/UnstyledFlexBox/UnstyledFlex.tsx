import type { ElementType } from 'react';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { UnstyledFlexProps } from './UnstyledFlex.types';
import { unstyledFlexConfig } from './unstyledFlexConfig';

export const UnstyledFlex = <E extends ElementType = 'div'>(
  props: UnstyledFlexProps<E>
) => {
  const {
    direction,
    wrap,
    justify: justifyContent,
    align: alignItems,
    gap,
    className,
    ...restProps
  } = mergeProps(unstyledFlexConfig.props, props);

  const mergedClassName = mergeClassName('unstyledFlex', className, {
    direction,
    wrap,
    justifyContent,
    alignItems,
    gap
  });

  return (
    <UnstyledBox
      className={mergedClassName}
      {...restProps}
    />
  );
};
