import type { ElementType } from 'react';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { UnstyledListProps } from './UnstyledList.types';
import { unstyledListConfig } from './unstyledListConfig';

export const UnstyledList = <E extends ElementType>(
  props: UnstyledListProps<E>
) => {
  const { orientation, className, ...restProps } = mergeProps(
    unstyledListConfig.props,
    props
  );

  const mergedClassName = mergeClassName('unstyledList', className, {
    orientation
  });

  return (
    <UnstyledBox
      className={mergedClassName}
      {...restProps}
    />
  );
};
