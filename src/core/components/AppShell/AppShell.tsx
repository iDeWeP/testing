import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { AppShellProps } from './AppShell.types';
import { appShellConfig } from './appShellConfig';

export const AppShell = <E extends ElementType>(props: AppShellProps<E>) => {
  const { className, ...restProps } = useMergeProps(
    'appShell',
    appShellConfig.props,
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
