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
    hasRipple: boolean;
    margin: Margin;
    mx: Margin;
    my: Margin;
    mt: Margin;
    mb: Margin;
    ml: Margin;
    mr: Margin;
    radius?: Radius;
    rt?: Radius;
    rb?: Radius;
    rl?: Radius;
    rr?: Radius;
    rtl?: Radius;
    rtr?: Radius;
    rbl?: Radius;
    rbr?: Radius;
  }
>;

export const UnstyledCheckboxContainer = ({
  size,
  hasRipple,
  margin,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,
  radius,
  rt,
  rb,
  rl,
  rr,
  rtl,
  rtr,
  rbl,
  rbr,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName(
    'unstyledCheckboxContainer',
    className,
    {
      size,
      hasRipple,
      margin,
      mx,
      my,
      mt,
      mb,
      ml,
      mr,
      radius,
      rt,
      rb,
      rl,
      rr,
      rtl,
      rtr,
      rbl,
      rbr
    }
  );

  return (
    <div
      className={mergedClassName}
      {...restProps}
    />
  );
};
