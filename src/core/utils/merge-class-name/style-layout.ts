import { layoutConfig } from '../../components/Layout/layoutConfig';
import type { Classes, ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleLayout = (
  className: string,
  { layout = 'row' }: Classes
): ClassName =>
  mergeClasses(
    layoutConfig.styles.root.default,
    layoutConfig.styles.root.layouts[layout],
    className
  );
