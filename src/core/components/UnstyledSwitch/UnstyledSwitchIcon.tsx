import { cloneElement } from 'react';
import type {
  MergeProps,
  Theme,
  Variant,
  InnerScale,
  Color,
  SVGNodeProps
} from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { setAria } from '../../utils/set-aria/set-aria';
import type { UnstyledSwitchIconProps } from './UnstyledSwitch.types';

type Props = MergeProps<
  UnstyledSwitchIconProps,
  {
    theme: Theme;
    disabled: boolean;
    variant: Variant;
    innerScale: InnerScale;
    color: Color;
    children?: SVGNodeProps;
  }
>;

export const UnstyledSwitchIcon = ({
  theme,
  disabled,
  variant,
  innerScale,
  color,
  className,
  children,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('switchIcon', className, {
    theme,
    disabled,
    variant,
    innerScale,
    color
  });

  if (children) {
    return cloneElement(children, {
      className: mergedClassName,
      ...setAria('icon'),
      ...restProps
    });
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={mergedClassName}
      {...setAria('icon')}
      {...restProps}
    >
      <circle
        cx="12"
        cy="12"
        r="12"
      />
    </svg>
  );
};
