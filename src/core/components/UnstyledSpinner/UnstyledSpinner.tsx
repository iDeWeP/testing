import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import type { UnstyledSpinnerProps } from './UnstyledSpinner.types';
import { unstyledSpinnerConfig } from './unstyledSpinnerConfig';
import { UnstyledSpinnerTrail } from './UnstyledSpinnerTrail';

export const UnstyledSpinner = (props: UnstyledSpinnerProps) => {
  const {
    spin,
    disabled,
    value,
    variant,
    float,
    size: defaultSize,
    thickness,
    scale: sizeScale,
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
    defaultSize,
    sizeScale,
    margin,
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
      <UnstyledSpinnerTrail
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
