import { unstyledLayoutConfig } from '../../components/UnstyledLayout/unstyledLayoutConfig';
import type { Classes, ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleLayout = (
  className: string,
  { layout = 'row' }: Classes
): ClassName =>
  mergeClasses(
    unstyledLayoutConfig.styles.root.default,
    unstyledLayoutConfig.styles.root.layout[layout],
    className
  );
