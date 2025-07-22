import type { ReactNode } from 'react';
import { useTheme } from '../../hooks/use-theme/use-theme';
import { isAutoBordered } from '../../utils/is-auto-bordered/is-auto-bordered';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import type { UnstyledLoaderProps } from './UnstyledLoader.types';
import { unstyledLoaderConfig } from './unstyledLoaderConfig';

export const UnstyledLoader = (props: UnstyledLoaderProps): ReactNode => {
  const {
    checked,
    disabled = false,
    spin,
    value,
    variant,
    float,
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
    ...restProps
  } = mergeProps(unstyledLoaderConfig.props, props);

  const theme = useTheme();

  const length = 2 * Math.PI * (20 - thickness / 2);
  const offset = length - (value * length) / 100;

  const mergedClassName = mergeClassName('loader', className, {
    theme,
    checked,
    disabled,
    spin,
    variant,
    float,
    size,
    margin,
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    color,
    ring
  });

  const isBordered = isAutoBordered(variant, border);

  return (
    <svg
      viewBox="0 0 40 40"
      strokeLinecap="round"
      className={mergedClassName}
      {...restProps}
    >
      <circle
        cx="20"
        cy="20"
        r="18"
        strokeWidth={thickness}
        strokeDasharray={length}
        strokeDashoffset={offset}
        {...componentsProps.bar}
      />
      {isBordered && (
        <circle
          cx="20"
          cy="20"
          r="20"
          {...componentsProps.outerBorder}
        />
      )}
      {isBordered && (
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
