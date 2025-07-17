import type { ElementType } from 'react';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { UnstyledGroupProps } from './UnstyledGroup.types';
import { unstyledGroupConfig } from './unstyledGroupConfig';

export const UnstyledGroup = <E extends ElementType>(
  props: UnstyledGroupProps<E>
) => {
  const { spacing, className, orientation, ...restProps } = mergeProps(
    unstyledGroupConfig.props,
    props
  );

  const mergedClassName = mergeClassName('group', className, {
    orientation,
    spacing
  });

  return (
    <UnstyledBox
      className={mergedClassName}
      {...restProps}
    />
  );
};
