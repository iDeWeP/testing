import type {
  Variant,
  MergedDefaultColor,
  MergedBgColor
} from '../../../../types';

const getBgColor = (
  variant: Variant,
  color: MergedDefaultColor,
  isDisabled?: boolean
): MergedBgColor => {
  if (isDisabled) {
    return 'disabled';
  }

  if (color === 'surface') {
    return variant === 'plain' || variant === 'text' ? 'inherit' : 'surface';
  }

  if (variant === 'soft') {
    return `soft-${color}`;
  }

  if (variant === 'default') {
    return 'on-neutral';
  }

  if (variant === 'surface') {
    return `on-${color}`;
  }

  if (variant === 'solid') {
    return color;
  }

  return 'inherit';
};

export default getBgColor;
