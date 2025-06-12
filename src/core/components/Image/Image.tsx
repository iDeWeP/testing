import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { mergeClassName } from '../../utils/mergeClassName/mergeClassName';
import { Box } from '../Box/Box';
import type { ImageProps } from './Image.types';
import { imageConfig } from './imageConfig';

export const Image = <E extends ElementType = 'image'>(
  props: ImageProps<E>
) => {
  const { configClassName, className, ...restProps } = useMergeProps(
    'image',
    imageConfig.props,
    props
  );

  const mergedClassName = mergeClassName({
    component: 'image',
    className,
    configClassName
  });

  return (
    <Box
      className={mergedClassName}
      {...restProps}
    />
  );
};
