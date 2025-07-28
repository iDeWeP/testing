import type { ElementType, ReactNode } from 'react';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { UnstyledLayoutProps } from './UnstyledLayout.types';
import { unstyledLayoutConfig } from './unstyledLayoutConfig';

export const UnstyledLayout = <E extends ElementType>(
  props: UnstyledLayoutProps<E>
): ReactNode => {
  const { layout, className, ...restProps } = mergeProps(
    unstyledLayoutConfig.props,
    props
  );

  const mergedClassName = mergeClassName('layout', className, { layout });

  return (
    <UnstyledBox
      className={mergedClassName}
      {...restProps}
    />
  );
};
