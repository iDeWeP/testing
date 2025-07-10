import { unstyledPopperConfig } from '../../components/UnstyledPopper/unstyledPopperConfig';
import { sharedStyles } from '../../config/shared-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleUnstyledPopper = (
  className: string,
  { followCursor = false }: Classes
) =>
  mergeClasses(
    unstyledPopperConfig.styles.root.default,
    followCursor && sharedStyles.cursor.none,
    className
  );
