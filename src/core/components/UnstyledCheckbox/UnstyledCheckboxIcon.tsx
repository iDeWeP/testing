import { type HTMLInputTypeAttribute, cloneElement } from 'react';
import { useTheme } from '../../hooks/use-theme/use-theme';
import type {
  MergeComponentProps,
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
    inputType: HTMLInputTypeAttribute;
    valid: boolean;
    invalid: boolean;
    disabled: boolean;
    variant: Variant;
    size: DefaultSize;
    border: Border;
    b: DefaultBorder;
    bx: DefaultBorder;
    by: DefaultBorder;
    bt: DefaultBorder;
    bb: DefaultBorder;
    bl: DefaultBorder;
    br: DefaultBorder;
    radius: Radius;
    r: Radius;
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
  valid,
  invalid,
  disabled,
  variant,
  size: defaultSize,
  border,
  b,
  bx,
  by,
  bt,
  bb,
  bl,
  br,
  radius,
  r,
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
  const theme = useTheme();

  const mergedClassName = mergeClassName(
    'checkboxIcon',
    mergeClasses(children?.props.className, className),
    {
      theme,
      valid,
      invalid,
      disabled,
      variant,
      defaultSize,
      border,
      b,
      bx,
      by,
      bt,
      bb,
      bl,
      br,
      radius,
      r,
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
      {inputType === 'checkbox' && (
        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      )}
      {inputType === 'radio' && (
        <circle
          cx="12"
          cy="12"
          r={variant === 'text' ? '8' : '4'}
        />
      )}
    </svg>
  );
};
