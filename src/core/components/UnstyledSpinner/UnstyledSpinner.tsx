import { mergeProps } from '../../utils/merge-props/merge-props';
import { mergeClassName } from '../../utils/mergeClassName/merge-class-name';
import type { UnstyledSpinnerProps } from './UnstyledSpinner.types';
import { unstyledSpinnerConfig } from './unstyledSpinnerConfig';
import { UnstyledTrail } from './UnstyledTrail';

export const UnstyledSpinner = (props: UnstyledSpinnerProps) => {
  const {
    spin,
    disabled,
    value,
    variant,
    float,
    size,
    thickness,
    scale: defaultScale,
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
    spin,
    disabled,
    variant,
    float,
    size,
    defaultScale,
    margin,
    border,
    color
  });

  return (
    <svg
      viewBox="0 0 40 40"
      strokeLinecap="round"
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
      <UnstyledTrail
        disabled={disabled}
        strokeWidth={thickness}
        variant={variant}
        color={color}
        {...componentsProps.trail}
      />
      <circle
        cx="20"
        cy="20"
        r="18"
        strokeWidth={thickness}
        strokeDasharray={length}
        strokeDashoffset={offset}
        {...componentsProps.bar}
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
