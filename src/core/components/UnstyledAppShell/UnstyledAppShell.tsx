import type { ElementType, ReactNode } from 'react';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { UnstyledAppShellProps } from './UnstyledAppShell.types';
import { unstyledAppShellConfig } from './unstyledAppShellConfig';

export const UnstyledAppShell = <E extends ElementType>(
  props: UnstyledAppShellProps<E>
): ReactNode => {
  const { className, ...restProps } = mergeProps(
    unstyledAppShellConfig.props,
    props
  );

  const mergedClassName = mergeClassName('appShell', className);

  return (
    <UnstyledBox
      className={mergedClassName}
      {...restProps}
    />
  );
};
