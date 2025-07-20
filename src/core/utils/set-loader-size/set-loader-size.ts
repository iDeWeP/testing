import type { Size } from '../../types';
import { getDefaultSize } from '../merge-class-name/get-default-size';
import { isSpacingInner } from '../merge-class-name/is-spacing-inner';

export const setLoaderSize = (size: Size) =>
  isSpacingInner(size) ? 'xs' : getDefaultSize(size);
