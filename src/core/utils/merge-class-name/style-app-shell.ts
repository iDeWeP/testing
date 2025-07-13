import { appShellConfig } from '../../components/AppShell/appShellConfig';
import { mergeClasses } from './merge-classes';

export const styleAppShell = (className: string) =>
  mergeClasses(appShellConfig.styles.root.default, className);
