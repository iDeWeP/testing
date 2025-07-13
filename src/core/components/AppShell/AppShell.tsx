import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { AppShellProps } from './AppShell.types';
import { appShellConfig } from './appShellConfig';

export const AppShell = <E extends ElementType>(props: AppShellProps<E>) => {
  const mergedProps = useMergeProps('appShell', appShellConfig.props, props);

  return <UnstyledBox {...mergedProps} />;
};
