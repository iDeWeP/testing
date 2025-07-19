import { cloneElement } from 'react';
import type {
  MergeComponentProps,
  Theme,
  Color,
  SVGNodeProps,
  Variant
} from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { setAria } from '../../utils/set-aria/set-aria';

type Props = MergeComponentProps<
  'svg',
  {
    theme: Theme;
    disabled: boolean;
    variant: Variant;
    color: Color;
    children?: SVGNodeProps;
  }
>;

export const UnstyledSwitchIcon = ({
  theme,
  disabled,
  variant,
  color,
  className,
  children,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('switchIcon', className, {
    theme,
    disabled,
    variant,
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
