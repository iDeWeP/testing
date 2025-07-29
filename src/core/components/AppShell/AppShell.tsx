import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledAppShell } from '../UnstyledAppShell/UnstyledAppShell';
import type { AppShellProps } from './AppShell.types';
import { appShellConfig } from './appShellConfig';

export const AppShell = <E extends ElementType>(
  props: AppShellProps<E>
): ReactNode => {
  const mergedProps = useMergeProps('appShell', appShellConfig.props, props);

  return <UnstyledAppShell {...mergedProps} />;
};
