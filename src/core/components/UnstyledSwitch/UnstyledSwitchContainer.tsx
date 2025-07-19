import { useTheme } from '../../hooks/use-theme/use-theme';
import type {
  MergeComponentProps,
  Variant,
  Size,
  Margin,
  Border,
  DefaultBorder,
  Radius,
  Color,
  Shadow
} from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'div',
  {
    disabled: boolean;
    variant: Variant;
    size: Size;
    margin: Margin;
    m: Margin;
    mx: Margin;
    my: Margin;
    mt: Margin;
    mb: Margin;
    ml: Margin;
    mr: Margin;
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
  }
>;

export const UnstyledSwitchContainer = ({
  disabled,
  variant,
  size,
  margin,
  m,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,
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
  ...restProps
}: Props) => {
  const theme = useTheme();

  const mergedClassName = mergeClassName('switchContainer', className, {
    theme,
    disabled,
    variant,
    size,
    margin,
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
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
  });

  return (
    <div
      className={mergedClassName}
      {...restProps}
    />
  );
};
