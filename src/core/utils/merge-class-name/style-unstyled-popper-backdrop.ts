import { unstyledPopperConfig } from '../../components/UnstyledPopper/unstyledPopperConfig';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleUnstyledPopperBackdrop = (
  className: string,
  { invisible = true, blur = false }: Classes
) =>
  mergeClasses(
    unstyledPopperConfig.styles.backdrop.default,
    !invisible && unstyledPopperConfig.styles.backdrop.visible,
    blur && unstyledPopperConfig.styles.backdrop.blur,
    className
  );
