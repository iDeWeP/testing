import { unstyledPopperConfig } from '../../components/UnstyledPopper/unstyledPopperConfig';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleUnstyledBackdrop = (
  className: string,
  { invisible = false, blur = false }: Classes
) =>
  mergeClasses(
    unstyledPopperConfig.styles.backdrop.default,
    !invisible && unstyledPopperConfig.styles.backdrop.visible,
    blur && unstyledPopperConfig.styles.backdrop.blur,
    className
  );
