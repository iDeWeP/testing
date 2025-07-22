import type { MergeProps, DefaultSize, Margin, Radius } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import type { UnstyledSwitchContainerProps } from './UnstyledSwitch.types';

type Props = MergeProps<
  UnstyledSwitchContainerProps,
  {
    defaultSize: DefaultSize;
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
    decorated: boolean;
  }
>;

export const UnstyledSwitchContainer = ({
  defaultSize,
  margin,
  m,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,
  radius = 'full',
  r,
  rt,
  rb,
  rl,
  rr,
  rtl,
  rtr,
  rbl,
  rbr,
  decorated,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('switchContainer', className, {
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
    decorated
  });

  return (
    <div
      className={mergedClassName}
      {...restProps}
    />
  );
};
