import { unstyledPopperConfig } from '../../components/UnstyledPopper/unstyledPopperConfig';
import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import mergeClasses from './mergeClasses';

export const styleUnstyledPopper = (
  className: string,
  { followCursor = false }: Classes
) =>
  mergeClasses(
    unstyledPopperConfig.styles.root.default,
    followCursor && generic.styles.cursor.none,
    className
  );
