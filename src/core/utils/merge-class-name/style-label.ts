import { unstyledLabelConfig } from '../../components/UnstyledLabel/unstyledLabelConfig';
import { sharedStyle } from '../../config/shared-style';
import type { Classes, ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleLabel = (
  className: string,
  { orientation = 'row' }: Classes
): ClassName =>
  mergeClasses(
    unstyledLabelConfig.styles.root.default,
    sharedStyle.direction[orientation],
    className
  );
