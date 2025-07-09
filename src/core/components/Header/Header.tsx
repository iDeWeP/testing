import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { HeaderProps } from './Header.types';
import { headerConfig } from './headerConfig';

export const Header = <E extends ElementType>(props: HeaderProps<E>) => {
  const { orientation, className, ...restProps } = useMergeProps(
    'header',
    headerConfig.props,
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
