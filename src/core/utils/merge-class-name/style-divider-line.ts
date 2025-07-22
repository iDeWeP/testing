import { unstyledDividerConfig } from '../../components/UnstyledDivider/unstyledDividerConfig';
import type { Classes, ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleDividerLine = (
  className: string,
  { orientation = 'row' }: Classes
): ClassName =>
  mergeClasses(
    unstyledDividerConfig.styles.line.orientation[orientation],
    className
  );
