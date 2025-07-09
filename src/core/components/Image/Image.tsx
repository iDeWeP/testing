import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { ImageProps } from './Image.types';
import { imageConfig } from './imageConfig';

export const Image = <E extends ElementType>(props: ImageProps<E>) => {
  const { className, ...restProps } = useMergeProps(
    'image',
    imageConfig.props,
    props
  );

  const mergedClassName = mergeClassName('image', className);

  return (
    <UnstyledBox
      className={mergedClassName}
      {...restProps}
    />
  );
};
