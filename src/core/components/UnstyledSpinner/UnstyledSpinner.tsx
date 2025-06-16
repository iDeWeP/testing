import { mergeClassName } from '../../utils/mergeClassName/mergeClassName';
import { mergeProps } from '../../utils/mergeProps/mergeProps';
import type { UnstyledSpinnerProps } from './UnstyledSpinner.types';
import { unstyledSpinnerConfig } from './unstyledSpinnerConfig';
import { UnstyledTrail } from './UnstyledTrail';

export const UnstyledSpinner = (props: UnstyledSpinnerProps) => {
  const {
    spin: isSpinning,
    disabled: isDisabled,
    value,
    variant,
    float: isFloating,
    size,
    thickness,
    margin,
    border,
    color,
    className,
    componentsProps,
    ...restProps
  } = mergeProps(unstyledSpinnerConfig.props, props);

  const length = 2 * Math.PI * (20 - thickness / 2);
  const offset = length - (value * length) / 100;

  const mergedClassName = mergeClassName('unstyledSpinner', className, {
    isSpinning,
    isDisabled,
    variant,
    isFloating,
    size,
    margin,
    border,
    color
  });

  return (
    <svg
      viewBox="0 0 40 40"
      strokeLinecap="round"
      fill="none"
      className={mergedClassName}
      {...restProps}
    >
      {border && (
        <circle
          cx="20"
          cy="20"
          r="20"
          {...componentsProps.outerBorder}
        />
      )}
      <circle
        cx="20"
        cy="20"
        r="18"
        strokeWidth={thickness}
        strokeDasharray={length}
        strokeDashoffset={offset}
        {...componentsProps.bar}
      />
      <UnstyledTrail
        isDisabled
        strokeWidth={thickness}
        variant={variant}
        color={color}
        {...componentsProps.trail}
      />
      {border && (
        <circle
          cx="20"
          cy="20"
          r={20 - thickness}
          {...componentsProps.innerBorder}
        />
      )}
    </svg>
  );
};
