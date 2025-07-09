import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { NavigationProps } from './Navigation.types';
import { navigationConfig } from './navigationConfig';

export const Navigation = <E extends ElementType>(
  props: NavigationProps<E>
) => {
  const { orientation, className, ...restProps } = useMergeProps(
    'navigation',
    navigationConfig.props,
    props
  );

  const mergedClassName = mergeClassName('list', className, { orientation });

  return (
    <UnstyledBox
      className={mergedClassName}
      {...restProps}
    />
  );
};
