import type { ElementType } from 'react';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { UnstyledTypographyProps } from './UnstyledTypography.types';
import { unstyledTypographyConfig } from './unstyledTypographyConfig';

export const UnstyledTypography = <E extends ElementType = 'span'>(
  props: UnstyledTypographyProps<E>
) => {
  const {
    size,
    weight,
    underline,
    wordBreak,
    wrap: textWrap,
    align: textAlign,
    overflow: textOverflow,
    className,
    ...restProps
  } = mergeProps(unstyledTypographyConfig.props, props);

  const mergedClassName = mergeClassName('unstyledTypography', className, {
    size,
    weight,
    underline,
    wordBreak,
    textWrap,
    textAlign,
    textOverflow
  });

  return (
    <UnstyledBox
      size="none"
      className={mergedClassName}
      {...restProps}
    />
  );
};
