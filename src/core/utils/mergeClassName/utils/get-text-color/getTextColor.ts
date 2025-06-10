import type {
  Variant,
  MergedDefaultColor,
  MergedTextColor
} from '../../../../types';

const getTextColor = (
  variant: Variant,
  color: MergedDefaultColor,
  isDisabled?: boolean
): MergedTextColor => {
  if (isDisabled) {
    return 'disabled';
  }

  if (variant === 'none') {
    return 'inherit';
  }

  if ((variant === 'plain' || variant === 'solid') && color !== 'surface') {
    return `on-${color}`;
  }

  return color;
};

export default getTextColor;
