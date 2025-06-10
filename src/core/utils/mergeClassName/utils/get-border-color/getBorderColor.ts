import type { Variant, Border } from '../../../../types';

const getBorderColor = (
  variant: Variant,
  border: Border,
  isDisabled?: boolean
) =>
  !isDisabled && variant === 'solid' && border && border !== 'none'
    ? 'transparent'
    : 'none';

export default getBorderColor;
