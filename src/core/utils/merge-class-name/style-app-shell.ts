import { unstyledAppShellConfig } from '../../components/UnstyledAppShell/unstyledAppShellConfig';
import type { ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleAppShell = (className: string): ClassName =>
  mergeClasses(unstyledAppShellConfig.styles.root.default, className);
