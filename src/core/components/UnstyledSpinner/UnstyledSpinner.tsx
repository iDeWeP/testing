import type { ReactNode } from 'react';
import { isAutoBordered } from '../../utils/is-auto-bordered/is-auto-bordered';
import { hasVariantBg } from '../../utils/merge-class-name/has-variant-bg';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { setAria } from '../../utils/set-aria/set-aria';
import type { UnstyledSpinnerProps } from './UnstyledSpinner.types';
import { UnstyledSpinnerBar } from './UnstyledSpinnerBar';
import { unstyledSpinnerConfig } from './unstyledSpinnerConfig';

export const UnstyledSpinner = (props: UnstyledSpinnerProps): ReactNode => {
  const {
    disabled = false,
    spin,
    value,
    variant,
    size,
    thickness,
    margin,
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    border,
    color,
    ring,
    className,
    componentsProps,
    trail,
    ...restProps
  } = mergeProps(unstyledSpinnerConfig.props, props);

  const mergedClassName = mergeClassName('spinner', className, {
    disabled,
    spin,
    size,
    margin,
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    ring
  });

  const length = 2 * Math.PI * (20 - thickness / 2);
  const offset = length - (value * length) / 100;
  const hasTrail = trail === undefined ? hasVariantBg(variant) : trail;
  const hasBorder = isAutoBordered(variant, border);

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
          {...setAria('block', { disabled })}
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
