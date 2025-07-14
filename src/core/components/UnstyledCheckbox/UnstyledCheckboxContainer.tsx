import type {
  MergeComponentProps,
  DefaultSize,
  Margin,
  Radius
} from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'div',
  {
    size: DefaultSize;
    margin: Margin;
    m: Margin;
    mx: Margin;
    my: Margin;
    mt: Margin;
    mb: Margin;
    ml: Margin;
    mr: Margin;
    radius?: Radius;
    r?: Radius;
    rt?: Radius;
    rb?: Radius;
    rl?: Radius;
    rr?: Radius;
    rtl?: Radius;
    rtr?: Radius;
    rbl?: Radius;
    rbr?: Radius;
    hasRipple: boolean;
  }
>;

export const UnstyledCheckboxContainer = ({
  size: defaultSize,
  margin,
  m,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,
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
  hasRipple,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName(
    'unstyledCheckboxContainer',
    className,
    {
      defaultSize,
      margin,
      m,
      mx,
      my,
      mt,
      mb,
      ml,
      mr,
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
      hasRipple
    }
  );

  return (
    <div
      className={mergedClassName}
      {...restProps}
    />
  );
};
