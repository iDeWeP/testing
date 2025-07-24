import type { ElementType, ReactNode } from 'react';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { UnstyledGroupProps } from './UnstyledGroup.types';
import { unstyledGroupConfig } from './unstyledGroupConfig';

export const UnstyledGroup = <E extends ElementType>(
  props: UnstyledGroupProps<E>
): ReactNode => {
  const {
    orientation,
    gap: groupGap,
    className,
    ...restProps
  } = mergeProps(unstyledGroupConfig.props, props);

  const mergedClassName = mergeClassName('group', className, {
    orientation,
    groupGap
  });

  return (
    <UnstyledBox
      gx="unset"
      gy="unset"
      className={mergedClassName}
      {...restProps}
    />
  );
};
