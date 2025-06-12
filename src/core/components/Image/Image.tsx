import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { mergeClassName } from '../../utils/mergeClassName/mergeClassName';
import { Box } from '../Box/Box';
import type { ImageProps } from './Image.types';
import { imageConfig } from './imageConfig';

export const Image = <E extends ElementType = 'img'>(props: ImageProps<E>) => {
  const { className, ...restProps } = useMergeProps(
    'image',
    imageConfig.props,
    props
  );

  const mergedClassName = mergeClassName('image', className);

  return (
    <Box
      className={mergedClassName}
      {...restProps}
    />
  );
};
