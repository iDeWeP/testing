import { cloneElement } from 'react';
import type {
  MergeComponentProps,
  Theme,
  Variant,
  DefaultSize,
  Border,
  DefaultBorder,
  Radius,
  Color,
  Shadow,
  SVGNodeProps
} from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeClasses } from '../../utils/merge-class-name/merge-classes';
import { setAria } from '../../utils/set-aria/set-aria';

type Props = MergeComponentProps<
  'svg',
  {
    inputType: 'checkbox' | 'radio';
    theme: Theme;
    valid: boolean;
    invalid: boolean;
    disabled: boolean;
    variant: Variant;
    size: DefaultSize;
    border: Border;
    bx: DefaultBorder;
    by: DefaultBorder;
    bt: DefaultBorder;
    bb: DefaultBorder;
    bl: DefaultBorder;
    br: DefaultBorder;
    radius: Radius;
    rt: Radius;
    rb: Radius;
    rl: Radius;
    rr: Radius;
    rtl: Radius;
    rtr: Radius;
    rbl: Radius;
    rbr: Radius;
    color: Color;
    shadow: Shadow;
    children?: SVGNodeProps;
  }
>;

export const UnstyledCheckboxIcon = ({
  inputType,
  theme,
  valid,
  invalid,
  disabled,
  variant,
  size: defaultSize,
  border,
  bx,
  by,
  bt,
  bb,
  bl,
  br,
  radius,
  rt,
  rb,
  rl,
  rr,
  rtl,
  rtr,
  rbl,
  rbr,
  color,
  shadow,
  className,
  children,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName(
    'unstyledCheckboxIcon',
    mergeClasses(children?.props.className, className),
    {
      theme,
      valid,
      invalid,
      disabled,
      variant,
      defaultSize,
      border,
      bx,
      by,
      bt,
      bb,
      bl,
      br,
      radius,
      rt,
      rb,
      rl,
      rr,
      rtl,
      rtr,
      rbl,
      rbr,
      color,
      shadow
    }
  );

  if (children) {
    return cloneElement(children, {
      className: mergedClassName,
      ...setAria('checkboxIcon'),
      ...restProps
    });
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={mergedClassName}
      {...setAria('checkboxIcon')}
      {...restProps}
    >
      {inputType === 'checkbox' && (
        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      )}
      {inputType === 'radio' && (
        <circle
          cx="12"
          cy="12"
          r={variant === 'plain' || variant === 'text' ? '8' : '4'}
        />
      )}
    </svg>
  );
};
