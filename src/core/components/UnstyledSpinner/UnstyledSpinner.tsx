import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { hasVariantBg } from '../../utils/merge-class-name/variant';
import { mergeProps } from '../../utils/merge-props/merge-props';
import type { UnstyledSpinnerProps } from './UnstyledSpinner.types';
import { UnstyledSpinnerBar } from './UnstyledSpinnerBar';
import { unstyledSpinnerConfig } from './unstyledSpinnerConfig';

export const UnstyledSpinner = (props: UnstyledSpinnerProps) => {
  const {
    disabled = false,
    spin,
    value,
    variant,
    float,
    size,
    thickness,
    scale: defaultScale,
    margin,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    border,
    color,
    className,
    componentsProps,
    trail,
    ...restProps
  } = mergeProps(unstyledSpinnerConfig.props, props);

  const length = 2 * Math.PI * (20 - thickness / 2);
  const offset = length - (value * length) / 100;

  const mergedClassName = mergeClassName('unstyledSpinner', className, {
    disabled,
    spin,
    float,
    size,
    defaultScale,
    margin,
    mx,
    my,
    mt,
    mb,
    ml,
    mr
  });

  const hasTrail = trail === undefined ? hasVariantBg(variant) : trail;
  const hasBorder =
    (variant === 'outlined' && border === 'auto') || border === 'set';

  return (
    <svg
      viewBox="0 0 40 40"
      strokeLinecap="round"
      className={mergedClassName}
      {...restProps}
    >
      {hasTrail && (
        <UnstyledSpinnerBar
          barType="trail"
          disabled={disabled}
          cx="20"
          cy="20"
          r="18"
          strokeWidth={thickness}
          variant={variant}
          color={color}
          {...componentsProps.trail}
        />
      )}
      <UnstyledSpinnerBar
        barType="bar"
        disabled={disabled}
        cx="20"
        cy="20"
        r="18"
        strokeWidth={thickness}
        strokeDasharray={length}
        strokeDashoffset={offset}
        variant={variant}
        color={color}
        {...componentsProps.bar}
      />
      {hasBorder && (
        <UnstyledSpinnerBar
          barType="bar"
          disabled={disabled}
          cx="20"
          cy="20"
          r="20"
          variant={variant}
          color={color}
          {...componentsProps.outerBorder}
        />
      )}
      {hasBorder && (
        <UnstyledSpinnerBar
          barType="bar"
          disabled={disabled}
          cx="20"
          cy="20"
          r={20 - thickness}
          variant={variant}
          color={color}
          {...componentsProps.innerBorder}
        />
      )}
    </svg>
  );
};
