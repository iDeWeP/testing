import { appShellConfig } from '../../components/AppShell/appShellConfig';
import type { ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleAppShell = (className: string): ClassName =>
  mergeClasses(appShellConfig.styles.root.default, className);
