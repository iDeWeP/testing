import { cloneElement } from 'react';
import { useTheme } from '../../hooks/use-theme/use-theme';
import type {
  MergeProps,
  Variant,
  DefaultSize,
  SwitchScale,
  Color,
  SVGNodeProps
} from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { setAria } from '../../utils/set-aria/set-aria';
import type { UnstyledSwitchIconProps } from './UnstyledSwitch.types';

type Props = MergeProps<
  UnstyledSwitchIconProps,
  {
    disabled: boolean;
    variant: Variant;
    defaultSize: DefaultSize;
    switchScale: SwitchScale;
    color: Color;
    decorated: boolean;
    children?: SVGNodeProps;
  }
>;

export const UnstyledSwitchIcon = ({
  disabled,
  variant,
  defaultSize,
  switchScale,
  color,
  className,
  decorated,
  children,
  ...restProps
}: Props) => {
  const theme = useTheme();

  const mergedClassName = mergeClassName('switchIcon', className, {
    theme,
    disabled,
    variant,
    defaultSize,
    switchScale,
    color,
    decorated
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
