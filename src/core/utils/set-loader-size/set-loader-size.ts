import type { Size, DefaultSize } from '../../types';
import { isSpacingInner } from '../merge-class-name/is-spacing-inner';

export const setLoaderSize = (size: Size) =>
  isSpacingInner(size) ? 'xs' : (size.split('-')[0] as DefaultSize);
